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

export function renderizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(carrito);

  const contenedor = document.getElementById("lista-carrito");
  const totalHTML = document.getElementById("total-carrito");

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío</p>";
    if (totalHTML) totalHTML.textContent = "Total: $0";
    return;
  }

  let total = 0;

  carrito.forEach(producto => {
    total += Number(producto.price) * producto.cantidad;

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

  if (totalHTML) {
    totalHTML.textContent = "Total: $" + total.toFixed(2);
  }
}

export function actualizarBadge() {
  const carrito = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.querySelector(".badge");
  if (badge) {
    // Suma todas las cantidades de cada producto
    const totalItems = carrito.reduce((suma, p) => suma + p.cantidad, 0);
    badge.textContent = totalItems;
  }
}





