import { Fragment } from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";


function App() {
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <ProductList />
      </Fragment>
    </div>
  );
}

export default App;
