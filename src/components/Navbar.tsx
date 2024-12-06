import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { content } from '../config/content';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [roofingServicesOpen, setRoofingServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = content.navigation.services;
  const navigation = content.navigation.links;

  const roofingServices = [
    { name: "Residential", href: "/products/residential" },
    { name: "Commercial", href: "/products/commercial" }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setRoofingServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">Roofer</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => 
            item.dropdown ? (
              <div 
                key={item.name} 
                className="relative"
                ref={dropdownRef}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {item.name}
                  <ChevronDownIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                {servicesOpen && (
                  <div 
                    className="absolute left-0 z-10 mt-3 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => {
                      setServicesOpen(false);
                      setRoofingServicesOpen(false);
                    }}
                  >
                    <div 
                      className="relative group"
                      onMouseEnter={() => setRoofingServicesOpen(true)}
                    >
                      <a
                        href="/services"
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Roofing Services
                        <ChevronRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                      </a>
                      {roofingServicesOpen && (
                        <div className="absolute left-full top-0 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          {roofingServices.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    {services.slice(1).map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white bg-primary px-4 py-2 rounded-md hover:bg-secondary transition-colors"
          >
            Get Free Estimate
          </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-primary">Roofer</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  {roofingServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                  {services.slice(1).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                  {navigation.filter(item => !item.dropdown).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary hover:bg-secondary text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}