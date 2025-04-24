const WhyDonateBlood = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold inline-block sm:text-4xl">
          {/* py-6 border-y-4 border-[#ea062c] */}
          Why Donate Blood?
        </h2>
        <p className="mt-4 text-lg font-medium ">
          Blood donation is a crucial part of healthcare. Here are some reasons
          why donating blood is important:
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <div className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-4 py-6">
              <svg
                className="w-12 h-12 text-red-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Save Lives
              </h3>
              <p className="mt-2 text-gray-600">
                Donated blood can help save the lives of those in need,
                including accident victims, surgical patients, and individuals
                with medical conditions.
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-4 py-6">
              <svg
                className="w-12 h-12 text-green-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Support Community
              </h3>
              <p className="mt-2 text-gray-600">
                Donating blood helps support your local community by ensuring an
                adequate blood supply for hospitals and medical centers.
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-4 py-6">
              <svg
                className="w-12 h-12 text-blue-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Personal Health Benefits
              </h3>
              <p className="mt-2 text-gray-600">
                Donating blood may have health benefits for the donor, including
                reducing the risk of certain diseases and improving overall
                cardiovascular health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateBlood;
