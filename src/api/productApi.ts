import { createApiInstance } from "./configApi";

let productApiInstance = createApiInstance("https://dummyjson.com");
export const productApi = {
    fetchProducts: (category) => {
       return  productApiInstance.get(`/products/category/${category}`)
    }
    ,
    searchProducts: (query) => {
       return productApiInstance.get('/products/search', { params: { q: query } })
    },
};
