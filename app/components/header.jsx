import Image from "next/image";

const Header = () => {
  return (
    <div className="flex mb-5 w-full justify-between items-center italic bg-white p-4 rounded-lg shadow-md">
      <span className="text-lg font-semibold text-gray-800">
        Akila & <br /> The bee
      </span>
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="/images/profile/profile.jpg"
          alt="User avatar"
          width={40}
          height={40}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
