'use client';
import Button from "./components/custom/Button";
import Link from "next/link";
export default function NotFound(){

    return(
        <div className="errorMain">
            <h2>Could not find the item!</h2>
            <Link href='/'><Button>Home</Button></Link>
        </div>
    );
}