import { useState } from "react";
import Input from "../custom/Input";
import { useRouter } from "next/navigation";

export default function SearchInput() {
    const [ inputValue, setInputValue ] = useState("");
    const router = useRouter();

    function handleInputValueChange(event){
        setInputValue(event.target.value);
    }

    function handlePress(event) {
        if (event.key === 'Enter') {
            router.push(`/search-input/${event.target.value}`);
            setInputValue("");
        }
    }

    return (
        <Input id="itemSearch" placeholder="Search for Items" className="searchInput" onKeyUp={handlePress} value={inputValue} onChange={handleInputValueChange}/>
    );
}