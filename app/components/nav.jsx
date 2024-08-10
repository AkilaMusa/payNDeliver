import {
  Home,
  ShoppingCart,
  Favorite,
  Notifications,
} from "@mui/icons-material";

const Nav = () => {
  return (
    <>
      <div className="flex justify-center bg-white py-6  border-2 shadow-sm mt-4">
        <ul className="flex space-x-16">
          <li>
            <Home className="w-10 h-10 text-gray-700 hover:text-blue-500 transition-colors duration-200" />
          </li>
          <li>
            <ShoppingCart className="w-10 h-10 text-gray-700 hover:text-blue-500 transition-colors duration-200" />
          </li>
          <li>
            <Favorite className="w-10 h-10 text-gray-700 hover:text-blue-500 transition-colors duration-200" />
          </li>
          <li>
            <Notifications className="w-10 h-10 text-gray-700 hover:text-blue-500 transition-colors duration-200" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
