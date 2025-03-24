const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Root route → Serves the frontend
// Rota raiz - Redireciona para o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




//Scrapes Amazon Brasil em busca de produtos com base em uma palavra-chave.
//@param {string} keyword - Termo de busca (ex: "God of War")
//@returns {Array} Lista de produtos com título, avaliação, reviews, imagem, preço e link.

/**
 * Scrapes Amazon Brazil for product listings based on a keyword.
 * @param {string} keyword - Search term (e.g., "God of War")
 * @returns {Array} List of products with title, rating, reviews, image, price, and link.
 */
async function scrapeAmazon(keyword) {
  try {
    const url = `https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`;
    
    // Fetch Amazon search page (with headers to mimic a real browser)
    // Busca a página de resultados da Amazon (com headers para simular um navegador real)
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });
    // Parse HTML using JSDOM
    // Analisa o HTML usando JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const products = [];
    
    // Select all product listings
    // Seleciona todos os produtos listados
    const items = document.querySelectorAll('.s-result-item[data-component-type="s-search-result"]');
    
    // Extract product details
    // Extrai os detalhes de cada produto
    items.forEach(item => {
      const titleElement = item.querySelector('h2 a span') || 
                         item.querySelector('.a-size-mini a span') ||
                         item.querySelector('.a-size-base-plus.a-color-base.a-text-normal');
      const title = titleElement?.textContent.trim() || 'N/A';

      const ratingElement = item.querySelector('.a-icon-alt');
      const rating = ratingElement ? ratingElement.textContent.split(' ')[0] : 'N/A';

      const reviewsElement = item.querySelector('.a-size-base.s-underline-text') ||
                           item.querySelector('.a-size-base:not(.a-color-base)');
      const reviews = reviewsElement?.textContent.trim().replace(/[^\d]/g, '') || '0';

      const imageElement = item.querySelector('.s-image') ||
                         item.querySelector('img.s-latency-cf-element');
      const image = imageElement?.src || 'N/A';

      const priceElement = item.querySelector('.a-price .a-offscreen') ||
                         item.querySelector('.a-price-whole');
      const price = priceElement?.textContent.trim() || 'N/A';

      const linkElement = item.querySelector('h2 a') || 
                        item.querySelector('.a-link-normal.a-text-normal');
      const link = linkElement ? `https://www.amazon.com.br${linkElement.href}` : '#';

      products.push({ title, rating, reviews, image, price, link });
    });

    return products;
  } catch (error) {
    console.error('Erro ao fazer scraping:', error);
    throw error;
  }
}

// API endpoint for scraping
// Endpoint da API para scraping
app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: 'Parâmetro "keyword" é obrigatório.' });
  }

  try {
    const products = await scrapeAmazon(keyword);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao processar a solicitação.' });
  }
});

// Start server
// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Frontend disponível em http://localhost:${PORT}/`);
});