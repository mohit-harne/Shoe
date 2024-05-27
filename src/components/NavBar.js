import React from "react";
import { Navbar } from "flowbite-react";
import cart from "../images/cart.png";
import heart from '../images/heart.png'
import search from "../images/search.png";
import { useAuth0 } from "@auth0/auth0-react";
const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      <Navbar className=" bg-black w-[100%] fixed z-10 ">
        <Navbar.Brand href="/">
          <h1 className="text-4xl text-red-700 ml-[-80px] lg:ml-[-50px]  md:ml-[-100px]">
            <span className="text-white ml-24">SNEA</span>KISS
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            className="text-base text-white  hover:text-black mt-[5px]"
            href="/"
          >
            {" "}
            HOME{" "}
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/men"
          >
            MEN
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/women"
          >
            WOMEN
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/kids"
          >
            KIDS
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/collection"
          >
            COLLECTION
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/contact"
          >
            CONTACT US
          </Navbar.Link>
          <Navbar.Link
            className="text-base text-white hover:text-black mt-[5px]"
            href="/aboutus"
          >
            ABOUT US
          </Navbar.Link>
       <div className="flex flex-col gap-0 w-[170px] rounded-lg border-2 border-gray-500 hover:border-red-700 p-1 pl-1.5 mt-[-10px]">
  {
    isAuthenticated && <p className="text-white w-[20px]">{user.name}</p>
  }

  {
    isAuthenticated ?
    <button className="text-white" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    :
    <button className="text-white pt-[px] rounded-lg p-2" onClick={() => loginWithRedirect({ redirect_uri: window.location.origin })}>
      Log In
    </button>
  }
</div>

          
          <Navbar.Link className="invert" href="/cart">
            <img src={cart} className="h-[30px] w-[30px]  " alt="M" />
          </Navbar.Link>
          <Navbar.Link className="invert " href="/favorate">
            <img src={heart} className="h-[30px] w-[30px] " alt="M" />
          </Navbar.Link>
          <Navbar.Link>
            <div className="grid text-white">
              <input
                className="h-8 w-50 mr-[20px] rounded-lg bg-transparent border-2"
                type="text"
                placeholder="Search now"
              />
              <img
                className="opacity-[50%] ml-[230px] mt-[-25px] lg:ml-[190px] lg:mt-[-25px] md:ml-[190px] md:mt-[-25px] h-[20px] w-[20px] hover:cursor-pointer"
                src={search}
                alt="M"
              />
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
