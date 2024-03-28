import { Link } from 'react-router-dom';
import banner from '../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row gap-8 items-center px-6 lg:px-32 py-4 lg:py-20 justify-between bg-[#1313130D] my-12 rounded-xl'>

                <div className=''>
                    <h1 className=' text-2xl lg:text-5xl font-semibold lg:font-bold text-[#131313] mb-12'>Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/listedBooks'  className='text-white font-bold text-xl bg-[#23BE0A] px-4 lg:px-7 py-3 lg:py-5 rounded-xl'>View The List</Link>
                </div>
                <div>
                    <img src={banner}alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;