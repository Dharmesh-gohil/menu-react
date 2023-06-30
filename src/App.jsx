import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu  from "./data"
import Categories from "./Categories";

// const tempMenu = menu.map((item) => item.category)
// console.log(tempMenu)
// const categotu = new Set(tempMenu)
// console.log(categotu)
// const tempItem = ["all", ...categotu]
// console.log(tempItem)

const allCategory = ["all", ...new Set(menu.map((item) => item.category))]
// console.log(allCategory)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategory)
  // console.log(category)

  const filterItems = (category) => { 
    if (category === "all") { 
      return setMenuItems(menu)
    }
    // console.log(category)
    //for specific item category 
    const newItems = menu.filter((item) =>  item.category === category )
    console.log(newItems)
    setMenuItems(newItems)
  }

  return <main>
    <section className="menu">
      <Title text={"our menu"} />
      <Categories categories={categories} filterItems={ filterItems} />
      <Menu menuItems={menuItems} />
     
    </section>
  </main>
};
export default App;
