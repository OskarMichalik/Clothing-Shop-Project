import classes from './CategoryTableOutput.module.css';
import Link from 'next/link';
import CATEGORIES from '@/app/util/categories_array';
export default function CategoryTableOutput({ whichIsVisible }) {
    const visibleIndex = CATEGORIES.findIndex(item => item.name === whichIsVisible);
    const item = CATEGORIES[visibleIndex].content;

    const pattern = /\s/g;
    return (
        <div className={classes.tableOutputDiv}>
            <table>
                <tbody>
                    <tr>
                        <th colSpan="2">Categories</th>
                    </tr>
                    <tr>
                        <td><Link href={`/selected-category/${whichIsVisible}/${item[0].replace(pattern, '_')}`}>{item[0] ?? ''}</Link></td>
                        <td><Link href={`/selected-category/${whichIsVisible}/${item[1].replace(pattern, '_')}`}>{item[1] ?? ''}</Link></td>
                    </tr>
                    <tr>
                        <td><Link href={`/selected-category/${whichIsVisible}/${item[2].replace(pattern, '_')}`}>{item[2] ?? ''}</Link></td>
                        <td><Link href={`/selected-category/${whichIsVisible}/${item[3].replace(pattern, '_')}`}>{item[3] ?? ''}</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}