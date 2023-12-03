import Input from '@mui/material/Input';

const Inputs = ({type = "text", placeholder = "", classes = "", isRequired = true}) => <Input className={classes} type={type} placeholder={placeholder} required={isRequired} />;

export default Inputs;
