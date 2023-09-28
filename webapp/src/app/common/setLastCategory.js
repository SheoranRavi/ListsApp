import constants from "./constants";

export default function setLastCategory(cat){
    localStorage.setItem(constants.lastCategory, cat)
}