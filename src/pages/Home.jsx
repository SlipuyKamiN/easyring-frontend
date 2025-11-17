import { Calculator } from "~/components/Home/Calculator";
import { Hero } from "~/components/Home/Hero";
import { Reviews } from "~/components/Home/Reviews";
import { Steps } from "~/components/Home/Steps";

const Home = () => {
  return (
    <div>
      <Hero />
      <Calculator />
      <Steps />
      <Reviews />
    </div>
  );
};

export default Home;
