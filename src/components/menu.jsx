import MenuList from "./menuList";
import '../scss/menu.scss';
import Categories from "./categories";


const Menu = () => {

    return (
        <div className="menu-container">
            <Categories />
            <MenuList />
        </div>
    );
}

export default Menu;