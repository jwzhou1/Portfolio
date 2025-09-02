# 🚀 Blake Zhou - Portfolio Website

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=Full-Stack+Developer;Data+Scientist;AI%2FML+Engineer;Software+Engineer" alt="Typing SVG" />
</div>

<p align="center">
  <a href="https://blakezh0u.vercel.app/" target="_blank">🌐 Live Demo</a> •
  <a href="mailto:zhou.jiaw@northeastern.edu">📧 Contact</a> •
  <a href="https://www.linkedin.com/in/blake-zhou-b50952302/">💼 LinkedIn</a>
</p>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

</div>

---

## 👨‍💻 About This Portfolio

This is my personal portfolio website showcasing my journey as a **Software Engineer** and **Data Scientist**. The site features a modern, responsive design built with React.js and demonstrates my expertise in full-stack development, AI/ML, and data science.

**Current Role:** Data Analyst at ND Supplies
**Education:**
- 🎓 Master's Degree in Computer Science
- 🎓 Bachelor's Degree in Economics
- 🏫 University of Illinois Urbana-Champaign, University of Wisconsin–Madison, Northeastern University

---

## 🛠️ Technologies Used

### **Frontend**
- **React.js** - Component-based UI library for building interactive user interfaces
- **JavaScript (ES6+)** - Modern JavaScript with arrow functions, destructuring, and async/await
- **CSS3** - Custom styling with Flexbox, Grid, and responsive design principles
- **HTML5** - Semantic markup for better accessibility and SEO
- **React Icons** - Comprehensive icon library for consistent UI elements

### **Development Tools**
- **Node.js** - JavaScript runtime environment for package management
- **npm** - Package manager for dependency management
- **Create React App** - React application boilerplate with optimized build process
- **VS Code** - Primary development environment with extensions

### **Deployment & CI/CD**
- **Vercel** - Frontend hosting with automatic deployments from Git
- **GitHub Actions** - Automated CI/CD pipeline for testing and deployment
- **GitHub Pages** - Alternative deployment option for static hosting

### **Design & UX**
- **Responsive Design** - Mobile-first approach ensuring compatibility across all devices
- **CSS Grid & Flexbox** - Modern layout techniques for flexible and responsive designs
- **Custom Animations** - Smooth transitions and hover effects for enhanced user experience
- **Typography** - Carefully selected fonts and spacing for optimal readability

---

## 🎯 Featured Projects

