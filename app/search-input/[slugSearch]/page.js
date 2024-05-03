import { getItemsSearchValue } from "@/app/util/items";
import Item from "@/app/components/Item";
import classes from './page.module.css';
import Link from "next/link";

export async function generateMetadata({ params }) {
    const searchValue = decodeURI(params.slugSearch.replace('%26', '&'));

    return{
        title: searchValue,
        description: searchValue
    }
}

export default function SearchSlugInput({ params }) {
    const searchValue = decodeURI(params.slugSearch.replace('%26', '&'));

    const items = getItemsSearchValue(searchValue);
    return (
        <div className={classes.mainItems}>
            <div className={classes.mainItemsDown}>
                <div className={classes.leftNav}>
                    <h2 className={classes.mainSearch}>&apos;{searchValue}&apos; <Link href='/'>✘</Link></h2>
                </div>
                <div className={classes.main}>
                    <p className={classes.itemsLength}>{items.length} items</p>
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
            </div>
        </div>

    );
}