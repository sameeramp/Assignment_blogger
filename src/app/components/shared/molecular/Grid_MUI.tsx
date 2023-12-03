import { Grid } from "@mui/material"

const Grid_MUI = ({xs = 12, md= 3, sm = 6, content = <></>}) => {

    return <Grid xs={xs} md={md} sm={sm} item >{content}</Grid>
};

export default Grid_MUI;
