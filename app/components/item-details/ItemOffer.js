import Image from "next/image";
import classes from './ItemOffer.module.css';
import moneyFormaterFn from "../../util/moneyFormaterFn";
import { findName } from "../../util/categories_array";
import Link from "next/link";
import BuyingItem from "./BuyingItem";

export default function ItemOffer({ item }) {
    return (
        <div className={classes.itemDetails}>
            <div className={classes.main}>
                <div className={classes.imagePlace}>
                    <Image src={item.image} alt={item.title ?? "User's image"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
            <div className={classes.sellerInfo}>
                <h2 className={classes.price}>{moneyFormaterFn(item.price)}</h2>
                <hr className={classes.hr} />
                <h2 className={classes.title}>{item.title}</h2>
                <Link href={`/selected-category/${findName(item.category)}/${item.category}`}><p className={classes.category}>{item.category}</p></Link>
                <p className={classes.description}>{item.description}</p>
                <hr className={classes.hr} />
                <p className={classes.email}>Seller: {item.email}</p>
                <BuyingItem itemId={item.id}/>
            </div>
        </div>
    );
}