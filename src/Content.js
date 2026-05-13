import ListItem from "./ListItem";

const Content = ({ items, handleChange, handleDlt }) => {
  return (
    <>
      {items.length ? (
        <ListItem
          items={items}
          handleChange={handleChange}
          handleDlt={handleDlt}
        />
      ) : (
        <p>Your Do List is Empty</p>
      )}
    </>
  );
};

export default Content;
