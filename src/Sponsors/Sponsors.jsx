import React from "react";
import bannerImage from "./TRUTH.png";
import SupportVwazen from "../SupportVwazen/SupportVwazen";

const Sponsors = () => {
  return (
    <>
      <div className="relative bg-gray-50">
        <main className="lg:relative border-b-2 border-b-[#988558]/50">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-24 lg:text-left">
            <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Our Supporters</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                We are grateful for the support of our supporters who have
                contributed to Studio Vwazen's success. Their generosity has
                enabled us to continue providing high-quality programs and
                services to our community and to pursue our mission of making
                the arts accessible to all.
              </p>
              <br></br>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={bannerImage}
              alt=""
            />
          </div>
        </main>
      </div>
      <div className="container mx-auto my-12 px-4">
        {/* <div className="bg-custom-brown py-8 px-6 rounded-t-lg md:w-1/3">
        <h2 className="text-3xl font-bold text-[#3c331f]">Our Supporters</h2>
        <p className="text-[#3c331f] mt-4">
          We are grateful for the support of our supporters who have contributed
          to Studio Vwazen's success. Their generosity has enabled us to
          continue providing high-quality programs and services to our community
          and to pursue our mission of making the arts accessible to all.
        </p>
      </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-b-lg overflow-hidden">
          <div className="bg-[#988558] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Indiana Arts Commission</h3>
            <p className="text-gray-100 mb-4">Year Supported: 2022</p>
            <a
              href="https://www.in.gov/arts/"
              className="text-[#3c331f] hover:text-white"
            >
              Visit Website
            </a>
          </div>
          <div className="bg-[#988558] p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-2">
              Community Foundation of Greater Fort Wayne
            </h3>
            <p className="text-gray-100 mb-4">Year Supported: 2022</p>
            <a
              href="https://cfgfw.org/"
              className="text-[#3c331f] hover:text-white"
            >
              Visit Website
            </a>
          </div>
          <div className="bg-[#988558] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Jocelynn Hartwig</h3>
            <p className="text-gray-100 mb-4">Year Supported: 2022-2023</p>
            <a
              href="https://www.marginalentropy.org/"
              className="text-[#3c331f] hover:text-white"
            >
              Visit Website
            </a>
          </div>
          <div className="bg-[#988558] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Bazile Family</h3>
            <p className="text-gray-100 mb-4">Year Supported: 2022-2023</p>
          </div>
          <div className="bg-[#988558] text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Zero Seven Films</h3>
            <p className="text-gray-100 mb-4">Year Supported: 2023</p>
            <a
              href="http://zerosevenfilms.com/"
              className="text-[#3c331f] hover:text-white"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-t-[#988558]/50">
        <SupportVwazen />
      </div>
    </>
  );
};

export default Sponsors;
