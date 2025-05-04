import React ,{ useState , useEffect , useRef }from 'react';
import { useNavigate } from 'react-router-dom';
import CartDrawer from "../Option/CartDrawer";

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();


  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      };
  
      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setIsDropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, 
  );

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <img
            className="h-8 md:h-10 cursor-pointer"
            onClick={() => navigate('/')}
            src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png"
            alt="Brand Logo"
          />
        </div>

        <div className="flex items-center space-x-2 flex-1 justify-end">
        {/* search */}

        {/* Search Button for Mobile */}
        <div className="flex sm:hidden items-center m-2">
          {isSearchOpen ? (
            <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 w-60 transition-all duration-300">
              <input
                type="text"
                className="flex-1 bg-transparent outline-none text-sm"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
              />
              <button onClick={toggleSearch} className="ml-2 text-gray-400 hover:text-gray-600">
              <i className='bx bx-x text-2xl '></i>
              </button>
            </div>
          ) : (
            <button onClick={toggleSearch} className="p-2 rounded-md">
              <i className='bx bx-search text-2xl '></i>
            </button>
          )}
        </div>

        <div className="flex flex-1 justify-center px-2 sm:px-4">
          <div className="hidden sm:flex w-full max-w-md bg-gray-100 rounded-md items-center px-4 py-2">
            <input
              className="flex-1 bg-transparent font-semibold text-sm outline-none placeholder-gray-400"
              type="text"
              placeholder="I'm searching for ..."
            />
            <button>
            <i className='bx bx-search text-2xl '></i>
            </button>
          </div>
        </div>

        {/* buttons */} 
        <nav className="contents">
          <ul className="flex ml-4 xl:w-48 items-center justify-end">

            
            {/* Cart */}
            <li className="ml-2 relative inline-block">
                <button className=" w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition"
                onClick={() => setIsCartOpen(true)}>
                  <i className="bx bx-cart text-2xl text-gray-600 hover:text-blue-500"></i>
                </button>
            </li>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

            {/* User */}
            <li className="ml-2 lg:ml-4 relative inline-block" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="p-1"
              >
              <img className="w-10 h-10 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full object-cover" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 animate-fade-in"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Account
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orders
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
