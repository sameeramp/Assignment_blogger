'use client'
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
const Buttons = (props: any) => {
    const router = useRouter();
    return (<Button className={props?.classes} type={props?.type} onClick={() => {
        if (props.url === "/") router.push('/');
    }}>{props?.content}</Button>);
}

export default Buttons;