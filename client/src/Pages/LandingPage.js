import Showcase from "../Components/LandingPage/Showcase";
import MostPopularCourses from "../Components/LandingPage/MostPopularCourses";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";
import Testinomials from "../Components/LandingPage/Testimonials";
import Footer from "../Components/Layout/Footer";

function LandingPage() {
  return (
    <>
      <Showcase />
      <MostPopularCourses />
      <WhyChooseUs />
      <Testinomials />
      <Footer />
    </>
  );
}

export default LandingPage;
