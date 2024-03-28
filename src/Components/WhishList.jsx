import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WhishList = ({ wishList }) => {
  return (
    <div>
      <div className="border-2 p-6 rounded-xl my-7 ">
        <div className="flex gap-6 flex-col lg:flex-row items-center">
          <div className="bg-[#0D0D0D0D] px-12 py-7 rounded-xl">
            <img src={wishList.image} alt="" />
          </div>
          <div>
            <h1 className="text-[#131313] text-2xl font-bold">
              {wishList.bookName}
            </h1>
            <p className="my-4 font-medium text-[#131313CC]">
              By : {wishList.author}
            </p>
            <div className="flex flex-col gap-6 lg: lg:flex-row justify-between items-center">
              <p className="text-[#131313] font-bold">
                {" "}
                tag
                {wishList.tags.map((tag, idx) => (
                  <span
                    className="mr-3 text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-xl font-medium"
                    key={idx}
                  >
                    #{tag}
                  </span>
                ))}
              </p>
              <p className="text-[#131313CC]">
                Year of Publishing: {wishList.yearOfPublishing}{" "}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row justify-between text-[#13131399] mt-5">
              <p>{wishList.publisher}</p>
              <p>{wishList.totalPages}</p>
            </div>
            <hr className="my-5" />
            <div className="flex flex-col gap-6 lg:flex-row justify-between font-medium">
              <p className="text-[#328EFF] bg-[#208EFF26] px-5 py-2 rounded-3xl">
                Category: {wishList.category}
              </p>
              <p className="text-[#FFAC33] px-5 py-2 rounded-3xl bg-[#FFAC3326] ">
                {" "}
                Rating : {wishList.rating}
              </p>
              <Link to="/pageToRead">
                <button className="px-5 py-2 rounded-3xl text-white bg-[#23BE0A] ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhishList.propTypes = {
  wishList: PropTypes.object.isRequired,
};

export default WhishList;
