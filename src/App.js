import MenuContextProvider from "./components/contexts/menuContextProvider";
import Menu from "./components/menu";

function App() {
  return (
    <main>
      <div className="container">
        <MenuContextProvider>
          <Menu />
        </MenuContextProvider>
      </div>
    </main>
  );
}

export default App;
