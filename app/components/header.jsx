import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchBar from "./search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Header = () => {
  return (
    <header className=" mb-8  text-black py-2 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo/delivery.jpg" alt="Logo" className="h-10" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <div className=" mx-4">
            <SearchBar />
          </div>

          {/* Cart Icon */}
          <button className="relative">
            <ShoppingCartOutlinedIcon />
          </button>

          {/* User Icon */}
          <button>
            <AccountCircleOutlinedIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
