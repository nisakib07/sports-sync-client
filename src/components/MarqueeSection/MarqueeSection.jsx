import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="flex mt-12">
      <h2 className="text-xl font-bold bg-cyan-400 p-2 rounded-lg">
        User Reviews
      </h2>
      <Marquee speed={100} pauseOnHover={true}>
        <p className="mr-20 text-lg">
          SportsSync is fantastic! I found the perfect tennis partner within a
          few days -by Sarah.
        </p>
        <br />
        <br />
        <p className="mr-20 text-lg">
          This site has helped me improve my fitness journey. Highly recommended
          -by Paul.
        </p>
        <p className="mr-20">
          I love how easy it is to connect with experienced instructors for
          private yoga sessions. -by Alice.
        </p>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
