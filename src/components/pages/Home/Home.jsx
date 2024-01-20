// components
import InnerContainer from "../../containers/InnerContainer/InnerContainer";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="pb-custom2md grow flex flex-col">
      <section className="grow flex justify-center items-center">
        <InnerContainer>
          <Banner />
        </InnerContainer>
      </section>
    </div>
  );
};

export default Home;
