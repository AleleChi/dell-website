import React, { useState } from "react";
import dell1 from './assests/careerday.jpg'
import dell2 from './assests/dell1.jpg'
import dell3 from './assests/dell-build-main.png'
import dell4 from './assests/dell-secondary.jpg'
import dell5 from './assests/dell19.jpg'
import dell6 from './assests/dell23.jpg'


const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-green-900 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-green-900 hover:text-white"
                    }`}
                  >
                   Gallery
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("event")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "event"
                      ? "activeClasses bg-green-900 text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-green-900 hover:text-white"
                    }`}
                  >
                   Events
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("event")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "event"
                      ? "activeClasses bg-green-900 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-green-900 hover:text-white"
                    }`}
                  >
                   Students
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("student")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "student"
                      ? "activeClasses bg-green-900 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-green-900 hover:text-white"
                    }`}
                  >
                    Staff
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("building")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "building"
                      ? "activeClasses bg-green-900 text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-green-900 hover:text-white"
                    }`}
                  >
                    Others
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 transition hover:filter hover:grayscale">
            <PortfolioCard
              ImageHref={dell1}
              category="student"
              title="School Event"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
              className=" transition hover:transform hover:scale-110"
            />
            <PortfolioCard
              ImageHref={dell2}
              category="student"
              title="JAMB Highest Scorer"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={dell3}
              category="building"
              title="School Building"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={dell4}
              category="staff"
              title="Senior Seondary"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={dell5}
              category="event"
              title="Nursery School"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={dell6}
              category="other"
              title="School Event"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};



const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-green mb-5 text-xl font-bold">{title}</h3>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;