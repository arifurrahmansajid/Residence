import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content container mx-auto">
            <aside>
                <div className="mb-2">
                    <h2 className="text-2xl font-bold text-[#69b99d]"> Residence</h2>
                    <p className="text-base text-black">We have built our reputation as true local area experts.</p>
                </div>
                <div>
                    <h6 className="text-base font-semibold text-black">Newsletter</h6>
                    <fieldset className="form-control lg:w-80 w-60 mt-2">
                        <div className="join">
                            <input type="text" placeholder="Enter your email" className="input input-bordered join-item" />
                            <button className="btn bg-[#69b99d] text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </aside>
            <nav>
                <h6 className="text-base font-semibold text-black">Services</h6>
                <a className="link link-hover text-base">About us</a>
                <a className="link link-hover text-base">Careers</a>
                <a className="link link-hover text-base">Terms & Conditions</a>
                <a className="link link-hover text-base">Privacy & Policy</a>
            </nav>
            <nav>
                <h6 className="text-base font-semibold text-black">Community</h6>
                <a className="link link-hover text-base">Find agents</a>
                <a className="link link-hover text-base">Lifestyle</a>
                <a className="link link-hover text-base">Legal notic</a>
                <a className="link link-hover text-base">Press kit</a>
            </nav>
            <nav>
                <h6 className="text-base font-semibold text-black">Follow us on</h6>
                <div className="flex justify-between items-center gap-3">
                    <FaFacebook className="text-2xl mr-2 text-[#69b99d]"></FaFacebook>
                    <FaInstagram className="text-2xl mr-2 text-[#69b99d]"></FaInstagram>
                    <FaTwitter className="text-2xl mr-2 text-[#69b99d]"></FaTwitter>
                    <FaYoutube className="text-2xl mr-2 text-[#69b99d]"></FaYoutube>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
