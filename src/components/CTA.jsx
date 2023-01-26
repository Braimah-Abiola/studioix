import styles from '../style';
import BookCall from './BookCall';
import Stats from './Stats';

const CTA = () => (
<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-cta rounded-[20px] box-shadow`}>
  <Stats/>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-center`}>Want to start a project with us?</h2>
      <p className={`${styles.paragraph} text-center w-full mb-10`}>
        Book a free clarity call now with us to discuss your <br/> project and needs
      </p>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mb-10`}>
        <BookCall />
      </div>
    </div>
</section>
);

export default CTA