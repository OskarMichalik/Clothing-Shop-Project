'use client';
import CategoryTableOutput from "./CategoryTableOutput";
import { useContext } from "react";
import { CategoriesContext } from "@/app/store/CategoriesContext";
import { memo } from "react";

const TagsCategories = memo(function TagsCategories() {
    const { isVisible, whichIsVisible, changeWhichIsOn } = useContext(CategoriesContext);
    return (
        <>
            {(isVisible && whichIsVisible!==undefined) && <CategoryTableOutput whichIsVisible={whichIsVisible} changeWhichIsOn={changeWhichIsOn} />}
        </>
    );
});
export default TagsCategories