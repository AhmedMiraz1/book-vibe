import { useLoaderData } from "react-router-dom";


const ListedBooks = () => {

    const bookCard = useLoaderData()
    console.log(bookCard)
    return (
        <div>
            <div>
                <h1 className="text-center my-9 bg-[#1313130D] py-8 rounded-2xl font-bold text-3xl text-[#131313] ">Book </h1>
            </div>
        </div>
    );
};

export default ListedBooks;