import Form from "../shared/atomic/Form";
import Buttons from "../shared/atomic/Buttons";
import Input_n_Label from "../shared/molecular/Input_n_Label";

const LoginForm = () => {

    const formElement = <>
        <Input_n_Label
            htmlFor="email"
            labelClass="block font-bold text-gray-700"
            content="Email address"
            type="email"
            placeholder="Enter your email"
            inputClass="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            outerDivClass=""
            isRequired={true}
        />
        <Input_n_Label
            htmlFor="password"
            labelClass="block font-bold text-gray-700"
            content="Password"
            type="password"
            placeholder="Enter your password"
            inputClass="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            outerDivClass=""
            isRequired={true}
        />
        <Buttons
            content="Sign In"
            classes="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            type="submit"
            url = "/"
        />
    </>;
    return <Form
        classes="mt-8 space-y-6"
        content={formElement}
    />;
};

export default LoginForm;