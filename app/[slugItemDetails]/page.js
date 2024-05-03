import ItemOffer from "../components/item-details/ItemOffer";
import SimilarOffers from "../components/item-details/SimilarOffers";
import { getItemDetails } from "../util/items";
import classes from './page.module.css';    //puste
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
    const itemId = params.slugItemDetails;
    const item = getItemDetails(itemId);

    if(!item){
        notFound();
    }

    return{
        title: item.title,
        description: item.description
    }
}

export default function ItemDetails({ params }) {
    const itemId = params.slugItemDetails;
    const item = getItemDetails(itemId);

    if(!item){
        notFound();
    }

    return (
        <div className={classes.offerMain}>
            <ItemOffer item={item} />
            <SimilarOffers category={item.category} itemId={item.id} />
        </div>
    );
}