import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-[25px]`}>
        {stats.map((stat, index) => (
            <div key={stat.id} className={`flex justify-start items-center flex-col m-3 mr-10 ${index === stats.length - 1 ? 'mr-10' : 'mr-40'}`}>
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[53px] leading-[43px] text-nav">{stat.value}</h2>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-nav mt-5">{stat.title}</p>
            </div>
        ))}
    </section>
  )

export default Stats