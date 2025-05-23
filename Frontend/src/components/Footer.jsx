import React from "react";
import { assets } from "../assets/assets";

// Footer component to be used across the website
const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-24 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Top section with 4 columns */}
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Brand logo and description section */}
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="logo"
            className="mb-4 h-8 md:h-9 invert opacity-80"
          />
          <p className="text-sm">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          {/* Social media icons */}

          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <img
              src={assets.instagramIcon}
              alt="instagram-Icon"
              className="w-6"
            />

            {/* Facebook */}

            <img
              src={assets.facebookIcon}
              alt="facebook-Icon"
              className="w-6"
            />

            {/* Twitter */}

            <img src={assets.twitterIcon} alt="twitter-Icon" className="w-6" />

            {/* LinkedIn */}

            <img
              src={assets.linkendinIcon}
              alt="linkendin-Icon"
              className="w-6"
            />
          </div>
        </div>

        {/* Company links section */}

        <div>
          <p className="font-playfair text-lg text-gray-800">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>

        {/* Support links section */}

        <div>
          <p className="font-playfair text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription form */}

        <div className="max-w-80">
          <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none"
              placeholder="Your email"
            />

            {/* Submit button with arrow icon */}

            <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
              <img src={assets.arrowIcon} alt="" className="w-3.5 invert" />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}

      <hr className="border-gray-300 mt-8" />

      {/* Bottom copyright & links */}

      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
