# Roshan Gowda RM - Portfolio Website

A modern, responsive portfolio website featuring a dark theme with light mode toggle. Built with HTML, CSS, and JavaScript. Showcases projects, skills, education, and achievements with smooth animations, glassmorphism effects, and interactive 3D elements.

## 🌟 Live Demo

- **Portfolio Website**: [View Live](https://roshangowdar.github.io/portfolio) (GitHub Pages)
- **Local Development**: Simply open `index.html` in a browser or use a local server

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Key Features](#key-features)
- [Recent Updates](#recent-updates)
- [Features Checklist](#features-checklist)

## ✨ Features

### Design & UX
- 🌙 **Dark/Light Theme Toggle** with cookie-stored preferences
- 🎨 **Glassmorphism Effects** for modern UI
- 🎯 **3D Interactive Elements** with cursor tracking and tilt animations
- ✨ **Smooth Scroll Animations** and section reveals
- 📱 **Fully Responsive** mobile-first design
- 🎭 **Parallax Background** with multi-layer effects
- ⭐ **Floating Particles** for depth

### Sections
- 🏠 **Hero Section** - Interactive 3D card with code snippet and resume download
- 👤 **About** - Profile with bio and photo
- 🛠️ **Skills** - Interactive filtering with animated progress bars (no percentage display)
- 🎓 **Education** - Responsive table with academic qualifications
- 💼 **Projects** - Dynamic project cards with hover effects showing Live/Repo buttons
  - **Plant Doctor** - AI-powered plant disease diagnosis app
  - **Ophelia AI Marketplace** - AI marketplace for artisans
  - And more...
- 🏆 **Achievements** - Accomplishments showcase
- 📜 **Certifications** - Professional certifications (AWS, AI/ML, Full Stack, Docker)
- 📧 **Contact Form** - Contact form with validation
- 🔗 **Social Links** - GitHub, LinkedIn, Instagram

### Technical Features
- ✅ **Dark Theme** by default with light mode toggle
- 🎨 **Animated Particles** background effect
- 🎯 **Project Card Hover Effects** with Live/Repo buttons
- 📱 **Fully Responsive** design for all devices
- ✨ **Smooth Animations** and scroll effects
- 🎭 **Parallax Effects** with cursor tracking
- 🍪 **Cookie Management** for theme preferences
- 🔄 **Dynamic Content Loading** with JavaScript

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup with ARIA attributes
- **CSS3** - Flexbox, Grid, 3D transforms, animations, custom properties
- **JavaScript ES6+** - Vanilla JS for all interactions and dynamic content
- **Google Fonts** - Inter & JetBrains Mono
- **Font Awesome 6.4.0** - Icon library

### Tools & Deployment
- **Git** - Version control
- **GitHub** - Repository hosting
- **GitHub Pages** - Static file hosting
- **Vercel** - Alternative deployment option

## 📁 Project Structure

```
PortfolioSite/
├── index.html              # Main HTML file
├── Roshan_Resume.pdf       # Resume download
├── README.md               # This file
├── .gitignore              # Git ignore rules
│
├── css/
│   ├── main.css           # Main styles with theme variables
│   └── responsive.css     # Media queries
│
├── js/
│   ├── main.js            # Core functionality, theme toggle, projects
│   ├── validation.js      # Form validation
│   └── parallax.js        # Parallax effects and particles
│
└── assets/
    ├── images/            # Project & profile images
    │   ├── profile.jpg
    │   ├── project-ai-chatbot.jpg
    │   ├── project-compressor.jpg
    │   ├── project-netflix.jpg
    │   ├── project-pdf-merger.jpg
    │   ├── project-spotify.jpg
    │   ├── project-tictactoe.jpg
    │   ├── project-weather.jpg
    │   └── project-wonderlust.jpg
    └── icons/             # Icon files
```

## 🔧 Installation & Setup

### Prerequisites
- **Web browser** (Chrome, Firefox, Safari, Edge)
- **Git** (optional, for cloning)
- **Local server** (optional, for development)

### Step 1: Clone or Download

```bash
# Clone the repository
git clone https://github.com/RoshanGowdaR/PortfolioSite.git

# Or download ZIP and extract
```

### Step 2: Run Locally

**Option 1: Direct File Opening**
- Simply open `index.html` in your web browser
- All features work without a server

**Option 2: Local Server (Recommended)**
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Step 3: Customize (Optional)

- Update resume: Replace `Roshan_Resume.pdf` with your resume
- Update profile image: Replace `assets/images/profile.jpg`
- Update project images: Add your project screenshots
- Modify content: Edit `index.html` and `js/main.js`

## 🌐 GitHub Pages Deployment

### Deployment Steps

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/RoshanGowdaR/PortfolioSite.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Folder: `/ (root)`
   - Click Save

3. **Access Website**
   - URL: `https://RoshanGowdaR.github.io/PortfolioSite/`
   - Wait 2-3 minutes for deployment
   - Your site will be live!

### Alternative Deployment Options

- **Vercel** - Fast deployment with automatic HTTPS
- **Netlify** - Easy drag-and-drop deployment
- **Cloudflare Pages** - Free hosting with CDN
- **Firebase Hosting** - Google's hosting solution

## 🎨 Key Features

### Projects Showcase
- **Plant Doctor** - AI-powered plant disease diagnosis
  - Live: [plant-doctor-mauve.vercel.app](https://plant-doctor-mauve.vercel.app)
  - Repo: [GitHub](https://github.com/animelover636294-cyber/Plant_Doctor)
- **Ophelia AI Marketplace** - AI-powered marketplace for local artisans with AI copilots
  - Live: [ophelia-unbound-ai.vercel.app](https://ophelia-unbound-ai.vercel.app)
  - Repo: [GitHub](https://github.com/RoshanGowdaR/ophelia-unbound-ai)
- **Wonderlust** - Full-stack travel booking app
- **AI Assistant Chatbot** - Conversational AI with NLP
- And more...

### Design Highlights
- 🌙 **Dark Theme** with animated particles background
- 🎨 **Light Mode Toggle** with smooth transitions
- ✨ **Glassmorphism Effects** on cards
- 🎯 **3D Interactive Elements** with tilt effects
- 📱 **Fully Responsive** mobile-first design
- 🎭 **Parallax Background** with cursor tracking
- ⚡ **Smooth Animations** throughout

### Technical Highlights
- ✅ **Pure JavaScript** - No frameworks, vanilla JS
- ✅ **CSS Custom Properties** - Theme variables
- ✅ **Modern ES6+** - Arrow functions, destructuring, etc.
- ✅ **Accessibility** - ARIA labels and semantic HTML
- ✅ **Performance** - Optimized animations and lazy loading
- ✅ **SEO Friendly** - Proper meta tags and structure

## 📝 Recent Updates

- ✅ Added Plant Doctor project with Live/Repo links
- ✅ Updated project cards with hover effects
- ✅ Changed button labels to "Live" and "Repo"
- ✅ Implemented dark theme with animated particles
- ✅ Removed skill percentage displays
- ✅ Updated resume link to Roshan_Resume.pdf
- ✅ Enhanced theme toggle functionality
- ✅ Improved project card styling and animations

## 🎯 Features Checklist

- [x] Dark theme by default
- [x] Light/Dark theme toggle with cookie persistence
- [x] Animated particles background
- [x] 3D interactive hero section
- [x] Parallax background effects
- [x] Glassmorphism cards
- [x] Smooth scroll animations
- [x] Responsive navigation with hamburger menu
- [x] Skills section with filtering
- [x] Animated progress bars (without percentages)
- [x] Education table
- [x] Dynamic project cards with JavaScript
- [x] Project filtering by difficulty
- [x] Hover effects on project cards
- [x] Live/Repo buttons on project hover
- [x] Contact form with validation
- [x] Social media links
- [x] Resume download functionality
- [x] Mobile-responsive design
- [x] Accessibility features (ARIA labels)

## 🤝 Contributing

This is a personal portfolio project for academic purposes. However, suggestions and feedback are welcome!

## 📄 License

This project is created for educational purposes as part of a college assignment.

## 👨‍💻 Author

**Roshan Gowda RM**
- BE Student at Malnad College of Engineering (MCE)
- AI Engineer & Full Stack Developer

### Connect with Me
- GitHub: [RoshanGowdaR](https://github.com/RoshanGowdaR)
- LinkedIn: [Roshan Gowda RM](https://www.linkedin.com/in/roshan-gowda-rm-7222a537b)
- Instagram: [@its_roshan_gowda](https://www.instagram.com/its_roshan_gowda)

---

**Note:** This portfolio was created to demonstrate proficiency in HTML, CSS, and JavaScript.

Made with ❤️ and ☕ by Roshan Gowda RM
