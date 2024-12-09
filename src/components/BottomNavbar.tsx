import Link from "next/link";

export default function BottomNavbar() {
  return (
    <>
      <nav className=" max-w-screen-2xl mx-auto w-full h-14 lg:h-20 border bordor-b">
        {/* main div */}
        <div className="flex lg:justify-between lg:px-28 justify-center">
          {/* links */}
          <div>
            <ul className="flex my-4 lg:my-6 lg:gap-7 text-sm gap-3 text-gray-600">
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
              <li><Link className="hover:text-customTeal" href={"/contact"}>Contact</Link></li>
            </ul>
          </div>
          {/* contact */}
          <div className="hidden lg:block my-6">
            <p className="text-gray-500">
              <Link href={"/contact"}>
              Contact:</Link> <span className="text-black">{`(808) 555-0111`}</span>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
