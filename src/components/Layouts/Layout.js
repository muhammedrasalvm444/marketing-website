import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-3-line",
      path_link: "/intro",
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-information-line",
      path_link: "/intro",
    },

    {
      title: "Clients",
      path: "/clients",
      icon: "ri-user-location-fill",
      path_link: "/intro",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-line",
      path_link: "/address",
    },
  ];
  return (
    <div>
      {/* content */}
      <div className="overflow-x-hidden pb-44">{children}</div>

      {/* footer */}
      <div className="fixed left-0 right-0 z-10 bottom-10 sm:bottom-0">
        <div className="flex justify-center w-full">
          {menuItems.map((item, index) => (
            <div className="flex flex-col items-center justify-end">
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="w-10 h-5 rounded-t-full bg-primary"></div>
                  <div className="w-20 h-5 text-center rounded-t-full bg-primary">
                    <i
                      className={`${item.icon} text-xl text-white cursor-pointer`}
                    ></i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 sm:px-8 bg-primary py-5 ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2`}
              >
                {location.pathname !== item.path && (
                  <i
                    onClick={() => navigate(item.path)}
                    className={`${item.icon} text-secondary text-xl`}
                  ></i>
                )}
                <Link
                  to={`${item.path}`}
                  path={`${item.path_link}`}
                  className={`text-secondary text-xl ${
                    item.path !== location.pathname && "sm:hidden"
                  } `}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
