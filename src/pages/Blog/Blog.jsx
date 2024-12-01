import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/single-family homes.jpg"
import blog3 from "../../assets/blog3.webp"
import { Helmet } from "react-helmet";
const Blog = () => {
    return (
        <div>
            <Helmet>
                <title> Residence | Blog</title>
            </Helmet>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={blog1} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Legal Requirements for Airbnb in the UK</h3>
                            <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                            <p>Putting your house on Airbnb can be lucrative, but you should remember that every host is bound by UK laws and local rules that apply to short-term rentals. Legal requirements for Airbnb in the UK vary; some regions are stricter than others.

                                That’s why it’s crucial to understand how Airbnb regulations work in your UK city before renting out any space to guests on a short-term basis. Remember to follow the laws and other rules that apply to your specific circumstances and locale.</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog3} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Is There a Best Time to Retire? Factors To Consider</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p>The average age of retirement in the United States is 61, which is up from 57 in 1991. But averages don’t define your own life. There’s no universal right time to retire, and for some people, retirement is never in the cards.

                                    Many residents in HumanGood Life Plan Communities choose to work part time. Others take on consulting work, turn a hobby into a small business or even build a second career. Retirement doesn’t have to mean stopping and can mean vastly different things to different people.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog2} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">A Comprehensive Guide for American Homebuyers</h3>
                                <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                                <p>A single-family house is an independent unit on its own lot. It offers its residents privacy, as they don’t share walls, roofs, or living spaces with neighbors. The median price of single-family homes was $412,300 in July 2023, up by 1.6% year-over-year. As a prospective homebuyer, understanding the nuances of this housing option is key to helping you make informed decisions.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog3} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Is There a Best Time to Retire? Factors To Consider</h3>
                                <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                <p>The average age of retirement in the United States is 61, which is up from 57 in 1991. But averages don’t define your own life. There’s no universal right time to retire, and for some people, retirement is never in the cards.

                                    Many residents in HumanGood Life Plan Communities choose to work part time. Others take on consulting work, turn a hobby into a small business or even build a second career. Retirement doesn’t have to mean stopping and can mean vastly different things to different people.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;