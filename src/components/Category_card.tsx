import React from 'react'

interface CategoryProps {
  name: string,
  image: string,
}

const Category_card: React.FC<CategoryProps> = ({ name, image }) => {
  {console.log(image)}
  return (
    <div className='w-1/4	bg-indigo-950 text-center rounded-2xl'>
        <h1 className='text-2xl text-white mb-5'>{name}</h1>
        <img src={image} className='w-96 mr-auto ml-auto mb-8 rounded-2xl'/>
    </div>
  )
}

export default Category_card;