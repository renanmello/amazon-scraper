🛍️ Amazon Product Scraper
A web scraping tool to extract Amazon product data in real-time

Node.js
Express
Web Scraping

📌 Table of Contents
✨ Features

🛠️ Technologies

🚀 Installation

📡 API Usage

🖥️ Frontend

⚠️ Disclaimer

✨ Features
✅ Scrapes Amazon Brazil search results

Product title

Rating (stars)

Number of reviews

Product image

Price

Direct product link

✅ Simple API endpoint (/api/scrape)
✅ Responsive frontend interface
✅ Error handling (failed requests, missing data)
✅ Educational project (learn web scraping)

🛠️ Technologies
Tech	Use Case
Node.js	Backend runtime
Express	API server
Axios	HTTP requests to Amazon
JSDOM	HTML parsing/DOM manipulation
CORS	Cross-origin requests
🚀 Installation
1. Clone the repository
bash
Copy
git clone https://github.com/yourusername/amazon-scraper.git
cd amazon-scraper
2. Install dependencies
bash
Copy
npm install express axios jsdom cors
3. Start the server
bash
Copy
node server.js
4. Access the application
🌐 Open in browser:

http
Copy
http://localhost:3000
📡 API Usage
Endpoint
http
Copy
GET /api/scrape?keyword=SEARCH_TERM
Example Request
bash
Copy
curl "http://localhost:3000/api/scrape?keyword=iphone+15"
Example Response
json
Copy
[
  {
    "title": "iPhone 15 Pro Max (256GB) - Titanium Black",
    "rating": "4.7",
    "reviews": "1245",
    "image": "https://m.media-amazon.com/images/I/61...jpg",
    "price": "R$ 8.999",
    "link": "https://www.amazon.com.br/iPhone-15-Pro-Max-256GB/dp/..."
  }
]
🖥️ Frontend
Screenshot

Features
🔹 Search bar for keywords
🔹 Clean product card display
🔹 Responsive design (works on mobile/desktop)
🔹 Loading states and error messages

How to Use
Enter a product name (e.g., "AirPods Pro")

Click "Search"

View scraped results

⚠️ Disclaimer
This project is for educational purposes only

Amazon may block frequent scraping attempts

Not affiliated with Amazon.com

Use official Amazon APIs for production

📜 License
MIT License © 2023 - [Your Name]

🌟 Happy Scraping!

🔗 Quick Links
Deploy on Vercel
Report a Bug

📌 Pro Tip: For large-scale scraping, use proxies and rate limiting!

🎯 Roadmap
Add pagination

Price history tracking

Email alerts for price drops
