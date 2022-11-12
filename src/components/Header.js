import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="grid place-items-center">
      <div className="my-10 w-full max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src="/img/logo.svg" alt="" />
          </div>
          <ul className="flex space-x-[48px] text-xl text-c-gray">
            <Link to="/">Home</Link>
            <Link to="/place">Place to stay</Link>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
          <button className="bg-c-purple px-[28px] py-[15px] text-white rounded-xl text-base">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
