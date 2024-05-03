'use client';
import { useState } from "react";
import BuyItem from "./BuyItem";
import Button from "../custom/Button";
import classes from './ItemOffer.module.css';


export default function BuyingItem({ itemId }) {
    const [isBuying, setIsBuying] = useState(false);

    function onStartBuyingItem() {
        setIsBuying(true);
    }
    function onStopBuyingItem() {
        setIsBuying(false);
    }

    return (
        <>
            {isBuying && <BuyItem onClose={onStopBuyingItem} itemId={itemId} />}
            <div className={classes.buttonPhone}>
                <Button className={classes.button} onClick={onStartBuyingItem}>Buy now</Button>
            </div>
        </>
    );
}