import React from "react";
import { useRouter } from "next/router";
import { createPopper } from "@popperjs/core";
import Cookies from "js-cookie";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const router = useRouter()
  const logout = () => {
    Cookies.remove('role');
    Cookies.remove('user');
    Cookies.remove('branch');
    router.push({pathname: "/"});
  }

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/redcross/red-cross-symbol.png"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={() => logout()}
        >
            <i className={"fas fa-sign-out-alt mr-2 text-sm opacity-75"}></i>
          Keluar
        </a>
        {/*<a*/}
        {/*  href="#pablo"*/}
        {/*  className={*/}
        {/*    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"*/}
        {/*  }*/}
        {/*  onClick={(e) => e.preventDefault()}*/}
        {/*>*/}
        {/*  Another action*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  href="#pablo"*/}
        {/*  className={*/}
        {/*    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"*/}
        {/*  }*/}
        {/*  onClick={(e) => e.preventDefault()}*/}
        {/*>*/}
        {/*  Something else here*/}
        {/*</a>*/}
        {/*<div className="h-0 my-2 border border-solid border-blueGray-100" />*/}
        {/*<a*/}
        {/*  href="#pablo"*/}
        {/*  className={*/}
        {/*    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"*/}
        {/*  }*/}
        {/*  onClick={(e) => e.preventDefault()}*/}
        {/*>*/}
        {/*  Seprated link*/}
        {/*</a>*/}
      </div>
    </>
  );
};

export default UserDropdown;
