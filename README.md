# Roshan Gowda RM - Portfolio Website

A modern, dark-themed portfolio website built with HTML, CSS, JavaScript, XML/XSLT, PHP, and MySQL. Features 3D interactions, glassmorphism effects, smooth animations, and a complete backend for contact form management.

## 🌟 Live Demo

- **Frontend (GitHub Pages)**: [Coming Soon]
- **Full Stack (Local)**: Use XAMPP/MAMP/Laragon to run locally

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running Locally with XAMPP](#running-locally-with-xampp)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Rubric Mapping](#rubric-mapping)
- [Security Notes](#security-notes)
- [Sample Commit Messages](#sample-commit-messages)
- [Screenshots](#screenshots)

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
- 🏠 **Hero Section** - Interactive 3D card with code snippet
- 👤 **About** - Profile with bio and photo
- 🛠️ **Skills** - Interactive filtering with animated progress bars
- 🎓 **Education** - Responsive table implementation
- 💼 **Projects** - XML/XSLT transformed project cards with filtering
- 🏆 **Achievements** - Accomplishments showcase
- 📜 **Certifications** - Professional certifications
- 📧 **Contact Form** - Client & server-side validation with MySQL storage
- 🔗 **Social Links** - GitHub, LinkedIn, Instagram

### Technical Features
- ✅ **Client-Side Validation** with real-time feedback
- 🔐 **USN Validation** with configurable regex pattern
- 📊 **Admin Dashboard** with sorting/filtering capabilities
- 🔒 **Secure Authentication** using password hashing
- 🗄️ **MySQL Database** with prepared statements
- 🍪 **Cookie Management** for theme and tracking
- 🔄 **Session Management** for admin access
- 🎯 **Associative Arrays** for database operations

## 🚀 Technologies Used

### Frontend
- **HTML5** - Semantic markup with ARIA attributes
- **CSS3** - Flexbox, Grid, 3D transforms, animations
- **JavaScript ES6+** - Vanilla JS for all interactions
- **Google Fonts** - Inter & JetBrains Mono
- **Font Awesome** - Icon library

### Backend
- **PHP 7.4+** - Server-side processing
- **MySQL** - Database management
- **XML** - Project data storage
- **XSLT** - XML transformation

### Tools & Deployment
- **Git** - Version control
- **GitHub** - Repository hosting
- **GitHub Pages** - Static file hosting
- **XAMPP/MAMP** - Local PHP development

## 📁 Project Structure

```
portfolio-roshan-gowda/
├── index.html              # Main HTML file
├── resume.pdf             # Resume download
├── README.md              # This file
├── .gitignore            # Git ignore rules
│
├── css/
│   ├── main.css          # Main styles
│   └── responsive.css    # Media queries
│
├── js/
│   ├── main.js           # Core functionality
│   ├── validation.js     # Form validation
│   └── parallax.js       # Parallax effects
│
├── xml/
│   └── projects.xml      # Project data
│
├── xslt/
│   └── projects.xsl      # XSLT stylesheet
│
├── php/
│   ├── config.example.php    # Configuration template
│   ├── db.php                # Database connection
│   ├── contact_process.php   # Form handler
│   ├── login.php            # Admin login
│   ├── dashboard.php        # Admin panel
│   └── logout.php           # Session destroy
│
├── sql/
│   └── schema.sql        # Database schema
│
└── assets/
    ├── images/          # Project & profile images
    └── icons/           # Icon files
```

## 🔧 Installation & Setup

### Prerequisites
- **XAMPP/MAMP/Laragon** installed
- **Web browser** (Chrome, Firefox, Safari)
- **Git** (optional, for cloning)

### Step 1: Clone or Download

```bash
# Clone the repository
git clone https://github.com/RoshanGowdaR/portfolio-roshan-gowda.git

# Or download ZIP and extract
```

### Step 2: Database Setup

1. **Start XAMPP/MAMP**
   - Start Apache and MySQL servers

2. **Access phpMyAdmin**
   - Open browser: `http://localhost/phpmyadmin`

3. **Import Database**
   - Click "New" to create database
   - Click "Import" tab
   - Choose file: `sql/schema.sql`
   - Click "Go"

   **Alternatively, use MySQL command line:**
   ```bash
   mysql -u root -p < sql/schema.sql
   ```

4. **Verify Database**
   - Database `portfolio_db` should be created
   - Tables: `contacts`, `users`
   - Sample admin user inserted

### Step 3: PHP Configuration

1. **Copy Configuration File**
   ```bash
   cd php
   cp config.example.php config.php
   ```

2. **Edit config.php**
   - Update database credentials if needed
   - Default XAMPP: `DB_USER='root'`, `DB_PASS=''`
   - Default MAMP: `DB_USER='root'`, `DB_PASS='root'`

### Step 4: Move to Web Directory

**For XAMPP:**
```bash
# Windows
xcopy /E /I portfolio-roshan-gowda C:\xampp\htdocs\portfolio

# Linux/Mac
cp -r portfolio-roshan-gowda /opt/lampp/htdocs/portfolio
```

**For MAMP:**
```bash
cp -r portfolio-roshan-gowda /Applications/MAMP/htdocs/portfolio
```

## 🖥️ Running Locally with XAMPP

1. **Start Services**
   - Open XAMPP Control Panel
   - Start Apache
   - Start MySQL

2. **Access Website**
   - Open browser: `http://localhost/portfolio`
   - Or: `http://127.0.0.1/portfolio`

3. **Test Contact Form**
   - Fill out form on contact section
   - Submit and check for success message

4. **Access Admin Dashboard**
   - URL: `http://localhost/portfolio/php/login.php`
   - Username: `admin`
   - Password: `admin123`
   - **⚠️ CHANGE PASSWORD IMMEDIATELY!**

5. **View Submissions**
   - After login, view dashboard
   - Sort/filter contact submissions
   - Logout when done

## 🌐 GitHub Pages Deployment

### What Works on GitHub Pages
- ✅ HTML, CSS, JavaScript
- ✅ Static content
- ✅ Client-side validation
- ✅ Theme toggle
- ✅ Animations and interactions

### What Doesn't Work on GitHub Pages
- ❌ PHP backend
- ❌ MySQL database
- ❌ Contact form submission
- ❌ Admin dashboard

### Deployment Steps

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/RoshanGowdaR/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages"
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

3. **Access Website**
   - URL: `https://RoshanGowdaR.github.io/portfolio/`
   - Wait 2-3 minutes for deployment

### Alternative: Deploy PHP Backend

For full functionality including contact form, use:
- **InfinityFree** (free PHP hosting)
- **000webhost** (free with PHP & MySQL)
- **Heroku** (with ClearDB MySQL add-on)
- **DigitalOcean** or **AWS** (paid options)

## 📊 Rubric Mapping

### 1. Front-End Development
**Files:** `index.html`, `css/main.css`, `css/responsive.css`
- ✅ Semantic HTML5 with proper structure
- ✅ Responsive design using Flexbox and Grid
- ✅ Table implementation in Education section
- ✅ CSS animations and 3D transforms
- ✅ Glassmorphism effects
- ✅ Media queries for mobile responsiveness
- ✅ Accessibility with ARIA attributes

### 2. JavaScript Functionality
**Files:** `js/main.js`, `js/validation.js`, `js/parallax.js`
- ✅ Client-side form validation
- ✅ USN regex validation (configurable pattern)
- ✅ Cursor tracking and parallax effects
- ✅ Dynamic section filtering (skills & projects)
- ✅ Theme toggle with cookie storage
- ✅ Smooth scrolling and animations
- ✅ DOM manipulation and event handling
- ✅ XSLT transformation for XML data

### 3. XML + XSLT
**Files:** `xml/projects.xml`, `xslt/projects.xsl`
- ✅ 8 projects stored in XML format
- ✅ XSLT stylesheet for transformation
- ✅ Browser-based XML transformation
- ✅ Categorized by difficulty level
- ✅ Styled project cards with data binding

### 4. PHP + MySQL Integration
**Files:** `php/*.php`, `sql/schema.sql`
- ✅ Database connection with prepared statements
- ✅ Contact form processing with sanitization
- ✅ Session management for admin authentication
- ✅ Cookie usage (theme preference, last contact)
- ✅ Password hashing with `password_hash()`
- ✅ Associative arrays with `mysqli_fetch_assoc()`
- ✅ Dashboard with sorting and filtering
- ✅ Secure logout functionality

### 5. GitHub Repository & Hosting
**Files:** `.gitignore`, `README.md`
- ✅ Complete README with instructions
- ✅ Proper .gitignore for PHP projects
- ✅ Clear project structure
- ✅ Step-by-step setup guide
- ✅ GitHub Pages deployment instructions
- ✅ Sample commit messages provided

### 6. Creativity & Design
- ✅ Dark futuristic theme inspired by cortiz.dev
- ✅ 3D interactive elements with tilt effects
- ✅ Parallax scrolling and cursor tracking
- ✅ Glassmorphism UI design
- ✅ Smooth animations and transitions
- ✅ Professional color scheme and typography

## 🔒 Security Notes

### Default Credentials
- **Username:** `admin`
- **Password:** `admin123`
- **⚠️ CHANGE IMMEDIATELY!**

### Changing Admin Password

**Method 1: Using PHP**
```bash
php -r "echo password_hash('YourNewPassword', PASSWORD_DEFAULT);"
```
Copy the hash and update database:
```sql
UPDATE users SET password = 'YOUR_HASH_HERE' WHERE username = 'admin';
```

**Method 2: Using phpMyAdmin**
- Open phpMyAdmin
- Select `portfolio_db` database
- Click `users` table
- Edit admin row
- Replace password hash
- Save changes

### Important Security Practices
1. ✅ Never commit `php/config.php` to repository
2. ✅ Use `.gitignore` to exclude sensitive files
3. ✅ Change default admin password
4. ✅ Use HTTPS in production
5. ✅ Keep PHP and MySQL updated
6. ✅ Validate and sanitize all inputs
7. ✅ Use prepared statements for SQL queries

## 📝 Sample Commit Messages

Use these as templates for your Git commits:

```bash
# Initial Setup
git commit -m "Initial commit: Portfolio website setup"
git commit -m "Add database schema and sample data"
git commit -m "Configure PHP backend with MySQL connection"

# Features
git commit -m "Add dark/light theme toggle with cookie storage"
git commit -m "Implement 3D card tilt effect in hero section"
git commit -m "Add contact form with client-side validation"
git commit -m "Implement XML/XSLT transformation for projects"
git commit -m "Create admin dashboard with sorting functionality"

# Styling
git commit -m "Add glassmorphism effects to cards"
git commit -m "Implement responsive design for mobile devices"
git commit -m "Add smooth scroll animations and parallax effects"

# Bug Fixes
git commit -m "Fix: Mobile menu not closing on navigation"
git commit -m "Fix: Form validation error messages display"
git commit -m "Fix: Database connection error handling"

# Enhancements
git commit -m "Enhance: Improve accessibility with ARIA labels"
git commit -m "Enhance: Add skill filtering functionality"
git commit -m "Enhance: Optimize images for faster loading"

# Documentation
git commit -m "Update README with setup instructions"
git commit -m "Add security notes and password change guide"
git commit -m "Document rubric mapping and feature list"
```

## 📸 Screenshots

Add your screenshots in a `report-screenshots/` folder:
- `homepage.png` - Hero section
- `about.png` - About section
- `skills.png` - Skills with filtering
- `projects.png` - Projects grid
- `contact-form.png` - Contact form
- `dashboard.png` - Admin dashboard
- `mobile-view.png` - Responsive design

## 🎯 Features Checklist

- [x] Dark theme by default
- [x] Light/Dark theme toggle
- [x] 3D interactive hero section
- [x] Parallax background effects
- [x] Floating particles
- [x] Glassmorphism cards
- [x] Smooth scroll animations
- [x] Responsive navigation with hamburger menu
- [x] Skills section with filtering
- [x] Animated progress bars
- [x] Education table
- [x] Projects from XML/XSLT
- [x] Project filtering by difficulty
- [x] Tilt effects on project cards
- [x] Contact form with validation
- [x] USN validation with regex
- [x] PHP backend processing
- [x] MySQL database integration
- [x] Admin login system
- [x] Protected dashboard
- [x] Session management
- [x] Cookie implementation
- [x] Prepared SQL statements
- [x] Password hashing
- [x] Associative arrays usage
- [x] Social media links

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

**Note:** This portfolio was created to demonstrate proficiency in HTML, CSS, JavaScript, XML/XSLT, PHP, and MySQL as per the course requirements.

Made with ❤️ and ☕ by Roshan Gowda RM
