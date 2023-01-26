import React from 'react'
import styles from '../style'
import { next } from '../assets'

const Subscribe = () => (
<button type="button" className={`ml-[-218px] bt-blue-gradient py-4 px-6 bg- font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
    Subscribe
    <img src={next} className=" w-[50px] h-[50px] object-contain inline-flex ml-5"/>    
</button>
)

export default Subscribe