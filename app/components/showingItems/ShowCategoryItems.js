import { getItemsSelectedCategory,getItemsSelectedCategoryDown } from "@/app/util/items";
import Item from "@/app/components/Item";
import classes from './ShowCategoryItems.module.css';
import CATEGORIES from "@/app/util/categories_array";
import Link from "next/link";
export default function ShowCategoryItems({ selectedCategory, mainCategory ,category}) {

    let items;
    if(selectedCategory === mainCategory){
        items = getItemsSelectedCategory(selectedCategory)
    }
    else{
        items = getItemsSelectedCategoryDown(selectedCategory)
    }
    //const selectedIndex = CATEGORIES.findIndex(item => item.name === selectedCategory);

    return (
        <div className={classes.mainItems}>
            <div className={classes.mainItemsDown}>
                <div className={classes.leftNav}>
                    {mainCategory === selectedCategory ? <h2 className={classes.mainCategory}>{mainCategory}</h2> : <Link href={`/selected-category/${mainCategory}`} className={classes.mainCategory}>{mainCategory}</Link>}
                    <ul>
                    {
                        category.map(item=>(
                            <li key={item}>{item===selectedCategory ? <a className={classes.selected}>{item}</a> : <Link href={`/selected-category/${mainCategory}/${item}`}>{item}</Link>}</li> //????
                        ))
                    }
                    </ul>
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