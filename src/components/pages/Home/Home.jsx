// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="mt-sectionGapMd">
      <section className="mb-sectionGapSm">
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
