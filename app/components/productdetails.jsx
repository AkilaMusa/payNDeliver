import Image from "next/image";
import { Star } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Details = () => {
  return (
    <>
      <div className="flex h-auto md:justify-center md:items-center md:min-h-screen md:bg-gray-100 md:p-4">
        <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl rounded overflow-hidden shadow-lg bg-white">
          <div className="md:flex">
            <div className="md:w-1/2 p-2 md:p-4">
              <img
                src="/images/coffe.jpg"
                alt="Image Description"
                className="w-full h-1/2 md:h-full object-cover rounded-2xl"
              />
            </div>

            <div className="md:w-1/2 p-2 md:p-6">
              <div className="hd flex justify-between items-center">
                <div className="font-bold text-xl md:text-3xl">Cappuccino</div>
                <div className="icon">
                  <FavoriteIcon className="text-red-600" />
                </div>
              </div>
              <div className="flex items-center py-1 md:py-2">
                <p className="text-base md:text-lg">Lorem, ipsum dolor</p>
                <span className="px-2 flex items-center">
                  <Star fontSize="15px" className="text-yellow-600" />
                  <span className="px-1">4.5</span>
                </span>
              </div>
              <div className="pb-5">
                <p className="py-2 md:leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur cupiditate debitis a voluptates facilis!
                </p>
              </div>

              <div className="pb-8">
                <p className="pb-2 md:font-semibold md:text-lg">
                  Choice of milk
                </p>
                <div className="flex flex-wrap justify-between md:-mx-2">
                  {["Oat Milk", "Soy Milk", "Almond Milk"].map((milk) => (
                    <span
                      key={milk}
                      className="flex-1 md:w-full md:flex-grow md:px-2 mb-2 mr-2"
                    >
                      <button className="w-full border-2 hover:bg-black hover:text-white border-black rounded-lg text-center py-3 text-sm md:text-base transition duration-300 ease-in-out">
                        {milk}
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="price flex-col">
                  <p>Price</p>
                  <h1 className="text-xl md:text-3xl font-bold">$200</h1>
                </div>
                <div className="btn w-3/4 bg-black text-white hover:bg-white hover:text-black hover:border-2 border-black rounded-xl md:px-8">
                  <button className="w-full py-4 md:py-3 rounded-xl md:font-semibold transition duration-300 ease-in-out">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
