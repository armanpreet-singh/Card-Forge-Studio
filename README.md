# 🎨 Card Forge

A modern business card generator with live preview, customizable templates, dark mode, and high-quality PNG export.

<p align="center">
  <img
    src="https://res.cloudinary.com/aveqwdxd/image/upload/v1784704238/cardForge_e4lqfy.png"
    alt="Card Forge Preview"
    width="1000"
  />
</p>

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

### 🌞 Light Mode

Modern editing interface with real-time business card preview, customizable colors, fonts, and export options.

<p align="center">
  <img src="https://res.cloudinary.com/aveqwdxd/image/upload/v1784704690/Card-light_jppqqt.png">
</p>

### 🖼 Template Gallery

Browse from 20 professionally designed business card templates to quickly create personalized designs.

<p align="center">
  <img src="https://res.cloudinary.com/aveqwdxd/image/upload/v1784704690/templates_u9otin.png">
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
├── index.html                  # Main entry point of the application
│
├── css/
│   ├── variables.css           # Global CSS variables (colors, spacing, typography)
│   ├── base.css                # Base styles, resets, and common utilities
│   ├── topbar.css              # Header and navigation styling
│   ├── sidebar.css             # Sidebar layout and controls
│   ├── canvas.css              # Main editor workspace layout
│   ├── card.css                # Business card component styles
│   ├── style-toolbar.css       # Toolbar, buttons, and editing controls
│   ├── toast.css               # Toast notification styles
│   └── responsive.css          # Responsive layouts and media queries
│
├── js/
│   ├── main.js                 # Application entry point and initialization
│   ├── state.js                # Global application state management
│   ├── storage.js              # LocalStorage save/load functionality
│   ├── export.js               # PNG export using html2canvas
│   │
│   ├── templates/
│   │   ├── templates.js        # Collection of business card templates
│   │   ├── helpers.js          # Shared template utility functions
│   │   └── index.js            # Template loading and selection logic
│   │
│   ├── ui/
│   │   ├── render.js           # Renders the business card preview
│   │   ├── inputs.js           # Handles form inputs and live updates
│   │   ├── colors.js           # Color picker functionality
│   │   ├── fonts.js            # Font selection and typography controls
│   │   ├── darkMode.js         # Dark/light theme switching
│   │   ├── flip.js             # Front/back card flip animation
│   │   ├── keyboard.js         # Keyboard shortcuts
│   │   ├── accordion.js        # Sidebar accordion interactions
│   │   ├── print.js            # Print functionality
│   │   └── toast.js            # Toast notification logic
│   │
│   └── utils/
│       └── color.js            # Color conversion and helper utilities
│
├── assets/                     # Icons, logos, screenshots, and images
│
├── favicon.svg                 # Application favicon
│
├── LICENSE                     # MIT License
│
└── README.md                   # Project documentation
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
