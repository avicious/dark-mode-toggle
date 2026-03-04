# Dark Mode Toggle

A modern, high-performance Dark Mode implementation for React applications. This component features **System Preference detection**, and **LocalStorage persistence** support.

## 🚀 Features

- **Tailwind v4 Optimized**: Uses the new `@import "tailwindcss"` engine and custom variants.
- **System Aware**: Automatically detects the user's OS theme (Dark/Light) on first visit.
- **Persistence**: Remembers user selection across sessions using `localStorage`.
- **Zero Flash**: Uses a lazy state initializer to prevent "theme flickering" on page load.
- **Mobile Friendly**: Implements `min-h-screen` and `100dvh` for a perfect mobile layout.

## ⚙️ Configuration

### 1. CSS Setup (`index.css`)

Your global CSS must define the custom dark variant to allow manual toggling via the `.dark` class.

```css
@import "tailwindcss";

/* Enable manual dark mode via class on root */
@custom-variant dark (&:where(.dark, .dark *));
```

### 2. Implementation Logic

The component synchronizes the React state with the `document.documentElement`.

```javascript
const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
});
```

## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/avicious/dark-mode-toggle.git
cd dark-mode-toggle
```

2. Install dependencies

```bash
npm install
```

3. Usage in Components

Once the toggle is active, you can style any component using the `dark:` prefix:

```javascript
<div className="bg-slate-50 dark:bg-slate-950">
  <h1 className="text-slate-900 dark:text-white">Hello World</h1>
</div>
```
