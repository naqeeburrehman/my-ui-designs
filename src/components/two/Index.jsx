import {
    BeakerIcon,
    BellIcon,
    EyeIcon,
    KeyIcon,
} from "@heroicons/react/24/solid";

const Index = () => {
    return (
        <div className="h-screen">
            <Header />
            <Main />
        </div>
    );
};

const Header = () => {
    return (
        <section className="absolute w-full z-20 py-4 px-8 text-gray-200 bg-gray-700 flex justify-between ">
            <div className="flex">
                <span className="pr-5 font-semibold text-lg">Website</span>
                <BeakerIcon className="w-4 mx-2 cursor-pointer hover:text-gray-400" />
                <BellIcon className="w-4 mx-2 cursor-pointer hover:text-gray-400" />
                <EyeIcon className="w-4 mx-2 cursor-pointer hover:text-gray-400" />
                <KeyIcon className="w-4 mx-2 cursor-pointer hover:text-gray-400" />
            </div>
            <nav>
                <span className="px-4 cursor-pointer hover:underline">Home</span>
                <span className="px-4 cursor-pointer hover:underline">Projects</span>
                <span className="px-4 cursor-pointer hover:underline">Blog</span>
                <span className="px-4 cursor-pointer hover:underline">Contact</span>
            </nav>
        </section>
    );
};

const Main = () => {
    let backgroundImg =
        "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
        <section className="relative w-full h-full flex">
            <div
                className="absolute w-2/5 h-full blur-md bg-center bg-fixed bg-cover "
                style={{ backgroundImage: `url(${backgroundImg})` }}
            ></div>
            <div
                className="w-2/5 overflow-hidden flex pr-5 pb-20 justify-end items-center font-extrabold drop-shadow-[0_0px_10px_rgba(255,255,255,.5)] text-8xl bg-clip-text text-transparent bg-center bg-fixed bg-cover "
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                Inter
            </div>
            <div className="absolute flex justify-center m-16 p-5 w-1/4 z-20 bottom-0 rounded-lg bg-[rgba(255,255,255,.5)]">
                <div className="font-bold text-4xl text-gray-600">01</div>
                <div className="ml-5">
                    <span className="font-bold text-4xl text-gray-100">DISCOVER TOURS</span>
                    <p className="text-gray-700 my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium dignissimos a
                        inventore repellat.
                    </p>
                    <button className="bg-gray-200 rounded-lg p-2 mt-3 text-gray-700">Read More</button>
                </div>
            </div>
            <div
                className="w-3/5 h-full flex justify-start items-center bg-center bg-fixed bg-cover "
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <span className="text-8xl font-extrabold pl-3 pt-20 text-gray-50 drop-shadow-[0_0px_10px_rgba(0,0,0,.15)]">
                    Galatic
                </span>
                <div className="absolute -right-16 -rotate-90 text-[rgba(255,255,255,.5)] font-semibold text-3xl">
                    ADVENTURES
                </div>
            </div>
        </section>
    );
};

export default Index;
