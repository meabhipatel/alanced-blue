import React, { useState } from "react";
import search from "../images/SearchOutlined.png";
import { Link } from "react-router-dom";

const Section = () => {
  const [searchType, setSearchType] = useState("Talent");

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <>
      <section className="flex justify-center">
        <div className="lg:w-[77vw] w-[95vw] bg-white -mt-[57px] p-2 lg:h-24 rounded-2xl lg:flex justify-center items-center shadow-lg">
          <Link
            to={{
              pathname:
                searchType === "Talent" ? "/view-all/freelancer" : "/projects",
            }}
            onClick={() => window.scroll(0, 0)}
          >
            <div className="flex flex-row items-center p-4 lg:border-r-2 lg:border-r-[#1C3865] cursor-text">
              <img src={search} alt="search-icon" className="w-5 h-5" />
              <p className="w-96 ml-2 lg:mr-48 font-inter text-base text-gray-500">
                {searchType === "Talent"
                  ? "Search for the best freelancers in one place."
                  : "Finding the best freelance jobs according your skills "}
              </p>
            </div>
          </Link>
          <div className="">
            <select
              className="bg-gray-50 text-[#797979] text-sm font-inter font-normal rounded-lg block p-2.5 ml-5"
              onClick={handleSearchTypeChange}
            >
              <option value="Talent">Talent</option>
              <option value="Jobs">Jobs</option>
            </select>
          </div>
          <div className="lg:ml-12 mt-2">
            <Link
              to={{
                pathname:
                  searchType === "Talent"
                    ? "/view-all/freelancer"
                    : "/projects",
              }}
              onClick={() => window.scroll(0, 0)}
            >
              <button className="rounded h-12 w-28 lg:ml-6 font-semibold text-white bg-gradient-to-r from-[#0909E9] to-[#00D4FF]">
                Search
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
