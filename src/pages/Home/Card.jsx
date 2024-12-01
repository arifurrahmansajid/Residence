import { Link } from "react-router-dom";

const Card = ({card}) => {
    // console.log(card)
    const {image, estate_title, description, price, area, id} = card
    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg p-2 ml-2 mr-2">
            <img className="w-[345px] h-[240px] mx-auto" src={image} alt="{estate_title}" />
            <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">{estate_title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="my-2 ">
                    <hr />
                </div>
                <div className="my-2 flex justify-between items-center">
                    <p className="text-gray-700 text-base"><span className="text-base font-semibold">Price:</span> {price}</p>
                    <p className="text-gray-700 text-base"><span className="text-base font-semibold">Area:</span> {area}</p>
                </div>
               
            </div>
         
            <div className="px-6 py-4">
                <button className="bg-[#69b99d] text-white font-bold py-2 px-4 rounded-lg w-full">
                    <Link to={`/viewdetails/${id}`}>View Property</Link>
                </button>
            </div>
        </div>
    );
};

export default Card;