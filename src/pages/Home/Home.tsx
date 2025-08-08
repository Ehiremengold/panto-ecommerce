import BestSeller from "../../components/BestSeller";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Materials from "../../components/Materials";
import Testimonial from "../../components/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <BestSeller />
      <Experiences />
      <Materials />
      <Testimonial />
    </Layout>
  );
};

export default Home;
