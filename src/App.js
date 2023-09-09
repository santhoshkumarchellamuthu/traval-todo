import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [originalData, setOriginalData] = useState([]); //in this place we peplace the setitem copy the orgin data va find panna mudiyathu because whwnever we set data it will change the data

  let manageData = (item) => {
    setItems((items) => [...items, item]);
    setOriginalData((data) => [...data, item]);
  };
  // sort method
  let selectSort = (value) => {
    if (value === "1") {
      setItems([...originalData]); // original data copy of data va pass panni irukom so ithu  original data va affect pannathu
    } else {
      let packedSort = originalData.filter((arr) => arr.packed === true);
      setItems([...packedSort]);
    }
  };
  // this func is for delete overall array
  let clearItem = () => {
    setItems([]);
    setOriginalData([]);
  };
  // delete separate values
  let deleteItem = (id) => {
    setOriginalData((data) => data.filter((value) => value.id !== id));
    setItems((items) => items.filter((value) => value.id !== id));
  };
  // for check box click
  let handleCheckboxClick = (id) => {
    let updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.id === id);
    // intex value va find panni athoda packed status not value va change pantrom
    if (itemIndex !== -1) {
      updatedItems[itemIndex].packed = !updatedItems[itemIndex].packed;
      setItems(updatedItems);
      setOriginalData(updatedItems);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form addDataitems={manageData} />
      <List
        item={items}
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
