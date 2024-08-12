import Link from "next/link";
const ProductCard = ({ image, title, dsc, price }) => {
  return (
    <>
      <div className="w-full">
        <Link
          href="#"
          className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 h-30"
        >
          <div className="flex flex-col justify-between p-2 leading-tight w-2/3">
            <div className="dsc">
              <h5 className="text-sm font-semibold truncate">
                Burger and Petcoke
              </h5>
              <p className="text-xs text-gray-700 dark:text-gray-400 truncate">
                Here are the biggest enterprise
              </p>
            </div>
            <div className="text-sm font-bold">$50</div>
          </div>
          <div className="h-20 p-2 w-1/3">
            <img
              className="object-cover h-full w-full rounded-r-lg"
              src="/images/coffe.jpg"
              alt="Burger and Petcoke"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
