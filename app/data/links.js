import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

export const links = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "/sellerdashboard/home",
  },
  {
    name: "Products",
    icon: <FiShoppingBag />,
    subLinks: [
      {
        name: "All Products",
        url: "/sellerdashboard/products",
      },
      {
        name: "Add Product",
        url: "/sellerdashboard/products/add",
      },
      {
        name: "Product Category",
        url: "/sellerdashboard/products/category",
      },
    ],
  },
  {
    name: "Customers",
    icon: <FiUsers />,
    url: "/sellerdashboard/customers",
  },
  {
    name: "Sales",
    icon: <BsCurrencyDollar />,
    subLinks: [
      {
        name: "Sales Analytics",
        url: "/sellerdashboard/sales",
      },
      {
        name: "Product Sales",
        url: "/sellerdashboard/sales/productsales",
      },
    ],
  },
  {
    name: "Orders",
    icon: <FiShoppingCart />,
    subLinks: [
      {
        name: "All Orders",
        url: "/sellerdashboard/orders",
      },
      // {
      //   name: "Order Template",
      //   url: "/sellerdashboard/orders/template",
      // },
    ],
  },
  // {
  //   name: "Suppliers",
  //   icon: <FaShare />,
  //   url: "/sellerdashboard/suppliers",
  // },
  {
    name: "Transactions",
    icon: <FaHandshake />,
    url: "/sellerdashboard/transactions",
  },
  // {
  //   name: "Brands",
  //   icon: <FiLayers />,
  //   url: "/sellerdashboard/brands",
  // },
  // {
  //   name: "Reviews",
  //   icon: <FiMessageCircle />,
  //   url: "/sellerdashboard/reviews",
  // },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/sellerdashboard/settings",
  },
  // {
  //   name: "Inbox",
  //   icon: <FiMail />,
  //   url: "/sellerdashboard/inbox",
  // },
];
