import ShowCategoryItems from "../../components/showingItems/ShowCategoryItems";
import CATEGORIES from "@/app/util/categories_array";

export async function generateMetadata({ params }) {
    const selectedCategory = params.slugCategory.replace('%26','&');

    return{
        title: selectedCategory,
        description: selectedCategory
    }
}

export default function SelectedCategory({ params }) {    //Lewy nav pokazuje nazwe główną kategorii i pod nią inne związane kategorie
    const selectedCategory = params.slugCategory.replace('%26','&');

    const selectedIndex = CATEGORIES.findIndex(item => item.name === selectedCategory);



    return (
        <ShowCategoryItems selectedCategory={selectedCategory} mainCategory={selectedCategory} category={CATEGORIES[selectedIndex].content}/>
    );
}