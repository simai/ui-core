# SFLoader StandAlone

**SFLoader** — это модульный загрузчик JavaScript/CSS-компонентов, предназначенный для автономного подключения UI-блоков без участия сервера.

Эта версия работает в режиме `standAlone`, без Ajax-запросов и генерации ассетов на сервере. Всё подгружается напрямую с CDN/статического хранилища.

---

## 🚀 Быстрый старт

1. Установите переменную `window.sfPath`, указывающую путь до каталога с компонентами:

```html
<script>
  window.sfPath = 'https://cdn.example.com/sf5/';
</script>
```

> Можно указывать относительный путь, например:  
> `window.sfPath = 'https://cdn.jsdelivr.net/gh/simai/ui@main/distr/'`

2. Подключите ядро загрузчика в `<head>`:

```html
<script src="https://cdn.jsdelivr.net/gh/simai/ui@main/distr/core/js/core.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/simai/ui@main/distr/core/css/core.css" />
```

3. Загрузчик начнет выполнять работу автоматически:

```html
<script>
    window.sfLoader = new SFLoaderPlugin(props)
</script>
```

---

## 🧩 Как работает

- Загрузчик ищет компоненты по DOM (по атрибутам);
- Определяет необходимые JS/CSS;
- Загружает их с `sfPath`;
- Инициализирует компоненты автоматически.

---

## 📁 Пример структуры

```
sf5/
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

## ⚙️ Пример компонентов в HTML

```html
<div sf-asset="modal"></div>
<div class="col-span-full lg:col-start-4 lg:col-span-9 xl:col-span-7 order-first md:order-2 p-top-3 p-right-1 p-left-1 lg:p-left-3 lg:p-right-3 xl:p-right-4 xl:p-left-4 md:col-start-6 md:col-span-7"></div>
<div data-fancybox></div>
```

---

## 📦 Используемые параметры

| Параметр         | Описание                                |
|------------------|-------------------------------------------|
| `window.sfPath`  | Базовый путь до ассетов                  |

---

## ✅ Поддержка

- Нет зависимости от сервера;
- Можно использовать с CDN, GitHub Pages, Vercel и др.;
- Подходит для проектов без backend-сборки.

---

## 📜 Лицензия

MIT
