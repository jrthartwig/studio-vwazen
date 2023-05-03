import React from "react";

const Sponsors = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <div className="bg-custom-brown py-8 px-6 rounded-t-lg md:w-1/3">
        <h2 className="text-3xl font-bold text-[#3c331f]">Our Sponsors</h2>
        <p className="text-[#3c331f] mt-4">
          We are grateful for the support of our sponsors who have contributed
          to Studio Vwazen's success. Their generosity has enabled us to
          continue providing high-quality programs and services to our community
          and to pursue our mission of making the arts accessible to all.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-b-lg overflow-hidden">
        <div className="bg-[#3c331f] text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Sponsor 1</h3>
          <p className="text-gray-100 mb-4">Year Sponsored: 2022</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Visit Website
          </a>
        </div>
        <div className="bg-[#988558] p-6 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-2">Sponsor 2</h3>
          <p className="text-gray-100 mb-4">Year Sponsored: 2022</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Visit Website
          </a>
        </div>
        <div className="bg-[#3c331f] text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Sponsor 3</h3>
          <p className="text-gray-100 mb-4">Year Sponsored: 2022</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
