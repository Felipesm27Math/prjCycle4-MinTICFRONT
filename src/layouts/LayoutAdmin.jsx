import Navbar from "components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const PrivateLayout = () => {
return (
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <div className='flex w-full h-full'>
        <div className='w-full h-full  overflow-y-scroll'>
            <Navbar />
            <Outlet/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrivateLayout;