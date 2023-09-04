import React from "react";
import poster from "../../img/poster.png";
const HomePage = () => {
  return (
    <>
      <section className="pb-10 bg-gray-800">
        <div className="relative container px-4   mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              
              <h2 className="max-w-2xl mt-20 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
                {" "}
                <span className="text-yellow-500">create a post by expressing your thoughts....</span>
              </h2>
              <p className="mb-12 lg:mb-16 2xl:mb-12 text-4xl text-blue-500">
                <div>Your post must be free{" "} </div>
                <div>from racism and unhealthy </div>
                <div> words</div>
              </p>
              
            </div>
            <div className="w-full lg:w-1/2 px-4 mt-42 object-left">
              <img className="rounded-lg w-50 h-50 " src={poster} alt={poster} />
              <figcaption  className="text-yellow-500 mt-1 text-1.5xl">Vishnu Institue of tecchnology</figcaption>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
