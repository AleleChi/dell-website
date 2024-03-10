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
      if (!modal.current || !trigger.current) return;
      if (
        !isModalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      ) return;
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

  // Close modal when touching outside
  useEffect(() => {
    const touchHandler = () => {
      if (!modal.current || !trigger.current || !isModalOpen) return;
      setIsModalOpen(false);
    };

    document.addEventListener("touchstart", touchHandler);

    return () => {
      document.removeEventListener("touchstart", touchHandler);
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

            <div className="w-full px-4 lg:w-1/2 sm:w-1/2 ml-4 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-gray-900 sm:text-[40px]/[48px]">
                About Dell International Schools
                </h2>
                <p className="text-wrap mb-5 text-base text-body-color dark:text-dark-6">
                Dell international school is a dynamic learning community where
              teachers work collaboratively to assist children to realize their
              potential.
                </p>
                <p className="sm:w-1/2 text-wrap  mb-8 text-base text-body-color dark:text-dark-6">
                At Dell international school, we strive for: • Academic
              Excellence- Teaching that is reflective and emphasizes one on one
              attention, with response that enables all students to reach their
              full potential. <br /> Leadership- A shared culture of affirmative
              leadership that empowers others. <br /> Cooperation- Cooperation that
              optimizes harmonious, respectful relationships. At Dell
              International School, we value: <br /> Integrity <br /> Respect for others <br />
              Compassion <br /> Hard-work <br /> Cooperation <br /> Responsibility
                </p>
                <div className="w-1/2 px-3">
                  <button
                    ref={trigger}
                    className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-green-500 transition hover:bg-blue-dark"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modal}
            className="max-w-screen-lg w-full rounded-lg bg-white px-8 py-12 text-center dark:bg-dark-2"
          >
            <h3 className="pb-6 text-xl font-semibold text-dark dark:text-gray-500 sm:text-2xl">
              About Dell International Schools
            </h3>
            <span className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>
            <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              Dell international school is a dynamic learning community where
              teachers work collaboratively to assist children to realize their
              potential.
            </p>
            <p className="sm:w-1/2 text-wrap mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              At Dell international school, we strive for: Academic
              Excellence- Teaching that is reflective and emphasizes one on one
              attention, with response that enables all students to reach their
              full potential. <br /> Leadership- A shared culture of affirmative
              leadership that empowers others. <br /> Cooperation- Cooperation that
              optimizes harmonious, respectful relationships. At Dell
              International School, we value: <br /> Integrity <br /> Respect for others <br />
              Compassion <br /> Hard-work <br /> Cooperation <br /> Responsibility
            </p>
            <p className="sm:w-1/2 text-wrap mb-10 text-base leading-relaxed text-body-color dark:text-dark-6 inline-block">
              We aim to achieve these through:  Imbibing a culture of honesty
              that empowers sincere and upright individuals;  Providing our
              students and pupils with a well resourced, nurturing and
              stimulating environment for learning;  Cooperating with our
              parents, the stakeholders, and our educators to optimize the
              learning potential of our students; and • Learning for excellence
              and achievement that is responsive to the needs of our students.
              In keeping with our motto EVERY CHILD IS BORN INTELLIGENT, we
              endeavor to tap into the learning patterns of each child who
              attends our institution, ensuring they develop a broad range of
              skills to provide them with the responsibility needed for their
              own direction and to adapt to a changing world. Dell International
              school aims to foster and strengthen links between children,
              staff, parents and our community at large through:  2 way
              communications, focusing on students’ progress and educational
              progress; and • Provision of opportunities for involvement in
              school decision making. The collaborative spirit and strong
              partnership between parents and teachers have seen Dell
              International Schools go from strength to strength
            </p>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="block w-full rounded-md border  border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-green-600 hover:bg-white-600 hover:text-gray-500 dark:text-green-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About1;
