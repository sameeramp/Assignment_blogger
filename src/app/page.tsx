import Typographies from "./components/shared/atomic/Typographies";
// import Grid_MUI from "../components/shared/molecular/Grid_MUI"
// import Blog_Card from "../components/shared/molecular/Blog_Card";
import Div from "./components/shared/atomic/Div";
import Buttons from "./components/shared/atomic/Buttons";
import Home_Card from "./components/shared/molecular/Home_Card";

const Home = () => {

    const heading = <>
        <Typographies
            content="27 Best About Us and About Me Page"
            classes=""
            variant={4}
            tag='h'
        />
        &nbsp; &nbsp;
        <Typographies
            content="Examples of 2023[+Templates]"
            classes=""
            variant={4}
            tag='h'
        />
        <Buttons
        content="Download New Free About Us Examples"
        classes="w-1/4 mt-2 px-4 py-3 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-indigo focus:border-orange-700"
        />
    </>;

    return (<>
        <Div 
        classes="p-10 m-10 pb-0 mb-0 flex flex-col"
        content={heading}/>
        <Div
        classes="flex flex-col justify-center items-center h-screen"
        content={<Home_Card />} />
    </>)
}

export default Home;