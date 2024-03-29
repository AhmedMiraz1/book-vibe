import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
// import { saveReadings } from "../../utils/utils";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
 




 

  

  return (
    <div>
      <div>
        <h1 className="text-center my-9 bg-[#1313130D] py-8 rounded-2xl font-bold text-3xl text-[#131313] ">
          Book
        </h1>

        <div>
          <div className="flex justify-center ">
            <details className="dropdown mb-20">
              <summary className="m-1 btn bg-[#23BE0A] text-white text-lg">
                Sort By{" "}
                <span className="text-3xl">
                  <RiArrowDropDownLine />
                </span>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                <li>
                  <a>Rating</a>
                </li>
                <li >
                  <a>Number of page</a>
                </li>
                <li >
                  <a>Publish year</a>
                </li>
              </ul>
            </details>
          </div>

          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap text-[#131313CC]">
            <Link
              to=""
              onClick={() => setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg border-gray-400 text-[#13131380]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Read Books</span>
            </Link>
            <Link
              to="wishList"
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg border-gray-400 text-[#13131380]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Wishlist Books</span>
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
