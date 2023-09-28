import constants from "./constants";

export default function getLastCategory(){
    let cat = localStorage.getItem(constants.lastCategory);
    return cat;
}