import { getItems } from "@/app/util/items";
import Item from "../Item";
import classes from './ShowItems.module.css';

export default function ShowItems() {
    
    const items = getItems();

    return (
        <div className={classes.mainItems}>
            <h2>Newsfeed</h2>
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