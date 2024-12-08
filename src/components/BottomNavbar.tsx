import Link from "next/link";

export default function BottomNavbar() {
  return (
    <>
      <nav className="hidden lg:block max-w-screen-2xl mx-auto w-full h-20 border bordor-b">
        {/* main div */}
        <div className="flex justify-between px-28">
          {/* links */}
          <div>
            <ul className="flex my-6 gap-7 text-gray-600">
              <li>
                <Link className="hover:text-customTeal" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/shop"}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/product"}>
                  Product
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/page"}>
                  Pages
                </Link>
              </li>
              <li>
                <Link className="hover:text-customTeal" href={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* contact */}
          <div className="my-6">
            <p className="text-gray-500">
              Contact: <span className="text-black">{`(808) 555-0111`}</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
