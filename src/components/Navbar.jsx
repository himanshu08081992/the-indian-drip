import { NavLink, Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { FiSearch, FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";
import { getProducts } from "../services/productService";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `relative transition-all duration-300 hover:text-[#7A0C0C] hover:-translate-y-[2px]
   after:absolute after:left-0 after:-bottom-1 after:h-[2px]
   after:w-0 after:bg-[#7A0C0C] hover:after:w-full after:duration-300
   ${isActive ? "text-[#7A0C0C] after:w-full" : ""}`;

  const { cart } = useCart();

  const [search, setSearch] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [products, setProducts] = useState([]);

  const searchExpanded = isHovered || isFocused || search.length > 0;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav
      // ref={navbarRef}
      className=" sticky top-0 z-50 px-0 lg:px-8 xl:px-12 bg-[#F5EFE6]/70
backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 border-b border-gray-200 "
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[88px]">
          {/* MOBILE MENU */}

          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu size={24} />
          </div>

          {/* LOGO */}

          <div
            //  ref={logoRef}
            className="flex items-center  flex-shrink-0"
          >
            <Link
              to="/"
              className="text-lg
              leading-none
select-none
sm:text-xl
md:text-2xl
lg:text-[30px]  tracking-[0.15em] font-semibold shrink-0 whitespace-nowrap"
            >
              THE <span className="text-[#7A0C0C] font-bold">इंडियन</span> DRIP
            </Link>
          </div>

          {/* DESKTOP MENU */}

          <ul className="hidden lg:flex justify-center gap-8 lg:gap-12 text-[14px] tracking-[0.18em] uppercase">
            <li>
              <NavLink to="/shop" className={navLinkClass}>
                SHOP
              </NavLink>
            </li>

            <li>
              <NavLink to="/collections" className={navLinkClass}>
                COLLECTIONS
              </NavLink>
            </li>

            <li>
              <NavLink to="/ourstory" className={navLinkClass}>
                OUR STORY
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* ICONS */}

          <div
            // ref={iconsRef}
            className="hidden lg:flex justify-end items-center gap-5 text-xl"
          >
            {/* SEARCH */}
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                if (!search && !isFocused) {
                  setIsHovered(false);
                }
              }}
            >
              <div
                className={`
        flex items-center

        overflow-hidden

        rounded-full
        hover:shadow-lg
        transition-all
        duration-500
        ease-in-out

        ${
          searchExpanded
            ? "lg:w-[260px] xl:w-[300px] bg-white border border-gray-300 px-4 py-2 shadow-sm"
            : "w-10 h-10 justify-center"
        }
 
      `}
              >
                <FiSearch className="flex-shrink-0 text-lg" />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    setIsFocused(false);

                    if (!search) {
                      setIsHovered(false);
                    }
                  }}
                  placeholder="Search products..."
                  className={`
          bg-transparent
          outline-none

          ml-3

          text-sm

          transition-all
          duration-300

          ${searchExpanded ? "w-full opacity-100" : "w-0 opacity-0"}
        `}
                />
              </div>
              {search.length > 0 && (
                <div
                  className="
      absolute
      top-full
      right-0

      mt-3

      w-[320px]

      bg-white

      rounded-2xl

      shadow-xl

      border

      overflow-hidden

      z-50
    "
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.productCode}`}
                        onClick={() => {
                          setSearch("");
                          setIsHovered(false);
                          setIsFocused(false);
                        }}
                        className="
    flex
    items-center
    gap-3
    p-3
    hover:bg-gray-100
  "
                      >
                        <img
                          src={
                            product.images?.[0] || "/placeholder-product.png"
                          }
                          alt={product.name}
                          className="
              w-12
              h-12
              object-cover
              rounded-lg
            "
                        />

                        <div>
                          <h4 className="text-sm font-medium">
                            {product.name}
                          </h4>

                          <p className="text-[#7A0C0C] text-sm">
                            ₹{product.price}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="p-4 text-center text-gray-500">
                      No products found
                    </p>
                  )}
                </div>
              )}
              {/* FUTURE SEARCH RESULTS DROPDOWN */}
            </div>
            {/* USER */}
            <button className="hover:text-[#7A0C0C] hover:scale-110 transition-all duration-300">
              <FiUser />
            </button>
            {/* CART */}
            <Link
              to="/cart"
              className="relative  hover:text-[#7A0C0C] hover:scale-110 transition-all duration-300
    "
            >
              <FiShoppingBag />

              {cartCount > 0 && (
                <span
                  className="
          absolute
          -top-2
          -right-2

          bg-[#7A0C0C]
          text-white

          text-[10px]

          min-w-[18px]
          h-[18px]

          px-1

          rounded-full

          flex
          items-center
          justify-center
        "
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* mobile cart  */}
          <div className="lg:hidden flex  justify-end items-center gap-4">
            <Link to="/cart" className="relative text-xl">
              <FiShoppingBag />

              {cartCount > 0 && (
                <span
                  className="
          absolute
          -top-2
          -right-2

          bg-[#7A0C0C]
          shadow-lg
ring-2
ring-[#F5EFE6]
          text-white

          text-[10px]

          min-w-[18px]
          h-[18px]

          rounded-full

          flex
          items-center
          justify-center
        "
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
      lg:hidden

     bg-[#F5EFE6]/95
     animate-in
fade-in
backdrop-blur-xl

      border-t
      border-gray-200

      px-6
      py-6
    "
        >
          {/* SEARCH */}

          <div className="mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="
          w-full

          border
          border-gray-300

          rounded-full

          px-4
          py-3

          bg-white

          outline-none
        "
            />

            {search.length > 0 && (
              <div
                className="
            mt-4

            bg-white

            rounded-2xl

            border

            overflow-hidden
          "
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.productCode}`}
                      onClick={() => setMenuOpen(false)}
                      className="
                  flex
                  items-center

                  gap-3

                  p-3

                  hover:bg-gray-100
                "
                    >
                      <img
                        src={product.images?.[0] || "/placeholder-product.png"}
                        alt={product.name}
                        className="
                    w-12
                    h-12

                    object-cover

                    rounded-lg
                  "
                      />

                      <div>
                        <p className="font-medium text-sm">{product.name}</p>

                        <p className="text-[#7A0C0C] text-sm">
                          ₹{product.price}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="p-4 text-center text-gray-500">
                    No products found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* MENU LINKS */}

          <div className="flex flex-col gap-5 font-medium">
            <Link to="/shop" onClick={() => setMenuOpen(false)}>
              SHOP
            </Link>

            <Link to="/collections" onClick={() => setMenuOpen(false)}>
              COLLECTIONS
            </Link>

            <Link to="/OurStory" onClick={() => setMenuOpen(false)}>
              OUR STORY
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
