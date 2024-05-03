import { memo } from 'react';
import { useContext } from 'react';
import classes from './Tags.module.css';
import { CategoriesContext } from '@/app/store/CategoriesContext';
import Link from 'next/link';

const Tags = memo(function Tags(){

    const { whichIsOn, changeWhichIsVisible } = useContext(CategoriesContext);

    function handleMouseOver(category){
        changeWhichIsVisible(category);
    }
    //console.log(whichIsOn);
    return(
        <ul className={classes.list}>
            <li onMouseOver={()=>handleMouseOver('Clothing')}><Link href="/selected-category/Clothing">Clothing</Link></li>
            <li onMouseOver={()=>handleMouseOver('Shoes')}><Link href="/selected-category/Shoes">Shoes</Link></li>
            <li onMouseOver={()=>handleMouseOver('Sport')}><Link href="/selected-category/Sport">Sport</Link></li>
            <li onMouseOver={()=>handleMouseOver('Accessories')}><Link href="/selected-category/Accessories">Accessories</Link></li>
        </ul>
    );
});

export default Tags;