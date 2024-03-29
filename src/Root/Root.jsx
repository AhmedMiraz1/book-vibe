import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div>
      <div className="container mx-auto px-8 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
