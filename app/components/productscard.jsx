import Link from "next/link";
const ProductCard = ({ image, title, dsc, price, onclick, id }) => {
  return (
    <>
      <div
        className="w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        id={id}
        onClick={onclick}
      >
        <div className="flex bg-white border h-28 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 h-30 min-w-0">
          <div className="flex flex-col justify-between p-2 leading-tight w-2/3 max-w-full min-w-0 overflow-hidden">
            <div className="dsc">
              <h5 className="text-sm font-semibold text-ellipsis truncate text-xs sm:text-sm">
                {title}
              </h5>
              <p className="text-xs mt-2 text-gray-700 dark:text-gray-400 truncate">
                {dsc}
              </p>
            </div>
            <div className="text-xs sm:text-sm font-bold">${price}</div>
          </div>
          <div className=" h-full p-2 w-1/3 min-w-0">
            <img
              className="object-cover h-full w-full rounded-r-lg"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
