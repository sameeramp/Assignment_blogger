import LoginForm from '../components/auth/LoginForm';
import Div from '../components/shared/atomic/Div';
import Typographies from '../components/shared/atomic/Typographies';

const Login = () => {
    const typographElement = <>
        <Typographies
            classes="text-2xl font-bold"
            content="Welcome back!"
            variant={1}
            tag="h"
        />
        <Typographies
            classes="mt-2 text-gray-600"
            content="Please sign in to your account."
            tag="body"
        />
    </>;

    const coreElement = <>
        <Div content={typographElement} />
        <LoginForm /></>;

    const outerCoreElement = <Div
        content={coreElement}
        classes='w-full max-w-md space-y-8'
    />;

    const formElement = <>
        <Div
            classes='flex items-center justify-center w-full md:w-1/2'
            content={<img src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-cartoon-business-man-is-pointing-at-something-image_2603683.jpg" alt="Login Image" width={800} height={600} />}
        />
        <Div
            classes="flex flex-col items-center justify-center w-full md:w-1/4"
            content={outerCoreElement} />
    </>;

    return (<Div
        classes='flex flex-col items-center md:flex-row md:h-screen'
        content={formElement} />)
};

export default Login;