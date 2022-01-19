import React from 'react'

const CategoryCard = ({category}) => {
  // const top3CoinsArr = category.top_3_coins;
  // console.log(top3CoinsArr)
  // const imageList = top3CoinsArr.map(url => (
  //   <img key={category.id} src={url} />
  // ))

  return (
    <li>
      <h3>{category.name}</h3>
      {category.content}
    </li>
  )
}

export default CategoryCard
