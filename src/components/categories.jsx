import { useContext } from "react";
import { menuContext } from "./contexts/menuContextProvider";
import '../scss/category.scss';
import { camelize } from "../helper/functions";

const Categories = () => {
    const { menuItems, categories, filterCategory } = useContext(menuContext);

    return (
        <div className="categories-container">
            {categories.map((category, index) => {
                return (
                    <button key={index} onClick={() => filterCategory(category)} className='category-btn'>
                        {camelize(category)}
                    </button>)
            })}
        </div>
    );
}

export default Categories;