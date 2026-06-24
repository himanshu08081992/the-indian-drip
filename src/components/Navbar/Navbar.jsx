import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FiSearch, FiUser, FiShoppingBag, FiMenu } from "react-icons/fi";
import { useState } from "react";
import products from "../../data/products";
function Navbar() {
  const { cart } = useCart();

  const [search, setSearch] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const searchExpanded = isHovered || isFocused || search.length > 0;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav
      className="
    sticky
    top-0
    z-50

    px-20

    bg-[#F5EFE6]/90
    backdrop-blur-md

    border-b
    border-gray-200
  "
    >
      {" "}
      <div className="max-w-8xl mx-auto px-3 lg:px-4">
        <div className="grid grid-cols-[30%_40%_30%] items-center h-20">
          {/* MOBILE MENU */}

          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu size={24} />
          </div>

          {/* LOGO */}

          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-3xl">
              THE <span className="text-[#7A0C0C] font-bold">इंडियन</span> DRIP
            </Link>
          </div>

          {/* mobile ki cart  */}

          {/* DESKTOP MENU */}

          <ul className="hidden lg:flex justify-center gap-10 font-medium">
            <li>
              <Link
                to="/shop"
                className="
    relative

    after:absolute
    after:left-0
    after:-bottom-1

    after:h-[2px]
    after:w-0

    after:bg-[#7A0C0C]

    hover:after:w-full

    after:duration-300
  "
              >
                SHOP
              </Link>
            </li>

            <li>
              <Link
                className="
               relative

    after:absolute
    after:left-0
    after:-bottom-1

    after:h-[2px]
    after:w-0

    after:bg-[#7A0C0C]

    hover:after:w-full

    after:duration-300
              "
                to="collections"
              >
                COLLECTIONS
              </Link>
            </li>

            <li>
              <Link
                className="
               relative

    after:absolute
    after:left-0
    after:-bottom-1

    after:h-[2px]
    after:w-0

    after:bg-[#7A0C0C]

    hover:after:w-full

    after:duration-300
              "
                to="/OurStory"
              >
                OUR STORY
              </Link>
            </li>

            <li>
              <Link
                className="
               relative

    after:absolute
    after:left-0
    after:-bottom-1

    after:h-[2px]
    after:w-0

    after:bg-[#7A0C0C]

    hover:after:w-full

    after:duration-300
              "
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* ICONS */}

          <div className="hidden lg:flex justify-end items-center gap-5 text-xl">
            {" "}
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

        transition-all
        duration-500
        ease-in-out

        ${
          searchExpanded
            ? "w-[260px] bg-white border border-gray-300 px-4 py-2 shadow-sm"
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
                        to={`/product/${product.id}`}
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
                          src={product.image}
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
            <button className="hover:text-[#7A0C0C] duration-300">
              <FiUser />
            </button>
            {/* CART */}
            <Link
              to="/cart"
              className="
      relative
      hover:text-[#7A0C0C]
      duration-300
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

      bg-[#F5EFE6]

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
                      to={`/product/${product.id}`}
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
                        src={product.image}
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
