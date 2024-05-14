import React from 'react'
import Category_card from './Category_card'
import meditate from "../assets/images/meditate.jpg";
import sleep from "../assets/images/sleep.jpg";
import focus from "../assets/images/study.jpg";

const Home = () => {
  return (
    <div>
        <h1>Your flow starts here</h1>
        {/* <Category_card name="Sleep" /> */}
        <div className='flex gap-6'>
            <Category_card name="sleep" image={sleep} />
            <Category_card name="Focus" image={focus} />
            <Category_card name="Meditate" image={meditate} />
        </div>
    </div>
  )
}

export default Home