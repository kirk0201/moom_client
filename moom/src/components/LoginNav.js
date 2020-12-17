import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { BASEURL } from "../helpurl";
import profile_img from "../images/profile.jpg";
import axios from "axios";
import logoimg from "../images/logo700700.png";

class LoginNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navTarget: null,
      hambugerOpen: false,
      userOpen: false,
    };
  }

  // 로그아웃 버튼 클릭시 axios요청 함수
  handleLogout = () => {
    this.handleNav(null);
    axios.get(`${BASEURL}/user/logout`).then(() => {
      console.log(this.props.history);
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
    const { navTarget, hambugerOpen, userOpen } = this.state;
    const { promise, email, profile, name } = this.props.userInfo;
    return (
      <div class="fixed w-full">
        <nav class="bg-gray-800">
          <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12" src={logoimg} alt="Workflow" />
                </div>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link to="/">
                      <span
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          this.handleNav("Basic part");
                        }}
                      >
                        기본 부위
                      </span>
                    </Link>
                    <Link to="/custom">
                      <span
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          this.handleNav("Custom part");
                        }}
                      >
                        커스텀 부위
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="hidden md:block">
                <div class="ml-4 flex items-center md:ml-6">
                  {/* <!-- Profile dropdown --> */}
                  {promise ? (
                    <Link to="/mypage">
                      <span
                        class="bg-gray-100 text-gray-500 px-3 py-2 rounded-md text-m font-medium"
                        onClick={() => {
                          this.handleNav("My page");
                        }}
                      >
                        {promise}
                      </span>
                    </Link>
                  ) : (
                    <></>
                  )}
                  <div class="ml-3 relative">
                    <div>
                      <button
                        class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                        onClick={
                          userOpen
                            ? () => this.handleUser(false)
                            : () => this.handleUser(true)
                        }
                      >
                        <span class="sr-only">Open user menu</span>
                        <img
                          class="h-8 w-8 rounded-full"
                          src={profile}
                          alt=""
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
                        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link to="/mypage">
                          <span
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => {
                              this.handleNav("My page");
                            }}
                          >
                            마이페이지
                          </span>
                        </Link>
                        <span
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
              <div class="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => {
                    hambugerOpen
                      ? this.handleHambuger(false)
                      : this.handleHambuger(true);
                  }}
                >
                  <span class="sr-only">Open main menu</span>
                  {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  {!hambugerOpen ? (
                    <svg
                      class="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      class="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
            <div class="block md:hidden">
              <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/">
                  <span
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Basic part");
                    }}
                  >
                    기본 부위
                  </span>
                </Link>
                <Link to="/custom">
                  <span
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => {
                      this.handleNav("Custom part");
                    }}
                  >
                    커스텀 부위
                  </span>
                </Link>
              </div>
              <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                  <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src={profile} alt="" />
                  </div>
                  <div class="ml-3">
                    <div class="text-base font-medium leading-none text-white">
                      {name}
                    </div>
                    <div class="text-sm font-medium leading-none text-gray-400">
                      {email}
                    </div>
                  </div>
                </div>
                <div class="mt-3 px-2 space-y-1">
                  <Link to="/mypage">
                    <span
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      onClick={() => {
                        this.handleNav("My page");
                      }}
                    >
                      My page
                    </span>
                  </Link>
                  <span
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
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
        <header class="bg-white shadow hidden md:block">
          <div class="max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight text-gray-900">
              {navTarget ? navTarget : "Basic part"}
            </h1>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(LoginNav);
