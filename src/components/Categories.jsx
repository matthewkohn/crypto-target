import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/categories')
      .then((res) => res.json())
      .then(dataArr => {
        const filteredArr = dataArr.filter((data) => data.content ? data : false)
        setCategories(filteredArr);
        setIsLoaded(true);
      })
  }, [])

  const categoryList = categories.map((cat) => (
    <CategoryCard key={cat.id} category={cat} />
  ))

  return (
    <div>
      Categories Component
      <hr />
      <ul>
        {categoryList}
        {isLoaded ? categoryList : <h2>Loading...</h2>}
      </ul>
      <hr />
    </div>
  )
}

export default Categories
