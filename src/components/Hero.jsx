import styles from "../style"
import {banner} from "../assets"
import LearnMore from "./LearnMore"
import BookCall from "./BookCall"

const Hero = () =>  (
    <section id='home' className={`flex md:flex-row flex-col mt-[-100px]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-nav ss:leading-[75px] leading-[75px] mt-10 z-[1]">
            Design Agency Working With<br className="sm:block hidden"/> 
            <span className="text-bright"> Startups </span>
            To Create <br className="sm:block hidden"/>
            <span className="text-bright"> Great Products</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[580px] mt-5 z-[1]`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper cursus enim eu tempor. Phasellus a ultrices sapien. Etiam ultricies tortor sed dui posuere consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 mt-10 z-[1]">
        <BookCall/>
        <LearnMore/>
      </div>
        
      </div>
    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={banner} alt="bannerimage" className="w-[100%] h-[100%]relative z-[5]" />
      </div>

    </section>
)

export default Hero