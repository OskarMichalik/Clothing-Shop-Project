'use server';
import { insertBuyersInfo } from "../../util/items";
import timeFormater from "../../util/timeFormater";

export default async function BuyItemFn(formData,itemId,isFormInCorrect) {
    if(isFormInCorrect){
        console.log("Error - Form is Incorrect!");
        return;
    }
    const time = new Date();
    const day = timeFormater(time.getDate());
    const month = timeFormater(time.getMonth() + 1);
    const year = timeFormater(time.getFullYear());
    const hour = timeFormater(time.getHours());
    const minutes = timeFormater(time.getMinutes());
    const seconds = timeFormater(time.getSeconds());

    const fullTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;

    const buyersInfo = {
        itemId: itemId,
        email: formData.get('email'),
        address: formData.get('address'),
        postalCode: formData.get('postalCode'),
        time: fullTime
    }

    console.log("<BuyItemFn>");
    console.log(buyersInfo);
    console.log("</BuyItemFn>");

    await insertBuyersInfo(buyersInfo);
}