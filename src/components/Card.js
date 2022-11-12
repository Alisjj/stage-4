import React from "react";

function Card({ img }) {
  return (
    <div className="p-4 border border-gray-200 rounded-2xl w-[293px] h-[372px]">
      <img src={img} alt="" width="260" height="265" />
      <div className="flex justify-between text-xs text-c-gray mt-4 w-full">
        <div className="text-start space-y-2 w-[92px]">
          <p>Desert king</p>
          <p>2345km away</p>
          <img src="/img/star.svg" alt="" />
        </div>
        <div className="text-end space-y-2">
          <p>1MBT per night</p>
          <p className="">available for 2weeks stay</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
