import React, { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories)

  //   const handleAdd = () => {
  //     //setCategories([...categories, "My Hero Academia"])
  //     setCategories((cats) => [...cats, "My Hero Academia"])
  //   }

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
