import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/loader.json";

const Loader = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <Lottie animationData={groovyWalkAnimation} />
    </div>
  );
};

export default Loader;
