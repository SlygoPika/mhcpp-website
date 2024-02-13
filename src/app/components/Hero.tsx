import React from 'react'
import styles from './Hero.module.css'

// This is a simple component that will be used to display a hero section on the home page.
// background image image that spans the entire width of the screen. Centered title and logo image
export default function Hero() {
  return (
    <div className=" bg-black/[.9] text-white relative z-0">
        <img src="/SpringConcert1.jpg" alt="Spring Concert" className="w-full h-full object-cover absolute opacity-20 blur-sm"/>
        <div className='z-10 h-[66vh]'>
            <section className={styles.bg}>
                <h1 className=' mr-36 text-left w-1/3 text-5xl uppercase subpixel-antialiased hover:italic'>Montréal Heart of the City Piano Program</h1>
                <img src="Logo_Transparent.png" alt="Logo" width="20%" />
            </section>
        </div>
    </div>
    // </div>
  )
}