export default function storeCategories(categories){

    let categoriesStr = JSON.stringify(categories);
    localStorage.setItem('listCategories', categoriesStr);
}