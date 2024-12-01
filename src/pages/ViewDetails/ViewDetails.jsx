import { Helmet } from "react-helmet";
import {useLoaderData, useParams} from "react-router-dom";

const ViewDetails = () => {
    const cards = useLoaderData()
    // console.log(cards)
    const {id} = useParams()
    // console.log(id)
    const intId = parseInt(id)
    // console.log(intId)
    const card = cards.find(card => card.id === intId)
    // console.log(card)
    const {image, description, segment_name, estate_title, price, status, area, facilities, location} = card

    return (
        <div className="container mx-auto">
            <Helmet>
                <title> Residence | View Details</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col justify-center items-center border-2 rounded-lg lg:w-[1140px] mx-auto my-10">
                <div className="lg:w-[500px] p-5">
                    <img src={image} alt="" />
                </div>
                <div className="lg:w-[600px] p-5">
                    <p> <span className="text-base font-semibold">Description:</span> {description}</p>
                    <div className=" my-2 lg:flex justify-between items-center">
                        <div className="flex lg:justify-center items-start">
                            <h4 className="text-base font-semibold">Segment Name:</h4>
                            <p>{segment_name}</p>
                        </div>
                        <div className="flex lg:justify-center items-start">
                            <h4 className="text-base font-semibold">Estate Title:</h4>
                            <p>{estate_title}</p>
                        </div>
                    </div>
                    <div className=" my-2 lg:flex lg:justify-between items-center">
                        <div className="flex lg:justify-center items-center">
                            <h4 className="text-base font-semibold">Price:</h4>
                            <p>{price}</p>
                        </div>
                        <div className="flex lg:justify-center items-center">
                            <h4 className="text-base font-semibold">Status:</h4>
                            <p>{status}</p>
                        </div>
                    </div>
                    <div className=" my-2 lg:flex justify-between items-start">
                        <div className="flex lg:justify-center items-start">
                            <h4 className="text-base font-semibold">Area:</h4>
                            <p>{area}</p>
                        </div>
                        <div className="lg:flex lg:justify-center lg:items-start gap-2 ">
                            <h4 className="text-base font-semibold">Facilities:</h4>
                            <p> #{facilities[0]} </p>
                            <p> #{facilities[1]} </p>
                            <p> #{facilities[2]} </p>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <h4 className="text-base font-semibold">Location:</h4>
                        <p>{location}</p>
                    </div>
                    <div className="my-5">
                        <button className="btn w-[150px] bg-[#69b99d] text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;