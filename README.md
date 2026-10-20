# 🏀 Tienda Oficial Larrobeltz Alonsotegi

Bienvenido/a al repositorio oficial de la **tienda web de equipación deportiva** de **Larrobeltz Alonsotegi**. 

Esta aplicación web de página única (SPA) permite a las familias del club realizar pedidos de ropa y accesorios de forma rápida e intuitiva, simulando una experiencia de **carrito de la compra** adaptable tanto a familias con un solo jugador/a como a aquellas con varios/as deportistas en el club.

---

## 📸 Capturas / Estructura Visual

La aplicación incluye un catálogo interactivo con las prendas oficiales de la temporada:

| Producto | Tallas | Personalización | Precio |
| :--- | :---: | :---: | :---: |
| **Chaqueta / Sudadera** | Sí | — | 25 € |
| **Camiseta** | Sí | — | 14 € |
| **Pantalón de Chándal** | Sí | — | 24 € |
| **Mochila** | Talla Única | Nombre/Nombre del jugador | 24 € |

---

## ✨ Características Principales

* **🛒 Carrito Dinámico:** Permite añadir múltiples prendas, seleccionar tallas específicas y modificar/eliminar elementos en tiempo real.
* **👨‍👩‍👧‍👦 Gestión de Múltiples Jugadores/as:** Formulario dinámico para añadir los datos del tutor/a y registrar a uno o varios hijos/as dentro del mismo pedido.
* **🎒 Personalización de Mochila:** Opción para incluir el nombre que se bordará/imprimirá en la mochila.
* **📊 Integración Directa con Google Sheets:** Al enviar el pedido, los datos se transfieren automáticamente a una hoja de cálculo en Google Drive mediante **Google Apps Script**.
* **📱 Diseño Responsive y Moderno:** Interfaz adaptada a dispositivos móviles, tablets y ordenadores con los colores corporativos del club (Rojo, Negro y Blanco).

---

## 📁 Estructura del Proyecto

```text
├── assets/
│   ├── logo.png          # Logo oficial de Larrobeltz Alonsotegi
│   ├── chaqueta.png      # Imagen oficial de la chaqueta
│   ├── camiseta.png      # Imagen oficial de la camiseta
│   ├── pantalon.png      # Imagen oficial del pantalón
│   └── mochila.png       # Imagen oficial de la mochila
├── index.html            # Estructura HTML principal, estilos CSS y lógica JS
├── Code.gs               # Código de backend para Google Apps Script
└── README.md             # Documentación del proyecto
