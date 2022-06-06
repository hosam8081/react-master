import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [data, setData] = useState(items);
  const [menu, setMenu] = useState(items);
  let unique = new Set(["all", ...data.map(item => item.category)]);

  let filterCate = (category) => {
    if (category == "all") {
      setMenu(items)
    } else {
      setMenu(data.filter(item => item.category == category))
    }
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories unique={unique} filterCate={filterCate}/>
        <Menu menu={menu}/>
      </section>
    </main>
  );
}

export default App;
