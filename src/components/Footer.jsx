import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-5">
      <div className="container mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 justify-items-center items-center px-4">
        {/* Logo 1 */}
        <div className="flex justify-center">
          <img
            src="/john-deere.png"
            alt="John Deere"
            className="h-8 sm:h-10 lg:h-12"
          />
        </div>
        {/* Logo 2 */}
        <div className="flex justify-center">
          <img
            src="/google.png"
            alt="Google"
            className="h-8 sm:h-10 lg:h-12"
          />
        </div>
        {/* Logo 3 */}
        <div className="flex justify-center">
          <img
            src="/uber-logo.png"
            alt="Uber"
            className="h-8 sm:h-10 lg:h-12"
          />
        </div>
        {/* Logo 4 */}
        <div className="flex justify-center">
          <img
            src="/microsoft-logo.png"
            alt="Microsoft"
            className="h-8 sm:h-10 lg:h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
