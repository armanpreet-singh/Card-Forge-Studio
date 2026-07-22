# 🎨 Card Forge

A modern, browser-based business card designer that lets users create professional business cards with live editing, customizable templates, instant previews, dark mode, and high-quality PNG export—no installation required.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## ✨ Features

- 🎨 20 professionally designed business card templates
- ⚡ Real-time live preview
- 🖋 Multiple font styles
- 🌈 Accent & background color customization
- 🌙 Light/Dark mode
- 🔄 Flip card to edit the back side
- 🖨 Print-ready cards
- 📷 Export as high-quality PNG
- 💾 Automatic localStorage saving
- ⌨ Keyboard shortcuts for common actions
- 📱 Responsive interface

---

## 📸 Preview

<p align="center">
  <img
    src="https://res.cloudinary.com/aveqwdxd/image/upload/v1784704238/cardForge_e4lqfy.png"
    alt="Card Forge Preview"
    width="1000"
  />
</p>



---

## 🛠 Tech Stack

- HTML5
- CSS3 (Modular Architecture)
- Vanilla JavaScript (ES6 Modules)
- Font Awesome
- Google Fonts
- html2canvas

---

## 📂 Project Structure

```text
card-forge/
│
├── index.html
│
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── topbar.css
│   ├── sidebar.css
│   ├── canvas.css
│   ├── card.css
│   ├── style-toolbar.css
│   ├── toast.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── state.js
│   ├── storage.js
│   ├── export.js
│   │
│   ├── templates/
│   │   ├── templates.js
│   │   ├── helpers.js
│   │   └── index.js
│   │
│   ├── ui/
│   │   ├── render.js
│   │   ├── inputs.js
│   │   ├── colors.js
│   │   ├── fonts.js
│   │   ├── darkMode.js
│   │   ├── flip.js
│   │   ├── keyboard.js
│   │   ├── accordion.js
│   │   ├── print.js
│   │   └── toast.js
│   │
│   └── utils/
│       └── color.js
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/card-forge.git
```

### Navigate into the project

```bash
cd card-forge
```

### Open in your browser

Simply open:

```text
index.html
```

or use VS Code Live Server for the best development experience.

---

## 🎯 Usage

1. Select a business card template.
2. Fill in your information.
3. Customize colors and typography.
4. Flip the card to edit the back.
5. Preview changes instantly.
6. Export as PNG or print directly.

---

## ⌨ Keyboard Shortcuts

| Shortcut | Action |
|-----------|--------|
| **Space** | Flip Card |
| **D** | Toggle Dark Mode |
| **Ctrl/Cmd + S** | Save |
| **Ctrl/Cmd + E** | Export PNG |

---

## 📦 Dependencies

- Font Awesome
- Google Fonts
- html2canvas

No build tools or frameworks are required.

---

## 💡 Future Improvements

- PDF Export
- QR Code Generator
- Custom Logo Upload
- Drag & Drop Elements
- Undo / Redo
- Custom Template Builder
- Multiple Export Formats
- Cloud Storage

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add awesome feature"
```

4. Push to your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/yourusername

---

⭐ If you found this project useful, consider giving it a star!