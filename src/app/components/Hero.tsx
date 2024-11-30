import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-1 w-11/12 sm: md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:m-auto">
        <div className="w-full h-full  py-5 rounded-sm shadow-md shadow-black m-5 ">
          <div className="flex justify-around items-center font-sans">
            <Image
              src={"/product1.jpg"}
              alt="product"
              width={150}
              height={150}
            />
            <h1>Ideas suits</h1>
          </div>
          <div className="text-center">
            <h1 className="m-5 bg-slate-500 text-white rounded-sm">
              {" "}
              PKR : 2599{" "}
              <span className="bg-slate-700 text-white px-3 rounded-md ">
                FLAT 15%%
              </span>{" "}
            </h1>
            <p className="m-5 text-[1rem]">
              "Elegant designs that blend tradition with modern trends,
              featuring vibrant hues, intricate embroidery, and versatile
              silhouettes."
            </p>

            <button className="bg-blue-700 px-5 py-2 text-white  font-bold rounded-sm">
              {" "}
              SHOP NOW{" "}
            </button>
          </div>
        </div>
        <div className="w-full h-full  py-5 rounded-sm shadow-md shadow-black m-5 ">
          <div className="flex justify-around items-center font-sans">
            <Image
              src={"/images1.jpg"}
              alt="product"
              width={150}
              height={150}
            />
            <h1>Ideas suits</h1>
          </div>
          <div className="text-center">
            <h1 className="m-5 bg-slate-500 text-white rounded-sm">
              {" "}
              PKR : 2240{" "}
              <span className="bg-slate-700 text-white px-3 rounded-md ">
                FLAT 35%
              </span>{" "}
            </h1>
            <p className="m-5 text-[1rem]">
              "Elegant designs that blend tradition with modern trends,
              featuring vibrant hues, intricate embroidery, and versatile
              silhouettes."
            </p>

            <button className="bg-blue-700 px-5 py-2 text-white  font-bold rounded-sm">
              {" "}
              SHOP NOW{" "}
            </button>
          </div>
        </div>
        <div className="w-full h-full  py-5 rounded-sm shadow-md shadow-black m-5 ">
          <div className="flex justify-around items-center font-sans">
            <Image
              src={"/image2.webp"}
              alt="product"
              width={230}
              height={230}
            />
            <h1>Ideas suits</h1>
          </div>
          <div className="text-center">
            <h1 className="m-5 bg-slate-500 text-white rounded-sm">
              {" "}
              PKR : 1899{" "}
              <span className="bg-slate-700 text-white px-3 rounded-md ">
                FLAT 45%
              </span>{" "}
            </h1>
            <p className="m-5 text-[1rem]">
              "Elegant designs that blend tradition with modern trends,
              featuring vibrant hues, intricate embroidery, and versatile
              silhouettes."
            </p>

            <button className="bg-blue-700 px-5 py-2 text-white  font-bold rounded-sm">
              {" "}
              SHOP NOW{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
