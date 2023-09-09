import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);

  let manageData = (item) => {
    setItems((items) => [...items, item]);
    setOriginalData((data) => [...data, item]); // Store original data
  };

  let selectSort = (value) => {
    if (value === "1") {
      setSortedItems([...originalData]);
    } else {
      let packedSort = originalData.filter((arr) => arr.packed === true);
      setSortedItems([...packedSort]);
    }
  };

  let clearItem = () => {
    setItems([]);
    setOriginalData([]);
    setSortedItems([]);
  };

  let deleteItem = (id) => {
    setOriginalData((data) => data.filter((value) => value.id !== id));
    setItems((items) => items.filter((value) => value.id !== id));
    setSortedItems((sortedData) =>
      sortedData.filter((value) => value.id !== id)
    );
  };
  //
  let handleCheckboxClick = (id) => {
    let updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    //
    if (itemIndex !== -1) {
      updatedItems[itemIndex].packed = !updatedItems[itemIndex].packed;
      setItems(updatedItems);
      setSortedItems(updatedItems);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form addDataitems={manageData} />
      <List
        item={sortedItems.length > 0 ? sortedItems : originalData}
        clearArray={clearItem}
        handleCheckbox={handleCheckboxClick}
        del={deleteItem}
        sort={selectSort}
      />
      <Footer allItems={items} />
    </div>
  );
}

export default App;
