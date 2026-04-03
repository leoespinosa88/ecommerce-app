import { getProducts } from './api.js';


function crearCard(producto){

  return `
    <div class="col">
      <div class="card h-100 ">
        <img src="${producto.thumbnail}" class="card-img-top" alt="${producto.title}">
        <div class="card-body d-flex flex-column text-center ">
          <h5 class="card-title text-truncate">${producto.title}</h5>
           <p class="card-text fw-bold mt-auto">$${producto.price}</p>
          <button class="btn btn-producto w-100">Detalle del Producto</button>
        </div>
      </div>
    </div>
  `;

    }


export async function renderizarCard() {

   const container = document.querySelector('#product-card');

   container.classList.add('loading');

    container.innerHTML = `
      <div class="col-12 d-flex justify-content-center align-items-center loading-container">
        <div class="text-center">
          <div class="spinner-border text-primary mb-3" role="status"></div>
          <p class="loading-text">Cargando productos...</p>
        </div>
      </div>
`;

    const products = await getProducts();

    container.classList.remove('loading');

    if (products.length === 0){
      
      container.innerHTML =  `<p class="loading-text text-center">No se pueden cargar los productos</p>`;
      return;
    }

    const template = products.map(crearCard).join('');
    container.innerHTML = template;
  
}









