# 📖 Dictionary App

A simple **React-based Dictionary App** that fetches word definitions, phonetics, examples, and audio pronunciation from a dictionary API. It also includes **dark mode** and a **search history feature**.

---

## 🚀 Features
- 🔍 Search for word definitions, phonetics, and examples.
- 🔊 Audio pronunciation feature.
- 🌙 Dark mode toggle.
- 💾 Save search history.

---

## 🛠️ Tech Stack
- **Frontend:** React.js, CSS
- **API:** [Free Dictionary API](https://api.dictionaryapi.dev/)

---

## 📂 File Structure
```
📦 Dictionary-App
├── 📂 src
│   ├── 📂 components
│   │   ├── Dictionary.jsx
│   │   ├── DarkModeToggle.jsx
│   ├── 📂 assets
│   │   ├── 📂 animations (for Lottie animations if needed)
│   ├── App.js
│   ├── main.jsx
│   ├── 📂 styles
│   │   ├── styles.css
├── 📂 public
│   ├── index.html
│   ├── favicon.png
├── .env
├── README.md
├── package.json
```

---

## ⚙️ Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/shivamsaurabh25/dictionary-app.git
   cd dictionary-app
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Create a `.env` file** and add:
   ```sh
   VITE_DICTIONARY_API_URL=https://api.dictionaryapi.dev/api/v2/entries/en
   ```
4. **Run the project**
   ```sh
   npm run dev
   ```

---

## 🎮 Usage
- Enter a word in the search bar and click "Search".
- Click the 🔊 button to hear the pronunciation.
- Toggle 🌙 for dark mode.
- View past searches in the history section.

---

## 📜 License
This project is **open-source** and free to use under the MIT License.

---

## 🤝 Contributing
Pull requests are welcome! Feel free to contribute by improving features or fixing bugs.

---

### 🌟 Show Your Support!
If you like this project, ⭐ **star this repository** and share it with others!

Happy coding! 🚀