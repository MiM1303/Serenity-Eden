import Navbar from "../Shared/Navbar";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl">This is home</h2>
            <Slider></Slider>
        </div>
    );
};

export default Home;