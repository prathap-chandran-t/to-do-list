import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import React, { useState } from "react";
import SearchForm from "./SearchForm";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Learn React",
    },
    {
      id: 2,
      checked: true,
      item: "Build App",
    },
  ]);

  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError] = useState(null);
  const [isLoding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!addItem) return;

    newItem(addItem);

    setAddItem("");
  };

  const newItem = (val) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const addNewItem = {
      id,
      checked: false,
      item: val,
    };

    const finalAddItem = [...items, addNewItem];

    setItems(finalAddItem);
  };

  const handleChange = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItem);
  };

  const handleDlt = (id) => {
    const dltItem = items.filter((item) => item.id !== id);

    setItems(dltItem);
  };

  return (
    <div className="App">
      <Header title="To Do List" />

      <AddItem
        addItem={addItem}
        setAddItem={setAddItem}
        handleSubmit={handleSubmit}
      />

      <SearchForm search={search} setSearch={setSearch} />

      <main>
        {isLoding && <p>is Loading</p>}

        {fetchError && <p>{`error: ${fetchError}`}</p>}

        {!isLoding && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleChange={handleChange}
            handleDlt={handleDlt}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;