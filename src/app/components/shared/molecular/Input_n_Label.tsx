import Label from '../atomic/Label';
import Inputs from '../atomic/Inputs';
import Div from '../atomic/Div';


const Input_n_Label = ({htmlFor = "", inputClass = "", labelClass = "", outerDivClass = "", content = "", placeholder = "", type = "", isRequired = true}) => {
    const input = <>
        <Label 
        htmlFor={htmlFor}
        classes={labelClass}
        content={content} />
        <Inputs 
        placeholder={placeholder}
        isRequired={isRequired}
        type={type}
        classes={inputClass}/>
    </>;
    return <Div content={input} classes={outerDivClass} />;
};

export default Input_n_Label;
