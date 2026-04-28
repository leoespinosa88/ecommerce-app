# Shop-World
 
Tienda online desarrollada como proyecto grupal para la materia de Laboratorio Apicacion Web Cliente que consume una API REST externa para mostrar los productos dinamicamente. Construida con HTML5 semantico, Bootstrap 5 y javaScript Vanilla.

## Tecnologias utilizadas

| Tecnologias | Uso |
|---|---|
| HTML5 semantico |Estructura (`<header>`, `<nav>`, `<main>`, `<footer>`)|
| CSS3 | Estilos personalizados y animaciones|
| Bootstrap 5 | Sistemas de grillas de componentes responsive|
| javaScript Vanilla | Logica, DOM, Fetch, LocalStorage|
| [DummyJSON API](https://dummyjson.com/products) | Funtes de datos de productos| 

### Estructura del proyecro

    shop-world/
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── index.js
    │   ├── api.js
    │   ├── card.js
    │   └── storage.js
    └── img/
        ├── globo.svg
        └── carrito-de-compras.png

### Arquitectura de moduos JS

    |  Archivo  |  Responsabilidad  |
    |---|---|
    | `index.js`  |  Punto de entrada: inicializacion, busqueda, modal, eventos globales,dark mode  |
    |  `api.js`  | Comunicacion con la API Dummy JSON mediante `fetch`  |
    |  `card.js`  |  Renderizado dinamico de cards de productos en el DOM  |
    |  `storage.js`   |  Logica del carrito: LocalStorage, badge, render del offcanvas | 



## Funcionalidades

### Estructura y diseño

- Diseño **responsive** con sistema de grilla de Bootstrap 5 
- Etiquetas semanticas (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Navbar y footer con diseño personalizado 
- Hover animado en las cards de producto 
- Spinner de carga mientras se obtienen los productos 
- Mensaje de error si la API falla o no retorna productos
- **Modo oscuro** con toggle en el navbar(ícono 🌙 / ☀️)

### Listado de productos 

- Productos consumidos dinamicamente desde la API DummyJSON mediante `fetch`
- Manejo de errores de la API con mensaje en pantalla 
- Visualizacion en las cards con imagen nombre y precio 

### Busqueda 

- Barra de busqueda para filtrar productos por nombre en tiempo real
- Si no hay coincidencia, muestra el mensaje "No se encontraron productos de busqueda"

### Modal de detalles 

- Al hacer clic en un producto se abre un modal con titulo, precio y descripcion
- Selector de cantidad con botones `+`/`-`(minimo 1 unidad)
- El modal se cierra al precionar  `X` o al agregar el producto al carrito 
- Toast de confirmacion al agregar un producto exitosamente  

### Carrito

- El carrito se abre desde el icono del carrito en el navbar
- Badge en el navbar que muestra el total de unidades en el carrito  
- Muestra titulo, cantidad y precio por producto
- Precio individual actualizado segun la  cantidad 
- Boton "Eliminar" por producto individual   
- Boton "Finalizar compra" con comfirmacion que vacia el carrito y limpia el LocalStorage
- Mensaje de carrito vacio cuando no hay productos 

### Persistencia 

- Uso de **LocalStorage** para que el carrito persista al recargar la pagina
- Al agregar un producto que ya existe en el carrito, se suma la cantidad en lugar de duplicarlo 

---



## Division de tareas 

| Integrante | Responsabilidades |
|---|---|
| **Sofia Contini** | Responsive (Bootstrap), accesibilidad semantica, base del listados de productos con Fetch,documentación del proyecto (README) |
| **Leonardo Espinosa** | Modal de detalles, cierre del modal, mensaje de confirmacion, botones +/- del contador |
| **Adriana Giminez** | Barra de busqueda en tiempo real | 
| **Joana Marinelli** | LocalStorage, detalles del carrito, botones |



