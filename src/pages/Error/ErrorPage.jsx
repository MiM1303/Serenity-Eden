import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-48">
            <h2 className="text-red-600 text-5xl">Page not found!!!</h2>
            <p className="text-3xl">This page does not exist.</p>
            <p className="text-2xl">Go back to 
                <Link className="text-blue-600 font-semibold" to={-1}> previous page</Link> 
            </p>
        </div>
    );
};

export default ErrorPage;