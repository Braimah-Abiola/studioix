import React from 'react'
import {Navbar, Hero, Clients, Services, CTA, Testimonials, Plans, Newsletter, Footer, Workflow, PreviousWork} from './components'
import styles from './style';
import {bannerlines, bannerstar, parallelogram} from "./assets"

const App = () =>  (
    <div className="bg-primary w-full overflow-hidden">
      <img src={bannerlines} className="absolute z-[0]"/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>

    <img src={bannerstar} className="ml-[-50px] w-[210px] h-[140px] mt-[-40px]"/>
    <img src={parallelogram} className="mt-[-100px] absolute z-[0]"/>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Clients/>
          <Services/>
          <Workflow/>
          <PreviousWork/>
          <Plans/>
          <Testimonials/>
          <CTA/>
          <Newsletter/>
          <Footer/>
      </div>
    </div>

    </div>
  );

export default App