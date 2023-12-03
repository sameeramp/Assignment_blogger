import Typography from '@mui/material/Typography';

const Typographies = ({content = "", classes = "", variant = 1, tag = 'h'}) => {
    let variantString: any = '';
    if(tag === 'h') variantString = `h${variant}`;
    else if(tag === 'body') variantString = `body${variant}`;
    return <Typography variant={variantString} className={classes}>{content}</Typography>;
}

export default Typographies;