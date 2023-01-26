import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} mt-5`}>
    <div className={`${styles.flexCenter} flex-wrap w-full z-[5]`}>
    <p className={`${styles.paragraph} w-full items-center justify-center flex z-[1] mb-5`}>Our work has been featured in:</p>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;