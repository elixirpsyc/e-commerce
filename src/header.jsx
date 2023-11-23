import { useState, useEffect } from "react";
import { Input } from "../components/ui/input";

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isSmallScreen = screenWidth <= 800;
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="sticky inset-0 shadow bg-[#ffffff]">
      <nav className="flex flex-wrap justify-between items-center p-3 relative xl:w-[80%] xl:mx-auto">
        <h3 className="border p-1 border-red-500 cursor-pointer text-2xl">
          {isSmallScreen ? "DD" : "DD Store"}
        </h3>
        <div className="relative md:left-[10%]">
          <Input
            type="text"
            placeholder="Search..."
            className="w-[8rem] min-[300px]:w-[calc(10rem+4.5vw)] focus-visible:ring-red-500 peer"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[30%] right-2 text-gray-500 cursor-pointer hover:text-red-500 peer-focus-visible:text-red-500" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ul className="absolute top-full w-full left-0 px-4 border-b sm:border-0 shadow sm:shadow-none text-center sm:px-0 py-2 sm:py-0 sm:static hidden sm:flex sm:w-[initial] gap-2 md:gap-3 lg:gap-4 md:mr-4 items-center sm:mr-2 sm:bg-transparent select-none ">
            <li className="my-1 sm:my-0 hover:text-red-500">
              <a href="#">Home</a>
            </li>
            <li className="my-1 sm:my-0 hover:text-red-500">
              <a href="#">About</a>
            </li>
            <li className="my-1 sm:my-0 hover:text-red-500">
              <a href="#">Products</a>
            </li>
            <li className="my-1 sm:my-0 hover:text-red-500">
              <a href="#footer">Contact</a>
            </li>
            <li className="my-1 sm:my-0 hover:text-red-500">
              <a href="#">Services</a>
            </li>
          </ul>
          <a href="#" className="relative hover:text-red-500 group">
            <i className="fa-solid fa-cart-shopping cursor-pointer text-3xl " />
            <p className="text-white bg-red-500 text-sm absolute px-1 rounded -top-1 -right-2 group-hover:bg-red-700">
              0
            </p>
          </a>
          <i className="fa-solid fa-bars cursor-pointer text-3xl hover:text-red-500 sm:hidden" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
