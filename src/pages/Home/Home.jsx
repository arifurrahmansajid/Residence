import { FaHeart, FaMoneyBill, FaStar } from "react-icons/fa";
import picture from "../../assets/slider1.jpg"
import user from "../../assets/user.png"
import { FaMapLocation, FaShield } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import Slider from "../Shared/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    const cards = useLoaderData()
    // console.log(cards)
    return (
        <div className="container mx-auto">
            <Helmet>
                <title> Residence | Home</title>
            </Helmet>
            <div className="">
                <Slider></Slider>
            </div>

            {/* Estate Section: */}
            <div className="my-10 p-5">
                <div data-aos="zoom-in" className="lg:w-[600px] mx-auto space-y-2">
                    <h2 className="text-3xl font-semibold text-center text-black">Best recomendation</h2>
                    <p className="text-base font-medium text-center">Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.</p>
                </div>

                <div data-aos="fade-down-right" data-aos-duration="400" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[1240px] mx-auto mt-5">
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>

            {/* optinal section  */}
            <div className="my-10 bg-[#f5f5f5]">
                <div className="p-5">
                    <div data-aos="zoom-in" className="lg:w-[600px] mx-auto space-y-2">
                        <h2 className="text-3xl font-semibold text-center text-black">Giving you peace of mind</h2>
                        <p className="text-base font-medium text-center">Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.</p>
                    </div>

                    <div data-aos="fade-down-left" data-aos-delay="0" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[1140px] mx-auto mt-5">
                        <div className="ml-2">
                            <div className="w-[300px] h-[250px] mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <FaHeart className="text-2xl text-[#69b99d]"></FaHeart>
                                    <h4 className="text-base font-semibold">Comfortable</h4>
                                </div>
                                <p className="text-base font-medium">Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stones throw away from schools, churches, and hospitals.</p>
                            </div>
                        </div>

                        <div className="ml-2">
                            <div className="w-[300px] h-[250px]  mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <FaShield className="text-2xl text-[#69b99d]"></FaShield>
                                    <h4 className="text-base font-semibold">Extra security</h4>
                                </div>
                                <p className="text-base font-medium">You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.</p>
                            </div>
                        </div>

                        <div className="ml-2">
                            <div className="w-[300px] h-[250px]  mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <FaStar className="text-2xl text-[#69b99d]"></FaStar>
                                    <h4 className="text-base font-semibold">Luxury</h4>
                                </div>
                                <p className="text-base font-medium">Find out how we provide the highest standard of professional property management to give you all the benefits of property.</p>
                            </div>
                        </div>

                        <div className="ml-2">
                            <div className="w-[300px] h-[250px]  mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <FaMoneyBill className="text-2xl text-[#69b99d]"></FaMoneyBill>
                                    <h4 className="text-base font-semibold">Best price</h4>
                                </div>
                                <p className="text-base font-medium">Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.</p>
                            </div>
                        </div>

                        <div className="ml-2">
                            <div className="w-[300px] h-[250px]  mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <FaMapLocation className="text-2xl text-[#69b99d]"></FaMapLocation>
                                    <h4 className="text-base font-semibold">Strategic location</h4>
                                </div>
                                <p className="text-base font-medium">located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.</p>
                            </div>
                        </div>

                        <div className="ml-2">
                            <div className="w-[300px] h-[250px]  mx-auto border-2 p-5 space-y-3 rounded-lg">
                                <div>
                                    <IoPlanet className="text-2xl text-[#69b99d]"></IoPlanet>
                                    <h4 className="text-base font-semibold">Efficient</h4>
                                </div>
                                <p className="text-base font-medium">Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* optinal section  */}
            <div className="my-10">
                <div data-aos="fade-down-right" data-aos-duration="400" className="flex lg:flex-row flex-col justify-between items-center gap-5 lg:w-[1140px] mx-auto">
                    <div>
                        <img className="p-5" src={picture} alt="" />
                    </div>
                    <div className="p-5 space-y-5">
                        <h2 className="text-2xl font-semibold">How much is your property worth now?</h2>
                        <p className="text-base font-medium">We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.</p>
                        <button className="btn w-[150px] bg-[#69b99d] text-white">Learn More</button>
                    </div>
                </div>
            </div>

            {/* optional section  */}
            <div className="my-10">
                <div className="p-5">
                    <div data-aos="zoom-in" className="lg:w-[600px] mx-auto space-y-2">
                        <h2 className="text-3xl font-semibold text-center text-black">Peopel say about us?</h2>
                        <p className="text-base font-medium text-center">Discover our exclusive selection of the finest one-of-a-kind luxury properties architectural masterpieces.</p>
                    </div>

                    <div data-aos="fade-down-left" data-aos-duration="400" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:w-[1140px] mx-auto mt-5">
                        <div className="border-2 lg:w-[370px] h-250px] p-5 space-y-3 rounded-lg">
                            <h4 className="text-[20px] font-semibold">It proved to be exactly the kind of home we wanted.</h4>
                            <p className="text-base font-medium">We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.</p>
                            <hr />
                            <div className="p-2 space-y-2">
                                <img className="w-[45px] mx-auto" src={user} alt="abc" />
                                <h5 className=" text-base font-semibold text-center">Jaydon Aminoff</h5>
                            </div>
                        </div>

                        <div className="border-2 lg:w-[370px] h-250px] p-5 space-y-3 rounded-lg">
                            <h4 className="text-[20px] font-semibold">Nobody knows Portland and the peninsula better than David.</h4>
                            <p className="text-base font-medium">My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland.</p>
                            <hr />
                            <div className="p-2 space-y-2">
                                <img className="w-[45px] mx-auto" src={user} alt="abc" />
                                <h5 className=" text-base font-semibold text-center">Alfredo Donin</h5>
                            </div>
                        </div>

                        <div className="border-2 lg:w-[370px] h-250px] p-5 space-y-3 rounded-lg">
                            <h4 className="text-[20px] font-semibold">He keeps his client’s best interests in sharp focus</h4>
                            <p className="text-base font-medium">After working with David to sell my home in 2013, I was convinced that he’s the only realtor I’ll ever need. Since then, I’ve bought two properties and sold one.</p>
                            <hr />
                            <div className="p-2 space-y-2">
                                <img className="w-[45px] mx-auto" src={user} alt="abc" />
                                <h5 className=" text-base font-semibold text-center">Makenna Korsgaard</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;