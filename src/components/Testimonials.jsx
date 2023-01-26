import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-center`}>
      What Our Clients Say <br/> About Us
      </h2>
      <p className={`${styles.paragraph} ${styles.flexCenter} w-full mt-5 text-center`}>
        As a full stack agency, We help early stage startups with everything from branding, product design, video and investor decks. we’ve had the pleasure to collaborate with top teams working across a variety of B2C & B2B industries across the globe.   
      </p>
    </div>

    <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;