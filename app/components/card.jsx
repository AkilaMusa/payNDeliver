import { Add } from "@mui/icons-material";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import SearchBar from "./search";

const Card = () => {
  const cards = [
    { id: 1, title: "Cappuccino", image: "/images/coffe.jpg" },
    { id: 2, title: "Latte", image: "/images/coffe.jpg" },
    { id: 3, title: "Espresso", image: "/images/coffe.jpg" },
    { id: 4, title: "Americano", image: "/images/coffe.jpg" },
  ];

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 ">
        <SearchBar />
        <div className="grid grid-cols-2  md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border p-4 border-gray-200 rounded-lg shadow  dark:border-gray-700"
            >
              <Image
                width={400}
                height={200}
                className="rounded-xl w-full h-40 object-cover"
                src={card.image}
                alt={card.title}
              />
              <div className="pt-4">
                <p className="mb-2 tracking-tight text-gray-900 dark:text-black">
                  {card.title}
                </p>
                <div className="w-full bg-white  rounded-xl flex justify-between items-center space-x-4 text-center">
                  <h4 className="px-2">$100</h4>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <Add />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
