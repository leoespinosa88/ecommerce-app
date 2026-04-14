const STOREAGE_KEY = "card";
export function initLocalStorage() {
    if (!localStorage.getItem(STOREAGE_KEY)) {
        localStorege.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

export function getFromLocalStorege() {
    const data = localStorage.getItem(STOREAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveToLocalStorage(producto, cantidad) {
    
    let  cart = getFromLocalStorage();
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
