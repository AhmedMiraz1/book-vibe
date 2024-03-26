import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const ErrorPage = () => {
    return (
        <div className="flex  flex-col text-center gap-11 container mx-auto my-7">
            <h1 className="text-red-700 font-extrabold text-4xl">Oops!!</h1>
            <Link  className='bg-slate-600 p-2 rounded-2xl text-slate-200 flex items-center gap-3 w-56 'to="/"> <IoMdArrowRoundBack />
 Go back to home</Link>
        </div>
    );
};

export default ErrorPage;