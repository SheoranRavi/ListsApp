import listCategories from "./listCategories";

export default function getListCategories(){
    var categoriesStr = localStorage.getItem('listCategories');
    if(categoriesStr === '' || categoriesStr === null)
        return listCategories;
    var cat = JSON.parse(categoriesStr);
    return cat;
}