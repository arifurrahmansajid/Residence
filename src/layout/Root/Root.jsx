import { Outlet  } from "react-router-dom";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-Poppins">
            {/* header viwe  */}
            <div>
                <Header></Header>
            </div>

            {/* all viwe */}
            <div className="overflow-hidden">
                <Outlet></Outlet>
            </div>

            {/* footer viwe  */}
            <div>
                <Footer></Footer>
            </div>
        </div>
        
    );
};

export default Root;
