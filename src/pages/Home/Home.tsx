import { motion } from "framer-motion";
import BestSeller from "../../components/BestSeller";
import Experiences from "../../components/Experiences";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Materials from "../../components/Materials";
import Testimonial from "../../components/Testimonial";
import WhyChooseUs from "../../components/WhyChooseUs";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      easeInOut: 300,
      delay: index * 0.2, // Staggered delay for each section
    },
  }),
};

const Home = () => {
  return (
    <Layout>
      {[
        <Hero key="hero" />,
        <WhyChooseUs key="why-choose-us" />,
        <BestSeller key="best-seller" />,
        <Experiences key="experiences" />,
        <Materials key="materials" />,
        <Testimonial key="testimonial" />,
      ].map((component, index) => (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of section is in view
          custom={index}
        >
          {component}
        </motion.div>
      ))}
    </Layout>
  );
};

export default Home;
