export async function getAllCategory(){

    const categoriesRes = await fetch('https://fakestoreapi.com/products/categories');
    if (!categoriesRes.ok) {
        throw new Error(`Failed to fetch data: ${categoriesRes.statusText}`);
      }
    return categoriesRes.json();
    }
    
    
    export async function getAllProducts(){
        const productsRes = await fetch('https://fakestoreapi.com/products');
        if (!productsRes.ok) {
            throw new Error(`Failed to fetch data: ${productsRes.statusText}`);
          }
        return productsRes.json();
        
    }
    
    export async function getSingleProduct(id:string){
        const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!singleProductRes.ok) {
            throw new Error(`Failed to fetch data: ${singleProductRes.statusText}`);
          }
        return singleProductRes.json();
        
    } 
    
    export async function getProductsByCategory(category:string){
        const productsByCategoryRes = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!productsByCategoryRes.ok) {
            throw new Error(`Failed to fetch data: ${productsByCategoryRes.statusText}`);
          }
        return productsByCategoryRes.json();
    }