import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/categories')
      .then(r => r.json())
      .then(dataArr => {
        const filteredArr = dataArr.filter((data) => data.content ? data : null)
        setCategories(filteredArr);
        // console.log(filteredArr)
      })
  }, [])

  console.log(categories)
  const categoryList = categories.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ))

  return (
    <div>
      Categories Component
      <hr />
      <ul>
        {categoryList}
      </ul>
      <hr />
    </div>
  )
}

export default Categories
