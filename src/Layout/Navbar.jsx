import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#988558]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      to="/"
                      className="rounded-md px-3 py-4 text-lg font-bold text-white hover:bg-[#3c331f] hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      to="/studio-program"
                      className="rounded-md px-3 py-4 text-lg font-bold text-white hover:bg-[#3c331f] hover:text-white"
                    >
                      Studio Program
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link
                className="block rounded-md hover:bg-[#3c331f] hover:text-white px-3 py-2 text-base font-medium text-white"
                to="/"
              >
                Home
              </Link>
              <Link
                className="block rounded-md hover:bg-[#3c331f] hover:text-white px-3 py-2 text-base font-medium text-white"
                to="/studio-program"
              >
                Studio Program
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
