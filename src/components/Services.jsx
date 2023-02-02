import React from 'react'
import styles from '../style';
import { design, webdev, customsoftware, desktop, ai, support } from '../assets';

const Services = () => (
<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-20`}>
    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
        What we offer
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} mt-5 text-center`}>
        As a full stack agency, We help early stage startups with everything from branding, product design, video and investor decks.<br/> We’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries across the globe.   
      </p>
    </div>

    <section className={`${styles.flexCenter} flex-wrap`}>
      
        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={design} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>UI/UX Design</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Our UI/UX design experts create engaging, user-centered interfaces for websites, apps, and software. With a focus on research, strategy, and design, we deliver digital products with seamless user experiences that drive conversions and set you apart from the competition.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={webdev} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Web Development (MERN & Django)</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Our web development team builds custom websites with high performance and user-centered design. From simple to complex, we deliver solutions tailored to your unique needs. Partner with us for secure and scalable websites that drive results.</p>
        </div>

       <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={customsoftware} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Custom Software Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Transform your business with custom software from our team. We create scalable and secure solutions that streamline processes and provide a competitive edge. Let's bring your vision to life and drive digital transformation.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={desktop} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Desktop App Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Our team offers custom desktop app development services to enhance your productivity and streamline your workflows. Our secure applications are tailored to meet your unique business requirements, driving digital transformation.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={ai} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Generative AI Development</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Transform your business with custom generative AI solutions. Our team creates automated, high-quality content and insights from complex data. User-centered, scalable, and ethical. Drive digital transformation with us.</p>
        </div>

        <div className={`${styles.padding2} justify-start flex flex-col m-3 w-[400px] h-[470px] cursor-pointer services-card rounded-[20px] box-shadow`}>
          <img src={support} className={`flex w-[90px] h-[90px]`}/>
          <h4 className={`${styles.heading4} mt-5`}>Maintenance & Support</h4>
          <p className={`${styles.paragraph} mt-2 text-start`}>Comprehensive software maintenance and support services. Our team provides ongoing support, bug fixing, and updates to keep your software running smoothly. Partner with us for the best performance and longevity.</p>
        </div>

    </section>

</section>
  );

export default Services