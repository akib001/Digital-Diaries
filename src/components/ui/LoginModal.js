import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function LoginModal({ showLoginModal, oncloseLoginModal }) {
  return (
    <Transition appear show={showLoginModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto"
        onClose={() => oncloseLoginModal(false)}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="flex border-b-[1px] py-3 pl-4 pr-8"
              >
                <button
                  // closeModal
                  type="button"
                  onClick={() => console.log('asdfasd')}
                  className="hover:bg-gray-100 rounded-full px-3 py-1 font-semibold"
                >
                  X
                </button>
                <h1 className="font-bold text-lg mx-auto">Log in or sign up</h1>
              </Dialog.Title>
              {/* <div className="mt-2">
                <p className="text-sm text-gray-500 border-t pt-2">
                  This is a dialog box
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                  onClick={() => oncloseLoginModal(false)}
                >
                  Close
                </button>
              </div> */}
              {/* card */}
              <div className="w-full sm:max-w-lg">
                {/* Login Form */}
                <form className="p-6 pb-4">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      //   ref={enteredEmailRef}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      //   ref={enteredPasswordRef}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Login
                    {/* {isLoginMode ? 'Login' : 'Sign Up'} */}
                  </button>
                </form>

                {/* Create New Account Button */}
                <div className="my-2 mx-6 mb-5">
                  <button
                    className="border w-full py-2 border-black rounded-md hover:bg-gray-100"
                    type="button"
                    // onClick={loginModeSwitchHandler}
                  >
                    Create new Account
                    {/* {isLoginMode ? 'Create new Account' : 'Switch to Login'} */}
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginModal;
