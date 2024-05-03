import ShowCategoryItems from "../../../components/showingItems/ShowCategoryItems";
import CATEGORIES from "@/app/util/categories_array";

export async function generateMetadata({ params }) {
    const selectedCategory = params.slugCategoryDown.replace('%26','&').replace('_',' ');
    const mainCategory = params.slugCategory.replace('%26','&');

    return{
        title: selectedCategory,
        description: mainCategory + '>' + selectedCategory
    }
}


export default function SelectedCategoryDown({params}){
    const mainCategory = params.slugCategory.replace('%26','&');
    const selectedCategory = params.slugCategoryDown.replace('%26','&').replace('_',' ');
    
    const selectedIndex = CATEGORIES.findIndex(item => item.name === mainCategory);
    


    return(
        <ShowCategoryItems selectedCategory={selectedCategory} mainCategory={mainCategory} category={CATEGORIES[selectedIndex].content}/>
    );
}