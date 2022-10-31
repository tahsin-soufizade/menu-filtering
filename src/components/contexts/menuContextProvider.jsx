import { useState } from "react";
import { createContext, useReducer } from "react";
import data from "../data";

const allCategories = ['all', ...new Set(data.map(item => item.category))];

export const menuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [menuItems, setMenuItems] = useState(data);
    const [categories, setCategories] = useState(allCategories);
    const [menuTitle, setMenuTitle] = useState('All');

    const filterCategory = (category) => {
        if (category === 'all') {
            setMenuItems(data)
        }
        else {
            const newItems = data.filter(item => item.category === category);
            setMenuItems(newItems)
        }
        setMenuTitle(category);
    }


    return (
        <menuContext.Provider value={{ menuItems, categories, filterCategory, menuTitle }}>
            {children}
        </menuContext.Provider>)
}

export default MenuContextProvider;