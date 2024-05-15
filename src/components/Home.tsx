import React from 'react'
import CategoryCard from './CategoryCard'
import meditate from "../assets/images/meditate.jpg";
import sleep from "../assets/images/sleep.jpg";
import focus from "../assets/images/study.jpg";

const Home = () => {
  return (
    <div className='text-center'>
        <h1 className="text-4xl	text-white pt-20">Your flow starts here</h1>
        {/* <Category_card name="Sleep" /> */}
        <div className='flex gap-6 justify-center mt-10'>
            <CategoryCard name="sleep" image={sleep} navigate="sleep"/>
            <CategoryCard name="Focus" image={focus} navigate="focus" />
            <CategoryCard name="Meditate" image={meditate} navigate="meditate" />
        </div>
    </div>
  )
}

export default Home;