import React, { useState, useEffect, useRef } from "react";
import aboutImage1 from "./assests/dell34.jpg";
import aboutImage2 from "./assests/dell56.jpg";
import aboutImage3 from "./assests/director.jpg";

const About1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close modal when clicking outside or pressing escape key
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !isModalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setIsModalOpen(false);
    };
    const keyHandler = ({ keyCode }) => {
      if (!isModalOpen || keyCode !== 27) return;
      setIsModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [isModalOpen]);

  const trigger = useRef(null);
  const modal = useRef(null);

  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={aboutImage2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={aboutImage1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={aboutImage3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Circle SVG */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-gray-400 sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <div className="w-1/2 px-3">
                  <button
                    className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-green-500 transition hover:bg-blue-dark"
                    onClick={handleToggleModal}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setIsModalOpen(true)}
          className={`rounded-full bg-primary px-6 py-3 text-base font-medium text-white`}
        >
          Open Modal
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            isModalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setIsModalOpen(true)}
            onBlur={() => setIsModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-gray-500 sm:text-2xl">
              Your Message Sent Successfully
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-gray-500 dark:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-gray-500 transition hover:bg-blue-dark">
                  <a href={`/#`}> View Details </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20 dark:bg-dark lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Core Values
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-gray sm:text-4xl md:text-[40px]">
                  What Makes Us Standout
                </h2>
                <p className="dark:text-dark-6 text-base text-body-color">
                  At Dell International School, we strive for academic
                  excellence: Teaching that is reflective and emphasizes one on
                  one attention
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
              <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                <div className="absolute -right-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="relative mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-gray">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  ></svg>
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-gray-500">
                  Hard-Work
                </h3>
                <p className="dark:text-dark-6 text-base text-body-color">
                  Committing to diligent effort and perseverance in all
                  endeavors.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
              <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                <div className="absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-gray-500">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current"
                  >
                    <path
                      d="M37.7437 6.46255H37.5375V5.50005C37.5375 3.16255 35.6125 1.23755 33.275 1.23755H14.2312C11.8937 1.23755 9.96874 3.16255 9.96874 5.50005V6.46255H7.56249C5.98124 6.46255 4.67499 7.7688 4.67499 9.35005V18.9751C4.67499 20.5563 5.98124 21.8626 7.56249 21.8626H25.7125V24.0626C23.7187 24.4063 22.2062 26.1938 22.2062 28.2563V38.5001C22.2062 40.8376 24.1312 42.7626 26.4687 42.7626H27.9812C30.3187 42.7626 32.2437 40.8376 32.2437 38.5001V28.2563C32.2437 26.1938 30.7312 24.4063 28.7375 24.0626V21.5876C28.7375 20.0063 27.4312 18.7001 25.85 18.7001H7.76874V9.5563H9.89999V10.5188C9.89999 12.8563 11.825 14.7813 14.1625 14.7813H33.1375C35.475 14.7813 37.4 12.8563 37.4 10.5188V9.5563H37.6062C38.4312 9.5563 39.1187 8.8688 39.1187 8.0438C39.1187 7.2188 38.6375 6.46255 37.7437 6.46255ZM29.2187 28.2563V38.5001C29.2187 39.1876 28.6687 39.7376 27.9812 39.7376H26.4687C25.7812 39.7376 25.2312 39.1876 25.2312 38.5001V28.2563C25.2312 27.5688 25.7812 27.0188 26.4687 27.0188H27.9812C28.6687 27.0188 29.2187 27.5688 29.2187 28.2563ZM34.4437 10.5188C34.4437 11.2063 33.8937 11.7563 33.2062 11.7563H14.2312C13.5437 11.7563 12.9937 11.2063 12.9937 10.5188V5.50005C12.9937 4.81255 13.5437 4.26255 14.2312 4.26255H33.2062C33.8937 4.26255 34.4437 4.81255 34.4437 5.50005V10.5188V10.5188Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-gray-500">
                  Cooperation
                </h3>
                <p className="dark:text-dark-6 text-base text-body-color">
                  Working together harmoniously to achieve common goals and
                  objectives.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
              <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                <div className="absolute -left-4 top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="absolute right-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-gray-500">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fill-current"
                  >
                    <g clip-path="url(#clip0_1697_2534)">
                      <path
                        d="M31.8312 24.2688H12.1687C11.6875 24.2688 11.2062 24.475 10.9312 24.8875C10.6562 25.3 10.5187 25.7813 10.6562 26.2625C12.1 31.35 16.775 34.925 22 34.925C27.3625 34.925 31.9 31.4875 33.3437 26.2625C33.4812 25.7813 33.4125 25.3 33.0687 24.8875C32.7937 24.475 32.3125 24.2688 31.8312 24.2688ZM22 31.7625C18.8375 31.7625 16.0187 30.0438 14.4375 27.3625H29.5625C28.05 30.0438 25.2312 31.7625 22 31.7625Z"
                        fill="white"
                      />
                      <path
                        d="M22 0.550049C10.175 0.550049 0.549988 10.175 0.549988 22C0.549988 33.825 10.175 43.5188 22.0687 43.5188C33.9625 43.5188 43.5875 33.8938 43.5875 22C43.5875 10.1063 33.825 0.550049 22 0.550049ZM22 40.425C11.825 40.425 3.57499 32.175 3.57499 22C3.57499 11.825 11.8937 3.6438 22 3.6438C32.1062 3.6438 40.425 11.8938 40.425 22.0688C40.425 32.2438 32.175 40.425 22 40.425Z"
                        fill="white"
                      />
                      <path
                        d="M13.75 18.425C15.2688 18.425 16.5 17.1938 16.5 15.675C16.5 14.1563 15.2688 12.925 13.75 12.925C12.2312 12.925 11 14.1563 11 15.675C11 17.1938 12.2312 18.425 13.75 18.425Z"
                        fill="white"
                      />
                      <path
                        d="M30.25 18.425C31.7688 18.425 33 17.1938 33 15.675C33 14.1563 31.7688 12.925 30.25 12.925C28.7312 12.925 27.5 14.1563 27.5 15.675C27.5 17.1938 28.7312 18.425 30.25 18.425Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1697_2534">
                        <rect width="44" height="44" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-gray-500">
                  Integrity
                </h3>
                <p className="dark:text-dark-6 text-base text-body-color">
                  Upholding honesty and moral principles in every action we
                  take.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/4">
              <div className="relative mx-auto mb-10 max-w-[370px] text-center">
                <div className="absolute left-[-14px] top-12 hidden h-1 w-16 border-t-2 border-dashed border-primary xl:block 2xl:w-[75px]"></div>
                <div className="mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-[20px] bg-primary text-gray-500">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  ></svg>
                </div>
                <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-gray-500">
                  Respect for Others
                </h3>
                <p className="dark:text-dark-6 text-base text-body-color">
                  Valuing diversity and treating everyone with dignity and
                  consideration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
