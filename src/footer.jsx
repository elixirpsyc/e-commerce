function Footer() {
  return (
    <footer className="bg-[#ffffff]" id="footer">
      <div className="p-3 xl:w-[80%] xl:mx-auto flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 sm:gap-8">
        <ul className="flex flex-col items-center justify-center gap-2">
          <li>Email :- customercare@ddstore.in</li>
          <li>Phone :- 01-23456789</li>
          <li>24/7 Support</li>
        </ul>
        <div className="flex flex-col jusitify-center items-center">
          <h3 className="mb-2">Follow us on</h3>
          <ul className="flex gap-4 justify-center">
            <li className="flex items-center">
              <a href="#">
                <i className="fa-brands fa-instagram hover:text-red-500 cursor-pointer text-xl" />
              </a>
            </li>
            <li className="flex items-center">
              <a href="#">
                <i className="fa-brands fa-youtube hover:text-red-500 cursor-pointer text-xl" />
              </a>
            </li>
            <li className="flex items-center">
              <a href="#">
                <i className="fa-brands fa-facebook-f hover:text-red-500 cursor-pointer text-xl" />
              </a>
            </li>
            <li className="flex items-center">
              <a href="#">
                <i className="fa-brands fa-x-twitter hover:text-red-500 cursor-pointer text-xl" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-2 items-center justify-center select-none">
          <li className="text-center hover:underline hover:cursor-pointer">
            Privacy Policy Terms and Conditions{" "}
          </li>
          <li>© Digital Devices Store, 2023</li>
          <li>All Rights Reserved</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
