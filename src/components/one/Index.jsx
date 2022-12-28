import { ArrowRightIcon, BeakerIcon, BellIcon, EyeIcon, KeyIcon } from "@heroicons/react/24/solid";

const Index = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

const Header = () => {
    return (
        <section className="w-screen flex h-80 lg:h-[500px] pt-6 pl-4 pr-10 sm:pl-10 sm:pr-32 bg-blend-multiply bg-cover bg-center bg-gray-800 bg-[url('./assets/images/header-bg.png')]">
            <div className="w-1/4 flex items-center relative">
                <div className="text-gray-400 flex flex-col justify-evenly h-4/5 ">
                    <BeakerIcon className="w-4 cursor-pointer hover:text-white" />
                    <BellIcon className="w-4 cursor-pointer hover:text-white" />
                    <EyeIcon className="w-4 cursor-pointer hover:text-white" />
                    <KeyIcon className="w-4 cursor-pointer hover:text-white" />
                </div>
                <span className="text-white text-sm absolute top-0">+1 123-1234-3526</span>
            </div>
            <div className="w-9/12 h-full flex flex-col justify-between items-end">
                <nav className="text-white">
                    <span className="mx-4 text-sm sm:text-base">Home</span>
                    <span className="mx-4 text-sm sm:text-base">About</span>
                    <span className="mx-4 text-sm sm:text-base">Projects</span>
                    <span className="mx-4 text-sm sm:text-base">Blogs</span>
                </nav>
                <span className="text-white text-5xl my-auto pb-5">PROJECTS</span>
            </div>
        </section>
    );
};

const Main = () => {
    const items = [
        {
            image: "https://images.pexels.com/photos/4609732/pexels-photo-4609732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/2873992/pexels-photo-2873992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/7883744/pexels-photo-7883744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/2873992/pexels-photo-2873992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/7883744/pexels-photo-7883744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/2873992/pexels-photo-2873992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/7883744/pexels-photo-7883744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
        {
            image: "https://images.pexels.com/photos/2873992/pexels-photo-2873992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "TOWN HOUSE DESIGN IN CHICAGO",
            type: "Interior",
        },
    ];

    let cards = items.map((item) => (
        <div className="relative overflow-hidden w-1/2 sm:w-1/3 lg:w-1/4  h-[350px] sm:h-[450px] lg:h-[750px]">
            <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="absolute transition-all bg-gray-500 hover:bg-gray-50 duration-1000 hover:scale-110 w-full h-full bg-blend-multiply bg-cover bg-center"
            ></div>
            <div className="absolute text-white font-bold p-5 pr-12">{item.name}</div>
            <div className="absolute text-white tracking-widest bottom-0 pb-10 m-3 -rotate-90">{item.type}</div>
        </div>
    ));
    return <section className="flex flex-wrap">{cards}</section>;
};

const Footer = () => {
    return (
        <section className="w-screen px-8 bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <span className="text-3xl py-16">
                    GET <span className="text-orange-300">IN TOUCH</span>
                </span>
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="flex flex-col w-full pb-12 sm:pb-0 sm:w-1/4 text-gray-400">
                        <span className="h-5 overflow-hidden">+1 234-5232-2353</span>
                        <span className="h-5 overflow-hidden">+1 234-5232-2353</span>
                        <span className="h-5 overflow-hidden">info@gmail.com</span>
                        <span className="h-5 overflow-hidden">USA, New York, Dum Road</span>
                    </div>
                    <form className="relative flex w-full sm:w-9/12">
                        <div className="flex flex-wrap w-1/2">
                            <input
                                className="w-1/2 h-12 border-4 border-gray-900 bg-gray-700 rounded-xl px-4 outline-none focus:bg-gray-600"
                                placeholder="Name"
                                type="text"
                            />
                            <input
                                className="w-1/2 h-12 border-4 border-gray-900 bg-gray-700 rounded-xl px-4 outline-none focus:bg-gray-600"
                                placeholder="Phone"
                                type="number"
                            />
                            <input
                                className="w-1/2 h-12 border-4 border-gray-900 bg-gray-700 rounded-xl px-4 outline-none focus:bg-gray-600"
                                placeholder="Email"
                                type="email"
                            />
                            <input
                                className="w-1/2 h-12 border-4 border-gray-900 bg-gray-700 rounded-xl px-4 outline-none focus:bg-gray-600"
                                placeholder="Title"
                                type="text"
                            />
                        </div>
                        <textarea
                            className="w-1/2 h-24 border-4 border-gray-900 bg-gray-700 rounded-xl px-4 py-2 outline-none focus:bg-gray-600"
                            placeholder="Message"
                        ></textarea>
                        <button className="absolute top-24 right-0 mt-3 w-32 h-12 border-4 border-gray-900 bg-orange-300 rounded-full px-4 outline-none hover:bg-gray-500">
                            <div className="flex justify-center items-center">
                                <span className="text-sm font-bold pr-2">SEND</span>
                                <ArrowRightIcon className="w-5" />
                            </div>
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-baseline py-12 pt-32">
                <span className="font-bold py-4 sm:p-0 text-2xl">go.arch</span>
                <div className="flex flex-col sm:flex-row">
                    <span className="px-0 sm:px-2">Home</span>
                    <span className="px-0 sm:px-2">about</span>
                    <span className="px-0 sm:px-2">blogs</span>
                    <span className="px-0 sm:px-2">project</span>
                </div>
                <span className="text-sm py-4 sm:p-0">@all rights reserved, naqeeburrehman.</span>
            </div>
        </section>
    );
};

export default Index;
