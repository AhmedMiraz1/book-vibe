import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-semibold lg:font-extrabold text-4xl lg:text-9xl text-gray-600">
				<span className="sr-only">Error</span>404
			</h2>
			<p className=" text-xl lg:text-2xl font-medium lg:font-semibold text-gray-800 ">Sorry, we couldn`t find this page.</p>
			<p className="mt-4 mb-8 text-gray-800">But don`t worry, you can find plenty of other things on our homepage.</p>
			<Link to ="/" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"> Back to homepage</Link>
		</div>
	</div>
</section>
    );
};

export default ErrorPage;