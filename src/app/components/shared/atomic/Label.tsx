import InputLabel from '@mui/material/InputLabel';

const Label = ({htmlFor = "", classes = "", content = ""}) => <InputLabel htmlFor={htmlFor} className={classes}>{content}</InputLabel>;

export default Label;
