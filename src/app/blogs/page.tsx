import { Grid } from "@mui/material"
import Typographies from "../components/shared/atomic/Typographies"
import Grid_MUI from "../components/shared/molecular/Grid_MUI"
import Blog_Card from "../components/shared/molecular/Blog_Card";
import Div from "../components/shared/atomic/Div";

const Blogs = () => {

    const heading = <>
        <Typographies
            content="Website "
            classes=""
            variant={3}
            tag='h'
        />
        &nbsp; &nbsp;
        <Typographies
            content=" Tips and tutorials on how to build better websites"
            classes=""
            variant={1}
            tag='body'
        />
    </>;

    return (<>
        <Div 
        classes="p-10 m-10 pb-0 mb-0 flex flex-top items-end"
        content={heading}/>
        <Div
        classes="flex flex-col justify-center items-center h-screen"
        content={<Blog_Card />} />
    </>)
}

export default Blogs;