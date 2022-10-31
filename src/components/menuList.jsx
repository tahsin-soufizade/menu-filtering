import { useContext } from "react";
import { menuContext } from "./contexts/menuContextProvider";
import { camelize } from "../helper/functions";

const MenuList = () => {
    const { menuItems: items, categories, filterCategory, menuTitle } = useContext(menuContext);

    return (
        <div className="menu-list-container">
            <div className="container">
                <h3 className="menu-list-title">{`${camelize(menuTitle)} Items`}</h3>
                <div className="row">
                    {items.map(item => {
                        const { id, title, image, info, price } = item;
                        return (
                            <article key={id} className='menu-item col-6'>
                                <img src={image} alt={title} className='menu-img' />
                                <div>
                                    <div className="item-info">
                                        <p>{title}</p>
                                        <p className="menu-price">{price} $</p>
                                    </div>

                                    <p className="description-text">{info}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default MenuList;