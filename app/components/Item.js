import moneyFormaterFn from '@/app/util/moneyFormaterFn';
import classes from './Item.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Item(item) {

    item.item.price = moneyFormaterFn(item.item.price);
    //console.log(item.item);

    return (
        <div className={classes.item}>
            <Link href={`/${item.item.id}`}>
            <div className={classes.image}>
                {<Image src={item.item.image} alt={item.item.title ?? "User's image"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>}
            </div>

            <div className={classes.text}>
                <h2>{item.item.title}</h2>
                <p className={classes.category}>{item.item.category}</p>
                <p>{item.item.price}</p>
            </div>
            </Link>
        </div>
    );
}

/*  03/05/2024  10:47AM

import moneyFormaterFn from '@/app/util/moneyFormaterFn';
import classes from './Item.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Item(item) {

    item.item.price = moneyFormaterFn(item.item.price);
    //console.log(item.item);

    return (
        <div className={classes.item}>
            <Link href={`/${item.item.id}`}>
            <div className={classes.image}>
                {<Image src={item.item.image} alt={item.item.title ?? "User's image"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>}
            </div>

            <div className={classes.text}>
                <h2>{item.item.title}</h2>
                <p className={classes.category}>{item.item.category}</p>
                <p>{item.item.price}</p>
            </div>
            </Link>
        </div>
    );
}

*/