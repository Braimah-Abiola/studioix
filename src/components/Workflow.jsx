import React from 'react'
import styles, { layout } from "../style";
import { card01, card02, card03} from '../assets';

const Workflow = () => (
<section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Workflow</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        Learn about our systematic and transparent approach to delivering outstanding results. Our Workflow showcases our process, from consultation to project completion. Collaborative and communicative, we ensure successful project delivery every time.
        </p>
        <img src={card01} className={`w-[80%] h-[80%]`}/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
        <img src={card02} className={`w-[80%] h-[80%]`}/>
        <img src={card03} className={`mt-20 w-[80%] h-[80%]`}/>
    </div>

</section>
);

export default Workflow