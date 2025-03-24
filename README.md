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
