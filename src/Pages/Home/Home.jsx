import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import FaqSection from "../../components/FaqSection/FaqSection";
import Features from "../../components/Features.jsx/Features";
import Location from "../../components/Location/Location";
import Services from "../../components/Services/Services";

import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SportsSync | Home</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <MarqueeSection></MarqueeSection>
      <FaqSection></FaqSection>
      <Location></Location>
    </div>
  );
};

export default Home;
