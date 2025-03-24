# (English guide)
# Amazon Product Scraper

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

A web scraper that extracts product data from Amazon Brazil search results.

## 📋 Features

- Scrapes product titles, ratings, reviews, images and prices
- Simple API endpoint (`/api/scrape`)
- Clean responsive frontend interface
- Error handling and validation

## 🛠️ Technologies

### Backend
- Node.js
- Express
- Axios (HTTP requests)
- JSDOM (HTML parsing)
- CORS (Cross-origin requests)

### Frontend
- Vanilla JavaScript
- HTML5
- CSS3 (Flexbox/Grid)

## 🚀 Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/amazon-scraper.git
cd amazon-scraper
```
2. Install dependencies:
```
npm install
```
3. Start the server:
```
node server.js
```
4. Access in your browser:
```
http://localhost:3000
```
## 📚 Usage
API Endpoint
```
GET /api/scrape?keyword=SEARCH_TERM
```
Example response:
```
[
  {
    "title": "iPhone 14 Pro Max 128GB - Space Black",
    "rating": "4.8",
    "reviews": "3421",
    "image": "https://m.media-amazon.com/images/I/61...jpg",
    "price": "R$ 7.599",
    "link": "https://www.amazon.com.br/iPhone-14-Pro-Max-128GB/dp/..."
  }
]
```

## Frontend Interface
Enter search term (e.g. "God of War")

Click "Search" button

View formatted results

ScreenShots:
![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)

## 🏗️ Project Structure
```
amazon-scraper/
├── public/
│   └── index.html        # Frontend interface
├── server.js             # Backend server
├── package.json          # Dependencies
└── README.md             # Documentation
```

## ⚠️ Limitations
-Only scrapes first page of results

-May get blocked if making too many requests

-Educational purpose only

## 📄 License
MIT - See LICENSE for details.

Developed with ❤️ by Renan Mello

# (Guia em Português)
# Amazon Product Scraper

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/License-MIT-orange)

Um web scraper que extrai dados de produtos dos resultados de busca da Amazon Brasil.

## 📋 Funcionalidades

- Extrai títulos, avaliações, reviews, imagens e preços de produtos
- Endpoint API simples (`/api/scrape`) 
- Interface frontend responsiva e limpa
- Tratamento de erros e validações

## 🛠️ Tecnologias

### Backend
- Node.js
- Express
- Axios (requisições HTTP)
- JSDOM (análise de HTML)
- CORS (requisições cross-origin)

### Frontend
- Vanilla JavaScript
- HTML5
- CSS3 (Flexbox/Grid)

## 🚀 Installation

1.  Clone o repositório:
```
git clone https://github.com/yourusername/amazon-scraper.git
cd amazon-scraper
```
2. Instale as dependências:
```
npm install
```
3. Inicie o servidor:
```
node server.js
```
4. Acesse no navegador:
```
http://localhost:3000
```
## 📚 Como Usar
API Endpoint
```
GET /api/scrape?keyword=SEARCH_TERM
```
Exemplo de resposta:
```
[
  {
    "title": "iPhone 14 Pro Max 128GB - Space Black",
    "rating": "4.8",
    "reviews": "3421",
    "image": "https://m.media-amazon.com/images/I/61...jpg",
    "price": "R$ 7.599",
    "link": "https://www.amazon.com.br/iPhone-14-Pro-Max-128GB/dp/..."
  }
]
```

## Interface Frontend
Digite o termo de busca (ex: "God of War")

Clique no botão "Buscar"

Visualize os resultados formatados

Capturas de Tela:
![Screenshot 1](screenshot1.png)
![Screenshot 2](screenshot2.png)

## 🏗️  Estrutura do Projeto
```
amazon-scraper/
├── public/
│   └── index.html        # Interface frontend
├── server.js             # Servidor backend
├── package.json          # Dependências
└── README.md             # Documentação
```

## ⚠️ Limitações
-Extrai apenas da primeira página de resultados

-Pode ser bloqueado se fizer muitas requisições

-Fins educacionais apenas

## 📄 Licença
MIT -  Veja LICENSE para detalhes.

Desenvolvido com ❤️ por Renan Mello
