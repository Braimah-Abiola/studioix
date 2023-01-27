const styles = {
    boxWidth: "xl:max-w-[1440px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-nav xs:leading-[76.8px] leading-[66.8px] w-full",
    heading4: "font-poppins font-semibold xs:text-[24px] text-[18px] text-nav w-full",
    paragraph: "font-poppins font-normal text-nav text-[18px]",
    paragraph2: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",
    paragraph3: "font-poppins font-semibold text-nav text-[20px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    padding2: "sm:px-12 px-4 sm:py-8 py-2",
    padding3: "sm:px-8 px-4 sm:py-4 py-2",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    sectionReverse2: `flex md:flex-row flex-col-reverse`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;