import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import apiRequest from "./apiRequest"

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [addItem, setAddItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const listItem = await fetch(API_URL);

        if (!listItem.ok) throw new Error("data not recived");

        const FinalItems = await listItem.json();

        setItems(FinalItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoding(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItem) return;
    newItem(addItem);
    setAddItem("");
  };

const newItem =async(val)=>{
  const id=items.length ? items[items.length -1].id + 1:1
  const addNewItem={id,checked:false,item:val}
  const finalAddItem=[...items, addNewItem]
  setItems(finalAddItem)

  const postObj={
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(addNewItem)
  }

  const result=await  apiRequest(API_URL,postObj)
  if(result) setFetchError(result)


}
  const handleChange =async (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(listItem);

    const updateItem=listItem.filter(item=>item.id===id)
    

   const updateObj={
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({checked:updateItem[0].checked})
  }
  const reqUrl=`${API_URL}/${id}`

  const result=await  apiRequest(reqUrl,updateObj)
  if(result) setFetchError(result)




  };
  const handleDlt =async (id) => {
    const dltItem = items.filter((item) => item.id !== id);
    setItems(dltItem);

   const deleteObj={
    method:"DELETE"
    
  }
  const reqUrl=`${API_URL}/${id}`

  const result=await  apiRequest(reqUrl,deleteObj)
  if(result) setFetchError(result)

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
        {isLoding && <p>is Loding</p>}
        {fetchError && <p>{`error: ${fetchError}`}</p>}
        {!isLoding && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase()),
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
