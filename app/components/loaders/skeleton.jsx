import Link from "next/link";
const Skeleton = () => {
  return (
    <>
      <div className="w-full">
        <Link
          href="#"
          className="flex bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 dark:border-gray-300 h-30"
        >
          <div className="flex flex-col justify-between p-2 leading-tight w-2/3">
            <div className="dsc">
              <h5 className="text-sm h-3 w-1/2  rounded-md bg-gray-300  truncate">
                {/* Burger and Petcoke */}
              </h5>
              <p className="text-xs h-2 mt-2 animate-pulse rounded-md bg-gray-300 text-gray-700  truncate"></p>
              <p className="text-xs h-2 mt-2  animate-pulse rounded-md bg-gray-300 text-gray-700  truncate"></p>
              <p className="text-xs h-2 mt-2 animate-pulse rounded-md bg-gray-300 text-gray-700  truncate"></p>
            </div>
            {/* <div className="text-sm font-bold">$50</div> */}
          </div>
          <div className="h-20 p-2 w-1/3 border-2 flex justify-center items-center  bg-gray-300 animate-pulse">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>

            {/* <img
              className="object-cover h-full w-full rounded-r-lg"
              src="/images/"
              alt="Burger and Petcoke"
            /> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Skeleton;
