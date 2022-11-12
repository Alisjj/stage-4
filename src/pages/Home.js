import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <main className="w-full grid place-items-center mt-20">
      <div className="w-full max-w-7xl">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col pt-3 w-[646px] h-[400px] space-y-[48px]">
            <h1 className="text-5xl font-normal text-c-gray leading-[78px]">
              Rent a <span className="font-bold text-c-purple">Place</span> away
              from <span className="font-bold text-c-purple">Home</span> in the{" "}
              <span className="font-bold text-c-purple">Metaverse</span>
            </h1>
            <p className="text-2xl text-c-gray">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your <br /> imagination to reality
              at your comfort zone
            </p>
            <div className="flex w-11/12">
              <input
                className="px-[15px] py-[20px] w-3/5 border-l-2 border-y-2 border-c-light-gray rounded-l-xl focus:outline-none focus:border-c-purple"
                type="text"
                placeholder="Search for location"
              />
              <button className="bg-c-purple w-2/5 px-[28px] py-[15px] text-white rounded-r-xl text-base">
                Search
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="mt-[100px] space-y-2">
              <img className src="/img/darkhouse.png" alt="" />
              <img src="/img/camp.png" alt="" />
            </div>
            <div className="space-y-2">
              <img src="/img/snowhouse.png" alt="" />
              <img src="/img/castle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-c-purple flex justify-center py-2 mt-20">
        <div className="max-w-7xl flex justify-between w-full">
          <img src="/img/mbt.svg" alt="" />
          <img src="/img/mmask.svg" alt="" />
          <img src="/img/osea.svg" alt="" />
        </div>
      </div>
      <div className="mt-[20px] py-[40px] max-w-7xl min-h-screen">
        <h1 className="font-bold text-5xl text-center">
          Inspiration for your next adventure
        </h1>

        <div className="grid grid-cols-4 gap-[24px] mt-[40px]">
          <Card img="/img/mcamp.png" />
          <Card img="/img/island.png" />
          <Card img="/img/house.png" />
          <Card img="/img/nighthome.png" />
          <Card img="/img/storey.png" />
          <Card img="/img/smallcity.png" />
          <Card img="/img/treehouse.png" />
          <Card img="/img/insanehouse.png" />
        </div>
      </div>
      <div className="w-full h-[774px] flex justify-center items-center bg-c-purple">
        <div className="max-w-7xl flex justify-between w-full">
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
