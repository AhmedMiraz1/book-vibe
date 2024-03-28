import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveToReadBook, saveToWishList } from "../utils/utils";
// import { useState } from "react";

const BookDetails = () => {
  // const [readBook, setReadBook]=useState([])

  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

  const {
    category,
    bookName,
    author,
    image,
    rating,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const handelAddToRead = () => {
    const Exist = saveToReadBook(idInt);

    if (!Exist) {
      toast("added");
    } else {
      toast.error("error");
    }
  };

  const handelAddWishList = () => {
    const Exist = saveToWishList(idInt);

    if (!Exist) {
      toast("added");
    } else {
      toast.error("error");
    }
  };

  return (
    <div>
      <div className="mt-12 flex flex-col lg:flex-row gap-12 h-full w-full">
        <div className=" bg-[#1313130D] p-20 flex items-center  justify-center w-full h-[65vh] rounded-2xl">
          <img className=" " src={image} alt="" />
        </div>
        <div className="w-full h-full">
          <h1 className="text-5xl font-bold text-[#131313] mb-4">{bookName}</h1>

          <p className="text-[#131313CC] font-medium text-xl"> By : {author}</p>
          <hr className="my-5" />
          <p className="text-xl font-medium text-[#131313CC]">{category}</p>
          <hr className="my-5" />
          <p className="text-[#131313] font-bold">
            {" "}
            Review : <span className="font-normal">{review}</span>
          </p>
          <p className="text-[#131313] font-bold mt-8 ">
            tag
            {tags.map((tag, idx) => (
              <span
                className="mr-3 text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-xl font-medium"
                key={idx}
              >
                #{tag}
              </span>
            ))}
          </p>
          <hr className="my-6" />

          <p className="flex justify-between">
            <span className="tex-[#131313B2] font-normal">
              Number of Pages:
            </span>
            <span className="text-[#131313] font-semibold">{totalPages}</span>{" "}
          </p>
          <p className="flex justify-between my-6">
            <span className="tex-[#131313B2] font-normal">Publisher:</span>
            <span className="text-[#131313] font-semibold">{publisher}</span>
          </p>
          <p className="flex justify-between">
            <span className="tex-[#131313B2] font-normal">
              Year of Publishing:
            </span>
            <span className="text-[#131313] font-semibold">
              {yearOfPublishing}
            </span>
          </p>
          <p className="flex justify-between mt-6">
            <span className="tex-[#131313B2] font-normal">Rating:</span>
            <span className="text-[#131313] font-semibold">{rating}</span>
          </p>

          <button
            onClick={handelAddToRead}
            className="text-[#131313]  border-2 px-7 py-4 font-medium rounded-xl mr-3 mt-9 text-lg"
          >
            Read{" "}
          </button>
          <button
            onClick={handelAddWishList}
            className="bg-[#50B1C9] text-white font-medium text-lg px-7 py-4 rounded-xl"
          >
            Wishlist
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default BookDetails;
