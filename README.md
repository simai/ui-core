# SFLoader StandAlone

**SFLoader** is a modular JavaScript/CSS component loader designed for standalone integration of UI blocks without server involvement.

This version operates in `standAlone` mode, without Ajax requests and server-side asset generation. Everything is loaded directly from a CDN/static storage.

---

## 🚀 Quick Start

1. Set the `window.sfPath` variable to the path of the components directory:

```html
<script>
  window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@main/distr/';
</script>
```

> You can use a relative path, for example:  
> `window.sfPath = '/distr/'`

2. Include the core loader in the `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/simai/ui@main/distr/core/js/core.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/simai/ui@main/distr/core/css/core.css" />
```

3. The loader will start working automatically:

```html
<script>
    window.sfLoader = new SFLoaderPlugin(props)
</script>
```

---

## 🧩 How It Works

- The loader searches for components in the DOM (by attributes);
- It determines the necessary JS/CSS;
- It loads them from `sfPath`;
- It initializes the components automatically.

---

## 📁 Example Structure

```
distr/
├── core/
│   ├── js/core.js
│   └── css/core.css
├── component/
│   └── modal/
│       ├── js/modal.js
│       └── css/modal.css
├── utility/
│   └── accent-color/
│       ├── default/
│       │     ├── js/default.js
│       │     └── css/default.css
│       └── hover/
│           ├── js/hover.js
│           └── css/hover.css
```

---

## ⚙️ Example Components in HTML

```html
<div sf-asset="modal"></div>
<div class="col-span-full lg:col-start-4 lg:col-span-9 xl:col-span-7 order-first md:order-2 p-top-3 p-right-1 p-left-1 lg:p-left-3 lg:p-right-3 xl:p-right-4 xl:p-left-4 md:col-start-6 md:col-span-7"></div>
<div data-fancybox></div>
```

---

## 📦 Used Parameters

| Parameter        | Description                              |
|------------------|------------------------------------------|
| `window.sfPath`  | Base path to assets                     |

---

## ✅ Support

- No server dependency;
- Can be used with CDN, GitHub Pages, Vercel, and others;
- Suitable for projects without backend builds.

---

## 📜 License

MIT
