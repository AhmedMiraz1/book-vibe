
import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";

const Book = ({book}) => {

    const {category,bookName,author,image,rating,tags}= book
    return (
        <div>

            <div className="border-2 p-6 rounded-xl h-full">

                <div className="bg-[#F3F3F3] px-32 py-12 rounded-xl">
                    <img  className='h-40' src={image} alt="" />
                </div>

               <div className='my-5'>
               {
                    tags.map((tag,idx) => <span className='mr-3 text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-xl font-medium' key={idx}>{tag}</span>)
                }
               </div>
              
                <h1 className='text-2xl font-bold text-[#131313]'>{bookName}</h1>
                <p className='text-[#131313CC] font-medium my-6'>By : {author}</p>
                <p className='border-dotted border-b-2'></p>
                <div className='flex justify-between my-6 text-[#131313CC] font-medium'>
                    <p>{category}</p>
                    <p className=' flex items-center gap-2'>{rating} <span><IoIosStarOutline /> </span> </p>
                </div>
            </div>
            
        </div>
    );
};

Book.propTypes ={
    book:PropTypes.object.isRequired
}

export default Book;