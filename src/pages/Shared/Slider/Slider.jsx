import slider1 from "../../../assets/slider1.jpg"
import slider2 from "../../../assets/slider3.jpg"
import slider3 from "../../../assets/vacation rentals.jpg"
const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                        <h1 className="text-center text-4xl font-bold text-[#69b99d]">Let s hunt for your dream residence</h1>
                        <p className="text-center text-base ">Explore our range of beautiful properties with the addition of separate accommodation suitable for you.</p>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full h-[500px] " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                        <h1 className="text-center text-4xl font-bold text-[#69b99d]">Let s hunt for your dream residence</h1>
                        <p className="text-center text-base ">Explore our range of beautiful properties with the addition of separate accommodation suitable for you.</p>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full h-[500px] " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="w-[600px] mx-auto space-y-3 bg-white p-5 rounded-lg bg-opacity-70">
                        <h1 className="text-center text-4xl font-bold text-[#69b99d]">Let s hunt for your dream residence</h1>
                        <p className="text-center text-base ">Explore our range of beautiful properties with the addition of separate accommodation suitable for you.</p>
                    </div>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;