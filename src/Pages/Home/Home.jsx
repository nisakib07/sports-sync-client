import Banner from "../../components/Banner/Banner";
import FaqSection from "../../components/FaqSection/FaqSection";
import Features from "../../components/Features.jsx/Features";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
