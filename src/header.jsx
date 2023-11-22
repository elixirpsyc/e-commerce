import { Input } from "../components/ui/input";

function Header() {
  return (
    <header className="sticky inset-0 shadow bg-[#ffffff]">
      <nav className="flex flex-wrap justify-between items-center p-3 relative xl:w-[80%] xl:mx-auto">
        <h3 className="border p-1 border-red-500 cursor-pointer text-2xl">
          DD
        </h3>
        <div className="relative md:left-[10%]">
          <Input
            type="text"
            placeholder="Search..."
            className="w-[8rem] min-[300px]:w-[calc(10rem+4.5vw)]"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[30%] right-2 text-gray-500 cursor-pointer" />
        </div>
        <div className="flex flex-wrap gap-2">
          <ul className="absolute top-full w-full left-0 px-4 border-b sm:border-0 shadow sm:shadow-none text-center sm:px-0 py-2 sm:py-0 sm:static hidden sm:flex sm:w-[initial] gap-2 md:gap-3 lg:gap-4 md:mr-4 items-center sm:mr-2 sm:bg-transparent select-none">
            <li className="my-1 sm:my-0">
              <a href="#">Home</a>
            </li>
            <li className="my-1 sm:my-0">
              <a href="#">About</a>
            </li>
            <li className="my-1 sm:my-0">
              <a href="#">Products</a>
            </li>
            <li className="my-1 sm:my-0">
              <a href="#">Contact</a>
            </li>
            <li className="my-1 sm:my-0">
              <a href="#">Services</a>
            </li>
          </ul>
          <i className="fa-solid fa-bag-shopping cursor-pointer text-3xl hover:text-red-500" />
          <i className="fa-solid fa-bars cursor-pointer text-3xl hover:text-red-500 sm:hidden" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
