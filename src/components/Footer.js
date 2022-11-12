import React from "react";

function Footer() {
  return (
    <footer className="bg-c-black ">
      <div className="grid place-items-center ">
        <div className="flex justify-between w-full max-w-7xl text-white py-[60px]">
          <div>
            <img src="/img/logo-white.svg" alt="" />
            <div className="mt-[100px] space-y-[60px]">
              <div className="flex space-x-10">
                <img src="/img/facebook.svg" alt="" />
                <img src="/img/insta.svg" alt="" />
                <img src="/img/twitter.svg" alt="" />
              </div>
              <p>© 2022 Metabnb</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">Community</h3>
            <ul className="text-sm leading-[35px]">
              <li>NFT</li>
              <li>Token</li>
              <li>Landloards</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Places</h3>
            <ul className="text-sm leading-[35px]">
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn More</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">About Us</h3>
            <ul className="text-sm leading-[35px]">
              <li>Roadmap</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
