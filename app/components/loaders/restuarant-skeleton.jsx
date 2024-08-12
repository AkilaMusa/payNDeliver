const RestaurantSkeleton = () => {
  return (
    <>
      <div className="w-full lg:w-3/4  p-5 h-auto">
        <div className="w-full flex justify-center animate-pulse items-center  h-60 relative bg-gray-300 rounded-lg">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="hidden lg:block">
          <div className="h-3 mt-4 w-1/2 rounded-md animate-pulse bg-gray-300 "></div>
          <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
          <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
          <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
          <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
        </div>

        <div>
          {/* title */}
          <div className="lg:flex sm:block justify-between">
            <div className="h-3 w-1/2 mb-3 mt-4 rounded-md animate-pulse bg-gray-300 "></div>
            <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
            <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
            <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
            <div className="h-2 mt-2 rounded-md animate-pulse bg-gray-300 "></div>
            {/* Delivery btns */}
            <div className="flex   lg:max-w-[250px] md:w-full mt-4 ">
              <div className="p-2 h-12 w-full bg-gray-300 text-white rounded-md animate-pulse mx-5"></div>
              <div className="p-2  h-12 bg-gray-300  w-full px-4 rounded-md animate-pulse "></div>
            </div>
          </div>
        </div>
        <div className="mt-5 overflow-x-auto p-4 md:no-scrollbar">
          <span className="px-8 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-6 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-12 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-4 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-8 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-16 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-4 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-8 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-6 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-12 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
          <span className="px-4 py-1 bg-gray-300 rounded-xl  animate-pulse  mx-3"></span>
        </div>
        {/* <ProductCard /> */}
      </div>
    </>
  );
};

export default RestaurantSkeleton;
