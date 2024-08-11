import Cart from "../components/cart";
const Usercart = () => {
  return (
    <>
      <div className="">
        <div className="shadow-sm w-full flex  flex-col items-center justify-center">
          <h1 className="font-bold text-xl italic my-5">Cart</h1>
        </div>
        <div className="mt-5 p-1">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Usercart;
