import Banner from "./components/Banner";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] -mt-20 md:-mt-24">
      <Banner></Banner>
      <Introduction></Introduction>
    </div>
  );
}