### 📊 **Bitcoin Price Prediction**
- **Tech Stack:** Python, TensorFlow, Wavelet Transform, Deep Belief Networks (DBN), Bidirectional GRU
- **Achievement:** Superior accuracy with MAE = 1.447, RMSE = 0.524, MAPE = 1.092%, R² = 0.992
- **Innovation:** Hybrid Wavelet-DBN-BiGRU model for cryptocurrency forecasting
- **Research Paper:** [View Publication](https://ajbsr.net/data/uploads/3096.pdf)

### 📈 **Stock Price Prediction**
- **Tech Stack:** Python, LSTM, XGBoost, SVM, Machine Learning, Financial Data Analysis
- **Focus:** Financial forecasting with hybrid model optimization and ensemble methods
- **Performance:** LSTM outperforms traditional models, especially in hybrid configurations
- **Research Paper:** [View Publication](https://ajbsr.net/data/uploads/6141.pdf)

### 🌪️ **Tornado Prediction**
- **Tech Stack:** Python, Kalman Filters, Convolutional BiLSTM, Multi-Head Attention, Computer Vision
- **Dataset:** SHSR dataset from Multi-Radar Multi-Sensor (MRMS) system
- **Performance:** Outperforms KNN and LightGBM in accuracy, precision, recall, and F1-score
- **Research Paper:** [View Publication](https://journals.sagepub.com/doi/10.1177/18724981251331366)

### 🛒 **Grocery Price Tracker**
- **Tech Stack:** React.js, Firebase, Material-UI, Real-time Database
- **Features:** Price monitoring, discount alerts, shopping list management, trend analysis
- **Demo:** [Watch Video](https://youtu.be/TEGK52yTMwo)
- **Code:** [GitHub Repository](https://github.com/jwzhou1/grocery-tracker.git)

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/jwzhou1/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Serve production build locally (optional)
npx serve -s build
```

---

## 📱 Features

### ✅ **Responsive Design**
- **Mobile-first approach** - Optimized for smartphones and tablets
- **Flexible layouts** - Adapts to all screen sizes (320px to 4K)
- **Touch-friendly interface** - Large buttons and intuitive navigation

### ✅ **Modern UI/UX**
- **Clean and professional design** - Minimalist aesthetic with focus on content
- **Smooth animations** - CSS transitions and hover effects
- **Intuitive navigation** - Single-page application with smooth scrolling

### ✅ **Performance Optimized**
- **Fast loading times** - Optimized images and lazy loading
- **Code splitting** - Dynamic imports for better performance
- **SEO optimized** - Meta tags and structured data

### ✅ **Interactive Elements**
- **Typing animation** - Dynamic text display on homepage
- **Smooth scrolling** - Navigation between sections
- **Hover effects** - Interactive buttons and cards

---

## 🏗️ Project Structure

```
Portfolio/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.png         # Website favicon
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/
│   │   ├── Home/           # Homepage components
│   │   │   ├── Home.js
│   │   │   └── Type.js     # Typing animation
│   │   ├── Projects/       # Projects showcase
│   │   │   ├── Projects.js
│   │   │   └── ProjectCards.js
│   │   ├── Capabilities/   # Skills and technologies
│   │   │   └── Capabilities.js
│   │   ├── Contact/        # Contact information
│   │   │   └── Contact.js
│   │   ├── Navbar.js       # Navigation component
│   │   ├── Pre.js          # Loading screen
│   │   └── ScrollToTop.js  # Scroll to top functionality
│   ├── Assets/
│   │   ├── Projects/       # Project images
│   │   └── home-main.svg   # Main illustration
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   ├── index.js            # Application entry point
│   └── style.css           # Global styles
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions CI/CD
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

---

## 🌐 Deployment

This portfolio is deployed using **Vercel** with automatic deployments from the main branch:

- **Live URL:** [https://blakezh0u.vercel.app/](https://blakezh0u.vercel.app/)
- **GitHub Actions:** Automated testing and deployment pipeline
- **Performance:** Optimized for speed, SEO, and accessibility

### Deployment Commands
```bash
# Deploy to Vercel (recommended)
vercel --prod

# Deploy to GitHub Pages (alternative)
npm run deploy
```

### Environment Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

---

## 🔧 My Complete Tech Stack

### **Programming Languages**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)

### **Frontend Technologies**
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

### **Backend & APIs**
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square)
![REST API](https://img.shields.io/badge/REST-02569B?style=flat-square&logo=rest&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)

### **Databases**
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat-square&logo=Firebase&logoColor=white)

### **Cloud & DevOps**
![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Azure](https://img.shields.io/badge/Microsoft_Azure-0089D0?style=flat-square&logo=microsoft-azure&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)

### **AI/ML & Data Science**
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Scikit Learn](https://img.shields.io/badge/scikit_learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=Jupyter&logoColor=white)

---

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=jwzhou1&show_icons=true&theme=tokyonight&hide_border=true" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jwzhou1&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages" />
</div>

---

## 📞 Get In Touch

<div align="center">

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zhou.jiaw@northeastern.edu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/blake-zhou-b50952302/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jwzhou1)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://blakezh0u.vercel.app/)

</div>

<div align="center">

**📍 Location:** Vancouver, Canada
**📧 Email:** zhou.jiaw@northeastern.edu
**🎯 Interests:** Full-Stack Development, AI/ML, Data Science, Cloud Computing

</div>


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=jwzhou1&color=6366f1&style=for-the-badge" alt="Profile Views" />
</div>

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/jwzhou1">Blake Zhou</a></sub>
</div>

<div align="center">
  <sub>© 2025 Blake Zhou. All rights reserved.</sub>
</div>
