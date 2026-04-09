import { renderizarCard, productosGlobal } from "./card.js";
import { getProducts } from "./api.js";

getProducts().then(products => {
  let inputSearch = document.querySelector("#inputSearch");
  inputSearch.addEventListener("input", (event) => {
    let query = event.target.value;
    if (query!=="") {
      let result = products.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
      return renderizarCard(result);
    }
  });
  renderizarCard(products);
});

// renderizarCard();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-producto")) {
    const id = e.target.dataset.id;

    const producto = productosGlobal.find(p => p.id == id);

    const modalBody = document.getElementById("modal-body");

modalBody.innerHTML = `
  <h4>${producto.title}</h4>
  <p><strong>Precio:</strong> $${producto.price}</p>
  <p>${producto.description}</p>

  <div class="d-flex align-items-center gap-2 mt-3">
    <button class="btn btn-outline-secondary" id="btn-menos">-</button>
    <span id="cantidad">1</span>
    <button class="btn btn-outline-secondary" id="btn-mas">+</button>
  </div>

  <button class="btn btn-primary w-100 mt-3" id="btn-agregar">
    Agregar al carrito
  </button>
`;

let cantidad = 1;

const spanCantidad = document.getElementById("cantidad");
const btnMas = document.getElementById("btn-mas");
const btnMenos = document.getElementById("btn-menos");

btnMas.addEventListener("click", () => {
  cantidad++;
  spanCantidad.textContent = cantidad;
});

btnMenos.addEventListener("click", () => {
  if (cantidad > 1) {
    cantidad--;
    spanCantidad.textContent = cantidad;
  }
});

const btnAgregar = document.getElementById("btn-agregar");

btnAgregar.addEventListener("click", () => {
  const toastEl = document.getElementById("toastCarrito");
  const toast = new bootstrap.Toast(toastEl);

  toast.show();

  const modal = bootstrap.Modal.getInstance(document.getElementById('modalProducto'));
  modal.hide();
});

const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
modal.show();
  }
});