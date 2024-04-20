import {useEffect, useState} from "react";

export default function useScrollTrigger(value: number) {
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        setTrigger(document.documentElement.scrollTop > value);
        const handleScroll = () => {
            setTrigger(document.documentElement.scrollTop > value);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [value]);
    return trigger;
}
