Here’s a concise README for your URL shortener project:

---

# 🔗 URL Shortener

A simple URL shortener built with **Next.js, React, Tailwind CSS, and MongoDB (local)**.

## 🚀 Features

- Generate short links for long URLs
- Redirect users to the original URL
- Store short URLs in a MongoDB database

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** MongoDB (local)

## 📦 Setup

1. **Clone the repo:**

   ```sh
   git clone https://github.com/your-repo/url-shortener.git  
   cd url-shortener  
   ```

2. **Install dependencies:**

   ```sh
   npm install  
   ```



3. **Set up environment variables (********`.env.local`********\*\*\*\*\*\*\*\*\*\*\*\*):**

   ```
   MONGODB_URI=mongodb://localhost:xxxxx/
   NEXT_PUBLIC_HOST=http://localhost:xxxx
   ```

4. **Run the development server:**

   ```sh
   npm run dev  
   ```

## 🏗️ Usage

- Visit `http://localhost:3000`
- Enter a URL and get a short link
- Use the short link to redirect to the original URL.

