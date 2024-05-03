import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import AddingItem from "../new-item/AddingItem";
import logo from '@/public/logo_dark.png';
import classes from './NavTop.module.css';
import { memo } from "react";

const NavTop = memo(function NavTop() {

    return (
        <div className={classes.NavTopMain}>
            <Link href='/'><Image src={logo} alt="Main Logo" height={35} width={160} priority /></Link>
            <SearchInput />
            <AddingItem className='button navTopButtonPhone'/>
        </div>
    );
});

export default NavTop;