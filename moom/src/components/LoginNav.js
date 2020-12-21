import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { BASEURL } from "../helpurl";

import profile_male from "../images/profilemale.svg";
import profile_female from "../images/profilefemale.svg";

import axios from "axios";
import logoimg from "../images/logo700700.png";

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hambugerOpen: false,
      userOpen: false,
    };
  }

  // 로그아웃 버튼 클릭시 axios요청 함수
  handleLogout = () => {
    this.handleNav(null);
    axios.get(`${BASEURL}/user/logout`).then(() => {
      // console.log(this.props.history);
      // TODO : 페이지 전환 확인 redirect
      // TODO: 다른 상태코드에 따른 분기가 필요
      this.props.handleLoginFail();
      this.props.history.push("/");
    });
  };

  handleNav = (value) => {
    this.setState({ navTarget: value });
  };

  handleHambuger = (value) => {
    this.setState({ hambugerOpen: value });
  };

  handleUser = (value) => {
    this.setState({ userOpen: value });
  };

  render() {
    const { hambugerOpen, userOpen } = this.state;
    const { handleHeader, header } = this.props;
    const { promise, email, profile, name, sex } = this.props.userInfo;

    let profile_img;
    if (sex === "female") {
      profile_img = profile_female;
    } else {
      profile_img = profile_male;
    }

    return (
      <div className="w-full z-10">
        <nav className="bg-gray-800">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12" src={logoimg} alt="Workflow" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link to="/">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          handleHeader("Basic part");
                        }}
                      >
                        기본 부위
                      </span>
                    </Link>
                    <Link to="/custom">
                      <span
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          handleHeader("Custom part");
                        }}
                      >
                        커스텀 부위
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* <!-- Profile dropdown --> */}
                  {promise ? (
                    <Link to="/mypage">
                      <span
                        className="bg-gray-100 text-gray-500 px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          handleHeader("My page");
                        }}
                      >
                        {promise}
                      </span>
                    </Link>
                  ) : (
                    <></>
                  )}
                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                        onClick={
                          userOpen
                            ? () => this.handleUser(false)
                            : () => this.handleUser(true)
                        }
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={profile ? profile : profile_img}
                          alt="이미지 어디감?"
                        />
                      </button>
                    </div>
                    {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
                    {userOpen ? (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link to="/mypage">
                          <span
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => {
                              handleHeader("My page");
                            }}
                          >
                            마이페이지
                          </span>
                        </Link>
                        <span
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={this.handleLogout}
                        >
                          로그아웃
                        </span>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => {
                    hambugerOpen
                      ? this.handleHambuger(false)
                      : this.handleHambuger(true);
                  }}
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  {!hambugerOpen ? (
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

          {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
          {hambugerOpen ? (
            <div className="block md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/">
                  <span
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Basic part");
                    }}
                  >
                    기본 부위
                  </span>
                </Link>
                <Link to="/custom">
                  <span
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Custom part");
                    }}
                  >
                    커스텀 부위
                  </span>
                </Link>
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={profile}
                      alt="이미지 어디감?"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link to="/mypage">
                    <span
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      onClick={() => {
                        this.handleNav("My page");
                      }}
                    >
                      My page
                    </span>
                  </Link>
                  <span
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
        <header className="bg-white shadow hidden md:block">
          <div className="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {header ? header : "Basic part"}
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(LoginNav);
