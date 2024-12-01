import { Helmet } from "react-helmet";
import picture from "../../assets/slider3.jpg"
const About = () => {
    return (
        <div>
            <Helmet>
                <title> Residence | About</title>
            </Helmet>
            {/* optinal section  */}
            <div className="my-10">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-5 lg:w-[1140px] mx-auto">
                    <div>
                        <img className="p-5" src={picture} alt="" />
                    </div>
                    <div className="p-5 space-y-5">
                        <h2 className="text-2xl font-semibold">How much is your property worth now?</h2>
                        <p className="text-base font-medium">We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people.</p>
                        <button className="btn w-[150px] bg-[#69b99d] text-white">Learn More</button>
                    </div>
                </div>
                <div className="lg:w-[1140px] mx-auto">
                    <p className="text-base font-medium">Perched atop the bustling cityscape, the Skyline Residence stands as an emblem of modern luxury and urban sophistication. Its sleek, glass façade reflects the vibrant energy of the metropolis below, while offering panoramic views that stretch as far as the eye can see.

                        Upon entering the Skyline Residence, residents and guests are greeted by a grand lobby adorned with contemporary art pieces and exquisite furnishings. The ambiance exudes a sense of elegance and refinement, setting the tone for the luxurious living experience that awaits within.

                        Each residence within the Skyline boasts meticulous attention to detail and impeccable craftsmanship. Spacious floor plans are designed to maximize comfort and functionality, with floor-to-ceiling windows that flood the interiors with natural light and frame breathtaking vistas of the city skyline.

                        The gourmet kitchens feature top-of-the-line appliances, custom cabinetry, and sleek countertops, making them ideal for both casual meals and lavish entertaining. Luxurious bathrooms are appointed with indulgent fixtures and spa-like amenities, offering a sanctuary for relaxation and rejuvenation.

                        Residents of the Skyline Residence enjoy a wealth of amenities designed to enhance their lifestyle. A state-of-the-art fitness center, shimmering rooftop pool, and meticulously landscaped gardens provide ample opportunities for recreation and leisure. Additionally, dedicated concierge services cater to every need, ensuring that residents experience unparalleled convenience and comfort.

                        Located in the heart of the city, the Skyline Residence offers unparalleled access to world-class dining, shopping, and entertainment options. Whether exploring the vibrant neighborhood or retreating to the serenity of their private oasis in the sky, residents of the Skyline Residence enjoy the epitome of urban living.

                        Experience luxury living redefined at the Skyline Residence, where every moment is elevated to new heights.</p>
                </div>
            </div>
        </div>
    );
};

export default About;