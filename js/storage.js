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
