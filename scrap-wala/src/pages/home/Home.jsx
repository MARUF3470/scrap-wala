import AboutUS from "../../components/homeComponents/AboutUS";
import Banner from "../../components/homeComponents/Banner";
import Categories from "../../components/homeComponents/Categories";
import HowItWorks from "../../components/homeComponents/HowItWorks";
import WhyScrapWala from "../../components/homeComponents/WhyScrapWala";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AboutUS />
      <HowItWorks />
      <WhyScrapWala />
    </div>
  );
};

export default HomePage;
