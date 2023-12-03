import { Grid } from "@mui/material"
import Typographies from "../components/shared/atomic/Typographies"
import Grid_MUI from "../components/shared/molecular/Grid_MUI"
import Div from "../components/shared/atomic/Div";

const Gallery = () => {
    const images = [
        <img src="https://avatars.slack-edge.com/2019-10-17/799445522021_b2716c68b9c18f09dad6_512.png" alt="Login img" className="p-2" style={{ width: '100%', height: "500px" }}/>,
        <img src="https://www.shutterstock.com/shutterstock/photos/286753385/display_1500/stock-vector-vintage-retro-cool-dude-man-face-head-wearing-aviator-sunglasses-rockabilly-pompadour-haircut-vector-286753385.jpg" className="p-2"  style={{ width: '100%', height: "500px" }} alt="Login img"/>,
        <img src="https://in.boredgamecompany.com/wp-content/uploads/2020/12/pic4214871.png" style={{ width: '100%', height: "500px" }} alt="Login img" />,
        <img src="https://yt3.googleusercontent.com/gZQ6NuAnh_HfkR2l1RKamqmwVs1kTA6sVZ4xnmID3tIM3kLxz8I1DOvZadqkjQXrYwg8To0R=s900-c-k-c0x00ffffff-no-rj" className="p-2"  style={{ width: '100%', height: "500px" }} alt="Login img" />,
        <img src="https://cdn.shopify.com/s/files/1/0745/0975/files/DUDE-LOGO-_Color_-Black-BG_-Square-_1001-x-1001-px.png?v=1494708577" className="p-2" style={{ width: '100%', height: "500px" }} alt="Login img" />,
        <img src="https://cdn5.vectorstock.com/i/1000x1000/45/34/dude-bearded-man-vector-5934534.jpg" className="p-2" style={{ width: '100%', height: "500px" }} alt="Login img" />,
        <img src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/25/19/25-19-101L/Dude-Florent-Bodart-Poster.jpg" className="p-2" style={{ width: '100%', height: "500px" }} alt="Login img" />,
        <img src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/133/5/133-5-101P/The-Dude-Bruno-Morphet-Poster.jpg" className="p-2" style={{ width: '100%', height: "500px" }} alt="Login img" />
    ];

    const gridElement = <Grid container spacing={2}>        
    {images.map((img) => <Grid_MUI xs={12} md={3} sm={6} content={img}/>)}
    </Grid>;

    return (<>
    <Typographies 
        content = "Find the perfect Logo for Dude" 
        classes = "p-10" 
        variant = {3}
        tag = 'h'
    />
    <Div 
    classes="p-10 m-10"
    content={gridElement}/>
    </>)
}

export default Gallery;