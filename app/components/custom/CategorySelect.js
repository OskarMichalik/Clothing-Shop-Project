import CATEGORIES from "@/app/util/categories_array";

export default function CategorySelect({ value, onChange, onBlur }) {

    return (
        <select name="category" id="category" value={value} onChange={onChange} onBlur={onBlur}>
            <option value="" disabled hidden>Choose a category</option>
            {
                CATEGORIES.map(item => (
                    <optgroup label={item.name} key={item.name}>
                        {
                            item.content.map(itemContent => (
                                <option value={itemContent} key={itemContent}>{itemContent}</option>
                            ))
                        }
                    </optgroup>
                ))
            }
        </select>
    );
}

/*  4/30/2024 4:10PM

import CATEGORIES from "@/app/util/categories_array";

export default function CategorySelect() {

    return (
        <select name="category" id="category" defaultValue="">
            <option value="" disabled hidden>Choose a category</option>
            {
                CATEGORIES.map(item => (
                    <optgroup label={item.name} key={item.name}>
                        {
                            item.content.map(itemContent=>(
                                <option value={itemContent} key={itemContent}>{itemContent}</option>
                            ))
                        }
                    </optgroup>
                ))
            }
        </select>
    );
}

*/