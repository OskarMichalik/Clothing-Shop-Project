import { getItemsSelectedCategoryDownWithId } from "../../util/items";
import Item from "../Item";
import classes from './SimilarOffers.module.css';


export default function SimilarOffers({ category, itemId }) {
    const items = getItemsSelectedCategoryDownWithId(category, itemId);
    return (
        <div className={classes.similarMain}>
            <h2>Similar Offers</h2>
            <div className={classes.items}>
                {items.length === 0 && <div className="error-message">
                    <h2>Could not fetch any Items</h2>
                    <p>Please try Again later...</p>
                </div>
                }
                {items.length > 0 && items.map(value => (
                    <Item key={value.id} item={value} />
                ))}
            </div>
        </div>
    );
}