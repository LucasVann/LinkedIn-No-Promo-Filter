# LinkedIn No-Promo Filter 🚫💼

**LinkedIn No-Promo Filter** es una extensión de navegador ligera diseñada para mejorar la búsqueda de empleo. Su función es ocultar automáticamente las ofertas etiquetadas como **"Promocionado"** o **"Sponsorizado"**.

---

## 🚀 Características

* **Filtro en tiempo real**: Usa un `MutationObserver` para detectar anuncios nuevos mientras haces scroll.
* **Interruptor On/Off**: Incluye un popup para activar o desactivar el filtro sin desinstalar la extensión.
* **Persistencia de estado**: Guarda tu preferencia (encendido/apagado) mediante `chrome.storage`.
* **Optimización**: No consume recursos constantes; solo actúa cuando hay cambios en el DOM.

---

## 🛠️ Tecnologías utilizadas

* **JavaScript (ES6+)**: Lógica del DOM y observadores de mutación.
* **HTML5 & CSS3**: Interfaz del popup.
* **Chrome Extension API (Manifest V3)**: Estándar moderno de extensiones.

---

## 📥 Instalación (Modo Desarrollador)

1.  **Descarga los archivos**: Clona este repositorio o descarga la carpeta del proyecto.
2.  **Accede a Extensiones**: En tu navegador (Chrome, Edge o Brave), ve a `chrome://extensions/`.
3.  **Activa el modo desarrollador**: Mueve el interruptor en la esquina superior derecha.
4.  **Carga el proyecto**: Haz clic en **"Cargar desempaquetada"** (Load unpacked).
5.  **Selecciona la carpeta**: Elige la carpeta que contiene el archivo `manifest.json`.

---

## 📂 Estructura del Proyecto

* `manifest.json`: Configuración y permisos.
* `content.js`: Script principal que oculta los empleos en LinkedIn.
* `popup.html` / `popup.js`: Interfaz y lógica del botón de control.

---

## 👤 Autor

* **Lucas Vannucchi** - Desarrollador Java | [cite_start]Estudiante de Ingeniería en Sistemas (UTN)[cite: 1, 2, 23].
* [cite_start]**LinkedIn**: [linkedin.com/in/lucasvannucchi](https://www.linkedin.com/in/lucasvannucchi/)[cite: 6].
* [cite_start]**Email**: [vannucchilucas8@gmail.com](mailto:vannucchilucas8@gmail.com)[cite: 3].
