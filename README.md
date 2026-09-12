# Nostra

Nostra is a responsive fashion storefront built with HTML, CSS, and vanilla JavaScript. It includes a home page with promotional sections and a slider, a filterable collections page, and a contact page.

## Features

- Responsive navigation with a mobile side menu
- Promotional banner with close action
- Home page image slider
- New arrivals and most wanted product sections
- Collections page with product search
- Product filtering by occasion, color, and arrival type
- Contact form layout
- Scroll reveal animations
- Responsive layout for desktop and mobile screens

## Pages

- `index.html` - Home page
- `collections.html` - Product collections and filters
- `contact.html` - Contact page

## Project Structure

```text
Nostra/
├── index.html
├── collections.html
├── contact.html
├── style.css
├── script.js
├── collections.js
├── contact.js
├── products.js
└── images/
	├── icons/
	├── products/
	└── collectionProducts/
```

## Run Locally

Because the collections page uses JavaScript modules, run the project through a local web server instead of opening the HTML files directly.

### Using VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` and select **Open with Live Server**.

### Using Python

```bash
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Font Awesome