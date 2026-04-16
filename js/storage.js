const STORAGE_KEY = "cart";

export function initLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}

export function getFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveToLocalStorage(producto, cantidad) {

  let cart = getFromLocalStorage();

  const existe = cart.find(p => p.id === producto.id);

  if (existe) {
    existe.cantidad += cantidad;
  } else {
    cart.push({
      id: producto.id,
      title: producto.title,
      price: producto.price,
      thumbnail: producto.thumbnail,
      cantidad: cantidad
    });
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function renderizarCarrito(){

  const carrito = JSON.parse(localStorage.getItem("cart")) || [];

  const contenedor = document.getElementById("lista-carrito");

  contenedor.innerHTML = "";

  if(carrito.length === 0){
    contenedor.innerHTML = "<p>El carrito está vacío</p>";
    return;
  }

  carrito.forEach(producto => {

    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-3">

        <div>
          <strong>${producto.title}</strong>
          <p>$${producto.price} x ${producto.cantidad}</p>
        </div>

       <button class="btn btn-sm btn-danger eliminar-producto"
        data-id="${producto.id}">
        Eliminar
      </button>

      </div>
    `;

  });

  }
  export function actualizarBadge() {

  const carrito = JSON.parse(localStorage.getItem("cart")) || [];

  const badge = document.querySelector(".badge");

  let total = 0;

  carrito.forEach(producto => {
    total += producto.cantidad;
  });

  badge.textContent = total;

}



