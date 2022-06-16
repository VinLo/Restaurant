import logo from "./logo.svg";
import "./App.css";
import data from "./restaurants.json";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(data.restaurants);
  const [sortName, setSortName] = useState();
  const [Query, setQuery] = useState("");

  console.log(Query);

  const nameSort = () => {
    const nameArray = product.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return setSortName(nameArray);
  };

  // const handleName = () => {
  //   const name = nameSort();
  //   setSortName(name);
  // };

  return (
    <>
      <div className="app">
        <button onClick={nameSort}>Sort</button>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <div className="container">
          {product
            .filter((product) => product.name.toLowerCase().includes(Query))
            .map((data) => {
              return (
                <>
                  <div className="product_product">
                    <img src={data.image} />
                    <div className="product_info">
                      <p className="product_title">{data.name}</p>
                      <span
                        className={data.online !== true ? "dot" : "dot_Onl"}
                      ></span>
                      <div className="product_description">
                        {data.description}
                      </div>
                      <p className="product_small_description">
                        <small>{data.tags}</small>
                        <small>Delivery: $ {data.delivery_price}</small>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default App;
