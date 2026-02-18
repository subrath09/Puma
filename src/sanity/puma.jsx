import { useEffect, useState } from "react";

import { client } from "../sanityClient";
import { SiPuma } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { SiPaytm } from "react-icons/si";
import { SiSamsungpay } from "react-icons/si";

const Puma = () => {
  const [heroPost, setHeroPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [promoPost, setPromoPost] = useState(null);
  const [banner2Post, setBanner2Post] = useState(null);
  const [productCards, setProductCards] = useState([]);



useEffect(() => {
  client
    .fetch(`*[_type=="post" && isHero==true][0]{
      heroTitle,
      heroSubtitle,
      "imageUrl": image.asset->url
    }`)
    .then(setHeroPost);

  client
    .fetch(`*[_type=="post" && isHero!=true] | order(_createdAt asc){
      _id,
      title,
      "imageUrl": image.asset->url
    }`)
    .then(setPosts);

  // Banner fetch
  client
    .fetch(`*[_type=="banner"][0]{
      title,
      subtitle,
      primaryButton,
      secondaryButton,
      "imageUrl": image.asset->url
    }`)
    .then(setPromoPost);

    client
  .fetch(`*[_type=="banner2"][0]{
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    "imageUrl": image.asset->url
  }`)
  .then(setBanner2Post);

  client
  .fetch(`*[_type=="productscard"] | order(_createdAt asc){
    _id,
    title,
    subtitle,
    "imageUrl": image.asset->url
  }`)
  .then(setProductCards);


}, []);


  return (
    <div>
      <div className="items-center text-center py-3 font-medium max-lg:hidden ">
        EXTRA 5% OFF AND FREE SHIPPING ON ALL ONLINE PAYMENTS*
      </div>

      <div className="bg-[#1a1a1a] text-white w-full py-5 px-6 font-medium">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10 font-bold  ">
            <SiPuma className="w-8 h-8 " />
            <div className="max-lg:hidden flex gap-10">
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">New</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Sports</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Men</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Women</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">MotoSports</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Lifestyle</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Kids</p>
            <p className="hover:underline hover:underline-offset-8 decoration-[#a68b55] hover:cursor-pointer">Sale</p>
            </div>
          </div>

          <div className="flex items-center gap-3 max-lg:gap-2">

  {/* Search Button */}
  <button className="flex items-center gap-2 px-6 py-2 max-lg:px-4  border border-gray-500 rounded 
    hover:border-white   
    transition-all duration-300 ">
    <IoMdSearch className="w-5 h-5" />
    SEARCH
  </button>

  {/* Wishlist */}
  <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <CiHeart className="w-6 h-6" />
  </div>

  {/* Cart */}
  <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FiShoppingCart className="w-6 h-6" />
  </div>

  {/* Profile */}
  <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <IoPersonOutline className="w-6 h-6" />
  </div>

</div>

        </div>
      </div>

      <div className="items-center text-center py-8 font-bold text-lg">
        MAKE THEM RIGHTFULLY YOURS
      </div>

      <div className="relative">
        {heroPost?.imageUrl && (
          <img src={heroPost.imageUrl} alt="" className="w-full " />
        )}

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold gap-2 max-lg:gap-0 max-lg:bg-black/50">
          <p className="text-4xl max-lg:text-2xl max-lg:pt-4 font-bold leading-8">
            {heroPost?.heroTitle}
          </p>

          <p className="text-2xl max-lg:text-xl font-normal">
            {heroPost?.heroSubtitle}
          </p>

          <div className="flex gap-4 pt-4 max-lg:gap-2 max-lg:py-2 ">
            <button className="bg-white text-black px-6 py-2 max-lg:px-3 max-lg:py-1 hover:bg-gray-200 rounded font-semibold">
              FOR HIM
            </button>
            <button className="bg-white text-black px-6 py-2 max-lg:px-3 max-lg:py-1 hover:bg-gray-200 rounded font-semibold">
              FOR HER
            </button>
          </div>
        </div>
      </div>

      <div className="text-center py-16 max-lg:py-8">
        <p className="font-bold text-3xl max-lg:text-2xl">FROM TRACK TO STREET</p>
        <p className="py-2 text-lg max-lg:text-sm">
          INSPIRED BY THE PERFORMANCE GEAR WORN BY DRIVERS & TEAMS
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:px-2 max-lg:pb-10 gap-4 px-10 pb-20 text-black ">
        {posts.map((post) => (
          <div key={post._id} className="relative   shadow   ">
               <img
                src={post.imageUrl}
                alt=""
                className=" h-full object-cover   bg-blue-200 w-full "
              /> 

            <div className="absolute bottom-0 w-full text-center text-white p-4 font-medium text-2xl leading-8 bg-gradient-to-t from-black/80 to-transparent">
              {post.title}
            </div>
          </div>
        ))}
      </div>

<div className="relative w-full mt-10">
  <img
    src={promoPost?.imageUrl}
    alt=""
    className="w-full h-[550px] object-cover"
  />

  <div className="absolute inset-0 flex flex-col max-lg:bg-black/40 justify-center items-end max-lg:items-center max-lg:justify-center max-lg:pr-4 pr-16 text-white font-bold gap-3 max-lg:text-center ">
    <p className="text-4xl max-lg:text-2xl font-bold">
      {promoPost?.title}
    </p>

    <p className="text-2xl max-lg:text-lg font-normal">
      {promoPost?.subtitle}
    </p>

    <div className="flex gap-4 pt-4 max-lg:mx-6 ">
      <button className="bg-white text-black px-6 py-3 max-lg:px-3 max-lg:text-sm max-lg:py-2 font-semibold hover:bg-gray-200">
        {promoPost?.primaryButton}
      </button>

      <button className="bg-white text-black px-6 py-3 max-lg:px-3 max-lg:text-sm max-lg:py-2 font-semibold hover:bg-gray-200">
        {promoPost?.secondaryButton}
      </button>
    </div>
  </div>
</div>
      <div className="relative w-full ">
  <img
    src={banner2Post?.imageUrl}
    alt=""
    className="w-full h-[500px] object-cover"
  />

  <div className="absolute inset-0 max-lg:bg-black/45 flex flex-col justify-center pl-16 text-white gap-3">
    <p className="text-4xl font-bold">
      {banner2Post?.title}
    </p>

    <p className="text-xl">
      {banner2Post?.subtitle}
    </p>

    <div className="flex gap-4">
      <button className="bg-white text-black px-6 py-2  hover:bg-gray-200">
        {banner2Post?.primaryButton}
      </button>

     
    </div>
  </div>
</div>
      
    <div className="py-16">

  {/* PRODUCTS  CARDS */}
  <p className="px-8 text-2xl font-bold pb-8 max-lg:pb-4 max-lg:text-center">
    GEAR UP FOR SPORTS
  </p>

  <div className="grid grid-cols-5 max-lg:grid-cols-2 max-lg:gap-2 max-lg:px-4 gap-4 px-8">
    {productCards.map((card) => (
      <div
        key={card._id}
        className="relative group overflow-hidden rounded shadow-lg cursor-pointer"
      >
        <img
          src={card.imageUrl}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute bottom-0 w-full  text-white p-5 font-semibold text-xl max-lg:text-lg max-lg:p-3 leading-8 bg-gradient-to-t from-black/80 to-transparent">
          {card.subtitle}
        </div>
      </div>
    ))}
  </div>
</div>
      {/* FOOTER */}
<footer className="bg-[#111] text-white mt-20 pt-14 pb-8 px-10 max-lg:mt-2   text-sm">
  <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-10 max-lg:gap-2 border-b border-gray-400 pb-10">

    {/* SUPPORT */}
    <div className="pl-16 max-lg:pl-0">
      <p className="font-semibold mb-2 text-xl max-lg:text-lg">SUPPORT</p>
      <ul className=" text-gray-300 text-lg max-lg:text-sm">
        <li>Contact us</li>
        <li>Promotions & Sale</li>
        <li>Track Order</li>
        <li>Shoe Care</li>
        <li>Tech Glossary</li>
        <li>Initiate Return / Exchange</li>
        <li>Sneakers</li>
        <li>Nitro</li>
        <li>Hyrox India</li>
        <li>Cookie Settings</li>
      </ul>
    </div>

    {/* FAQ / ACCOUNT */}
    <div className="text-lg max-lg:text-sm ">
      <p className="font-bold mb-2 invisible">.</p>
      <ul className=" text-gray-300">
        <li className="mb-2 max-lg:font-bold">FAQs</li>
        <li>My Account</li>
        <li>Exchange & Return Policy</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Shoes</li>
        <li>Running Shoes</li>
        <li>Sneakers for Women</li>
        <li>Sitemap</li>
      </ul>
    </div>

    {/* ABOUT */}
    <div className="max-lg:my-4">
      <p className="font-semibold text-xl mb-4 max-lg:text-sm max-lg:mb-2  ">ABOUT</p>
      <ul className="text-lg text-gray-300 max-lg:text-sm">
        <li>Company</li>
        <li>What is HYROX?</li>
        <li>PUMA GO WILD</li>
        <li>Corporate News</li>
        <li>Press Center</li>
        <li>Investors</li>
        <li>Sustainability</li>
        <li>Careers</li>
        <li>Store Locator</li>
        <li>PUMA Articles</li>
      </ul>
    </div>

    {/* SOCIAL + EXPLORE */}
    <div className="mr-16 max-lg:mr-0">
      <p className="font-semibold text-lg mb-4 max-lg:text-center  ">STAY UP TO DATE</p>

      <div className="flex gap-4 text-xl mb-8">
       <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FaYoutube className="w-6 h-6" />
  </div>

  {/* Twitter */}
  <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FaXTwitter className="w-6 h-6" />
  </div>

  {/* Pinterest */}
  <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FaPinterest className="w-6 h-6" />
  </div>

   <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FaInstagram className="w-6 h-6" />
  </div>

   <div className="p-2 rounded-full hover:bg-gray-600 
    transition duration-300 hover:scale-110 cursor-pointer">
    <FaFacebook className="w-6 h-6" />
  </div>
      </div>

      <p className="font-bold mb-4 max-lg:text-center  ">EXPLORE</p>
      <div className="flex gap-6 max-lg:items-center max-lg:justify-center">
        <div className="border border-gray-500 px-5 py-3  hover:border-white rounded-xl text-xs text-center">
          <SiPuma className="w-8 h-8" />
          APP
        </div>
        <div className="border border-gray-500 px-5 py-3 hover:border-white rounded-xl text-xs text-center">
          <SiPuma className="w-8 h-8" />
          TRAC
        </div>
      </div>
    </div>
  </div>

  {/* BOTTOM STRIP */}
  <div className="flex justify-between items-center pt-6 text-gray-400 max-lg:flex-col">

    <div className="flex gap-4 ">
      <div className="text-3xl text-white"><FaCcVisa /></div>
      <div className="text-3xl text-white"><FaCcMastercard /></div>
      <div className="text-2xl text-white"><SiAmericanexpress /></div>
      <div className="text-3xl text-white"><SiPaytm /></div>
      <div className="text-3xl text-white"><SiSamsungpay /></div>
    </div>

    <div className="border border-gray-500 px-8 py-4 font-semibold text-lg rounded text-white max-lg:my-6 max-lg:px-4 max-lg:py-2 hover:border-white">
      INDIA
    </div>

    <p className="text-xs">
      © PUMA INDIA LTD, 2026. ALL RIGHTS RESERVED.
      <span className="block items-end text-end underline underline-offset-2">IMPRINT AND LEGAL DATA</span>
    </p>

  </div>
</footer>




    </div>
  );
};

export default Puma;
