import React from 'react';

const Brand = () => {
  return (
    <div className="py-14 bg-green-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-white">
        <div className="max-w-xl mx-auto text-center inline-block mb-12">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our Mission Statement</h2>
          <p className="mt-3">
            To raise a worthy generation of leaders who are confident, smart and equipped with the necessary knowledge to secure as well as provide a better quality of living.
          </p>
        </div>

        {/* vision */}
        <div className="max-w-xl mx-auto text-center inline-block mb-12">
          <h2 className=" my-8 text-3xl font-semibold sm:text-4xl">Our Vision Statement</h2>
          <p className="mt-3">
            We envision a world where intelligence and confidence prevail, with honesty and dignity for all.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
         
        </div>
      </div>
    </div>
  );
};

export default Brand;