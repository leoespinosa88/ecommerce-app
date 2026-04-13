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

## Funcionalidades

### Estructura y diseño

- Diseño **responsive** con sistema de grilla de Bootstrap 5 
- Etiquetas semanticas (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Navbar y footer con diseño personalizado 
- Hover animado en las cards de producto 
- Spinner de carga mientras se obtienen los productos 
- Mensaje de error si la API falla 

### Listado de productos 

- Productos consumidos dinamicamente desde la API DummyJSON
- Visualizacion en las cards con imagen nombre y precio 

### Busqueda 

- Barra de busqueda para filtrar productos por nombre en tiempo real

### Modal de detalles 

- Al hacer clic en un producto se abre un modal con titulo, precio
- El modal se cierra con el boton `X` o al precionar "Agregar al carrito" 
- Mensaje de confirmacion al agregar un producto 

### Carrito

- El carrito se abre desde el icono del carrito en el navbar 
- Muestra imagen, titulo, cantidad y precio por producto
- Botones `+` / `-` para ajustar la cantidad de cada item 
- Opcion de eliminar un producto individual
- Precio individual se actualiza segun la cantidad 
- Boton "Finalizar compra" vacia el carrito y limpia el LocalStorage
- Boton "Eliminar productos" elimina todos los productos del carrito

### Persistencia 

- Uso de **LocalStorage** para que el carrito persista al recargar la pagina 

---

## Division de tareas 

| Integrante | Responsabilidades |
|---|---|
| **Sofia Contini** | Responsive (Bootstrap), accesibilidad semantica, base del listados de productos con Fetch |
| **Leonardo Espinosa** | Modal de detalles, cierre del modal, mensaje de confirmacion, botones +/- del contador |
| **Adriana Giminez** | Barra de busqueda en tiempo real | 
| **Joana Marinelli** | LocalStorage, detalles del carrito, botones |



