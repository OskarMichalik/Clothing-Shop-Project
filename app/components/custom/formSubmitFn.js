'use server';
import { saveItem } from "../../util/items";


export default async function formSubmitFn(formData) {
    const item = {
        email: formData.get('email'),
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        image: formData.get('image'),
        price: formData.get('price'),
    }
    await saveItem(item);
}