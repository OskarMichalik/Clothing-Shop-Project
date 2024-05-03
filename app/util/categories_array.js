//Max 4 categories
const CATEGORIES = [{
    name: "Clothing",
    content: ["T-Shirt","Sweatshirts & Hoodies","Pants","Coats"],
},{
    name: "Shoes",
    content: ["Sneakers","Sports Shoes","Business Shoes","Slippers"],
},{
    name: "Sport",
    content: ["Sports Clothing","Sports Shoes","Sports Bags & Backpacks","Sports Accessories"],
},{
    name: "Accessories",
    content: ["Bags & Backpacks","Hats & Caps","Watches","Glasses"],
}];

export default CATEGORIES;

export function findName(item){
    for( let category of CATEGORIES){
        if(category.content.includes(item)){
            return category.name;
        }
    }
    return "Category not found."
}