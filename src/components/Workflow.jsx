import React from 'react'
import styles, { layout } from "../style";
import { card01, card02, card03, workflowstar } from '../assets';

const Workflow = () => (
<section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Our Workflow</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
            Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.
        </p>
        <img src={card01} className={`mt-20`}/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
        <img src={card02} className={``}/>
        <img src={card03} className={`mt-20`}/>
    </div>

</section>
);

export default Workflow