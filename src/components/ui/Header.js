import React, { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import ProfileModal from './ProfileModal';

const Header = () => {
  // const [categories, setCategories] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  function closeLoginModal(value) {
    setIsLoginModalOpen(value);
  }

  function openLoginModal() {
    setIsLoginModalOpen(true);
  }

  function closeProfileModal(value) {
    setIsProfileModalOpen(value);
  }

  function openProfileModal() {
    setIsProfileModalOpen(true);
  }

  return (

    <>
      <div className="bg-white w-full py-10 top-0 shadow-sm sticky z-10" />
      <div className="container mx-auto">
        <nav className="container fixed top-0 w-full z-20">
          <div className="w-full">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center  mx-20  justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 ">
                  <Link to="/">
                      <img
                        alt="logo"
                        height="50px"
                        width="260px"
                        className="object-cover cursor-pointer"
                        src={logo}
                      />

                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/create-blog">
                      <button
                        type="button"
                        className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                      >
                        Create Blog
                      </button>
                    </Link>
                    <Link to="/your-blogs">
                      <button
                        type="button"
                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Your Blogs
                      </button>
                    </Link>

                    <button
                      type="button"
                      onClick={openProfileModal}
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Profile
                    </button>

                    <Link to="/category">
                      <button
                        type="button"
                        className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Category
                      </button>
                    </Link>

                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <div className="mr-10 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <Link to="/create-blog">
                    <button
                      type="button"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Create Blog
                    </button>
                  </Link>
                  <Link to="/your-blog">
                    <button
                      type="button"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Your Blog
                    </button>
                  </Link>
                  <Link to="/your-blog">
                    <button
                      type="button"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Your Blog
                    </button>
                  </Link>

                  <button
                    type="button"
                    onClick={openProfileModal}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Profile
                  </button>

                  <Link to="/category">
                    <button
                      type="button"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Category
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      type="button"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
      <LoginModal
        showLoginModal={isLoginModalOpen}
        oncloseLoginModal={closeLoginModal}
      />
      <ProfileModal
        showProfileModal={isProfileModalOpen}
        oncloseProfileModal={closeProfileModal}
      />
    </>
  );
};

export default Header;
