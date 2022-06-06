import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage =() => {
  let list;
  if (localStorage.getItem("list")) {
    return list = JSON.parse(localStorage.getItem("list"))
  } else {
    return list = []
  }
}
function App() {
  const [list, setList] = useState(getLocalStorage());
  const [val, setVal] = useState("");
  const [alert, setAlert] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (val !== "" && isEdit !== true) {
      setList([...list, { id: Math.random() * 10, text: val }]);
      setVal("");
      setAlert({
        show: true,
        msg: "item add to list",
        type: "alert alert-success",
      });
    } else if (isEdit) {
      let newList = list.map((item) =>
        item.id === editId ? { ...item, text: val } : item
      );
      console.log(newList)
      setList(newList);
      setIsEdit(false);
      setVal("");
      setAlert({
        show:true,
        msg:"edit item",
        type:"alert alert-success"
      })
    } else {
      setAlert({
        show: true,
        msg: "no items show",
        type: "alert alert-danger",
      });
    }
  };

  // Handle Delete Items
  let onDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
    setAlert({ show: true, msg: "delete item", type: "alert alert-danger" });
  };

  // Handle edit Item
  let onEdit = (id) => {
    setIsEdit(true);
    setEditId(id);
    list.filter((item) => (item.id === id ? setVal(item.text) : null));
  };

  // Alert
  let showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-list">
          {list.map((item) => (
            <List key={item.id} {...item} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </div>
        {list.length > 0 && <button className="clear-btn" onClick={() => setList([])}>clear items</button>}
      </div>
    </section>
  );
}

export default App;
