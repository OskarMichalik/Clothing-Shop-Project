'use client';
import Button from "../custom/Button";
import { useState } from "react";
import NewItem from "./NewItem";
import { AnimatePresence } from "framer-motion";

export default function AddingItem({className}) {
    const [isSellingNew, setIsSellingNew] = useState(false);

    function onStartAddingNewItem() {
        setIsSellingNew(true);
    }
    function onCloseAddingNewItem() {
        setIsSellingNew(false);
    }

    return (
        <>
        <AnimatePresence>
            {isSellingNew && <NewItem onClose={onCloseAddingNewItem} />}
        </AnimatePresence>
            <Button onClick={onStartAddingNewItem} className={className}>Sell now</Button>
        </>
    );
}