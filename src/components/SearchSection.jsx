import React, { useState } from "react";
import { Link } from "react-router";

  

const SearchSection = () => {
  const [link , setLink] = useState("")

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };
  const ITEMS = [ "hero" , "about" , "blog" ]
  const HEADER_LIST = [
    {name : 'Home' , path : '/search-section'},
    {name : 'About' , path : '/search-section#about'},
    {name : 'Blog' , path : '/search-section#blog'},
  ]
  return (
    <div className="bg-black">
    {/* HEADER */}
    <div className="max-w-[1140px] w-full flex justify-between py-3 mx-auto bg-black items-center">
        <Link to={'/search-section'}>
          <img className="max-w-[100px] w-full" src="./assets/image/png/search-section.png" alt="" />
        </Link>
        <div className="flex gap-4">
          {HEADER_LIST.map((item , index) => (
            <Link key={index} to={item.path} className="font-semibold text-xl text-[#FDD653]">{item.name}</Link>
          ))}
        </div>
        <div>
      <datalist className="!hidden" id="names">
        {ITEMS.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      <form action="" className="border-[#FDD653] border-solid border rounded-md flex max-w-[300px] items-center w-full ">
        <input type="text" value={link} onChange={handleInputChange} list="names" placeholder="Search Section" className="w-[90%] outline-none px-3 py-2 bg-transparent text-[#FDD653] placeholder:text-[#FDD653]"/>
        <a href={`/search-section#${link}`}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6325 10.6111C12.5275 9.56732 13.0653 8.24645 13.0653 6.80752C13.0653 3.44422 10.1355 0.709198 6.53264 0.709198C2.92981 0.709198 0 3.44422 0 6.80752C0 10.1708 2.92981 12.9058 6.53264 12.9058C8.07413 12.9058 9.48907 12.4047 10.6071 11.5683L13.7619 14.5134C14.035 14.7684 14.5142 14.7684 14.7873 14.5134C14.9253 14.3846 15 14.2152 15 14.0343C15 13.8534 14.9253 13.684 14.7873 13.5552L11.6325 10.6102L11.6325 10.6111ZM6.5326 11.5507C3.73123 11.5507 1.45166 9.42268 1.45166 6.80755C1.45166 4.19243 3.73123 2.06442 6.5326 2.06442C9.33398 2.06442 11.6135 4.19243 11.6135 6.80755C11.6135 9.42268 9.33398 11.5507 6.5326 11.5507Z" fill="#FDD653"/>
</svg>
        </a>
      </form>
      </div>
    </div>
    <div>
     
      <p>
      </p>
      <div id="hero" className="hero min-h-screen text-white">This is Hero Section </div>
      <div id="about" className="about min-h-screen text-white">This is About Section </div>
      <div id="blog" className="about min-h-screen text-white">This is Blog Section </div>
    </div>
    </div>
  );
};

export default SearchSection
