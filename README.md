# Spelportalen 🎮
**Appen är på svenska** 
Spelportalen is a React-based **gaming news website** that fetches the latest gaming-related articles from [News API](https://newsapi.org/) and displays them on a clean, card-based homepage.  
Users can search for articles, favorite the ones they like, and view them later on a dedicated **Favorites page**.  
There’s also an **Account List page** that fetches account data from an external API ([Login-API-New](https://github.com/Kirriko95/Login-API-New)).  
The app is in **Swedish**.

---

## ✨ Features

- 📰 **News Feed:** Grid of gaming articles with image, title, and short description  
- 🔍 **Search:** Filter articles by keywords right from the homepage  
- ⭐ **Favorites:** Mark/unmark articles as favorites and view them on the Favorites page  
- 👤 **Account List:** Fetch and display account/user data from [Login-API-New](https://github.com/Kirriko95/Login-API-New)  
- 📱 **Responsive UI:** Works nicely on desktop and mobile  

---

## 🧰 Tech Stack

- **Frontend:** React (with hooks)  
- **State/Storage:** Local component state + `localStorage` for favorites  
- **Networking:** `fetch`  
- **Styling:** CSS  
- **APIs:**  
  - [News API](https://newsapi.org/) for gaming articles  
  - [Login-API](https://github.com/Kirriko95/Login-API-New) for account data  

---

## ⚙️ Full Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd spelportalen
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create Environment Variables
Create a `.env` file in the project root with the following content (for **Vite**):
```bash
VITE_NEWS_API_KEY=your_news_api_key_here
VITE_NEWS_API_BASE=https://newsapi.org/v2
VITE_ACCOUNTS_API_URL=http://localhost:7200 
```

If using **Create React App**, replace `VITE_` with `REACT_APP_`:
```bash
REACT_APP_NEWS_API_KEY=your_news_api_key_here
REACT_APP_NEWS_API_BASE=https://newsapi.org/v2
REACT_APP_ACCOUNTS_API_URL=http://localhost:7200
```

> ⚠️ **Important:** Make sure you have a valid [News API key](https://newsapi.org/)

### 4️⃣ Start the Frontend
For **Vite**:
```bash
npm run dev
```

For **Create React App**:
```bash
npm start
```
## Make sure to start the Accounts API in Visual Studio so that the accounts load!

Make sure the API is running on the same URL you set in `.env`.



