import React from "react";

function List(props) {
  const [Modify, setModify] = React.useState(false);

  return (
    <ul>
      <li
        onClick={() => {
          props.deleteItem(props.id);
        }}
        style={{ textDecoration: Modify ? "line-through" : "none" }}
      >
        {props.items}
      </li>
    </ul>
  );
}
export default List;
