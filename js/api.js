export async function getProducts() {
  try{
    const response = await fetch('https://dummyjson.com/products');

    if(!response.ok){
      throw new Error('Error al obtener los productos'); 
    }
    const data = await response.json();
    return data.products ; 

  }catch (error){
    console.error('Error en la Api',error);
    return [];
  }
}