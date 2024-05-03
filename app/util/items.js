import sql from 'better-sqlite3';
import fs from 'node:fs';

const db = sql('items.db');

export function getItems() {
    return db.prepare('SELECT * FROM items').all(); // const items = getItems();
}

export function getItemsSelectedCategory(selectedCategory){
    if(selectedCategory === "Clothing"){
        return db.prepare('SELECT * FROM items WHERE category LIKE ? OR category LIKE ? OR category LIKE ? OR category LIKE ?').all("%T-Shirt%","%Sweatshirts & Hoodies%","%Pants%","%Coats%");
    }
    else if(selectedCategory === "Shoes"){
        return db.prepare('SELECT * FROM items WHERE category LIKE ? OR category LIKE ? OR category LIKE ?').all("%Sneakers%","%Sports Shoes%","%Business Shoes%");
    }
    else if(selectedCategory === "Sport"){
        return db.prepare('SELECT * FROM items WHERE category LIKE ? OR category LIKE ? OR category LIKE ? OR category LIKE ?').all("%Sports Clothing%","%Sports Shoes%","%Sports Bags & Backpacks%","%Sports Accessories%");
    }
    else if(selectedCategory === "Accessories"){
        return db.prepare('SELECT * FROM items WHERE category LIKE ? OR category LIKE ? OR category LIKE ? OR category LIKE ?').all("%Bags & Backpacks%","%Hats & Caps%","%Watches%","%Glasses%");
    }
}
export function getItemsSelectedCategoryDown(selectedCategory){
    
    return db.prepare('SELECT * FROM items WHERE category LIKE ?').all(`%${selectedCategory}%`);
}
export function getItemsSelectedCategoryDownWithId(selectedCategory,itemId){
    
    return db.prepare('SELECT * FROM items WHERE category LIKE ? AND id != ?').all(`%${selectedCategory}%`, itemId);
}

export function getItemsSearchValue(searchValue){
    return db.prepare('SELECT * FROM items WHERE title LIKE ? OR description LIKE ? OR category LIKE ?').all(`%${searchValue}%`,`%${searchValue}%`,`%${searchValue}%`);
}

export async function saveItem(item) {

    const extension = item.image.name.split('.').pop();
    const fileName = `${item.slug}-${Math.random()}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await item.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Something went wrong | " + error);
        }
    });

    item.image = `/images/${fileName}`;

    db.prepare(`INSERT INTO items ( email, title, description, category, image, price) VALUES ( @email, @title, @description, @category, @image, @price)`).run(item);
}

export function getItemDetails(id){
    return db.prepare('SELECT * FROM items WHERE id LIKE ?').get(`${id}`);
}

export function insertBuyersInfo(info){
    db.prepare(`INSERT INTO buyers (itemId, email, address, postalCode, time) VALUES (@itemId, @email, @address, @postalCode, @time)`).run(info);
}