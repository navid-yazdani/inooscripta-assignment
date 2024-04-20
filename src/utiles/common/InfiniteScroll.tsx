import React, { useEffect, useRef } from "react";

interface InfiniteScrollInterface {
    wrapper?: React.ElementType;
    children: React.ReactNode;
    hasMore: boolean;
    next: () => void;
    loader?: React.ReactNode;
}

const InfiniteScroll = (infiniteScrollProps: InfiniteScrollInterface) => {
    const {
        wrapper: Wrapper = "div",
        children,
        hasMore,
        loader = null,
        next,
    } = infiniteScrollProps;
    const prevScroll = useRef(0);

    useEffect(() => {
        window.addEventListener("scroll", handleLoad);
        window.addEventListener("resize", handleLoad);
        return () => {
            window.removeEventListener("scroll", handleLoad);
            window.removeEventListener("resize", handleLoad);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLoad = () => {
        const docScrollTop = document.documentElement.scrollTop;
        const docClientHeight = document.documentElement.clientHeight;
        const docScrollHeight = document.documentElement.scrollHeight;
        const docSum = docScrollTop + docClientHeight;
        if (
            docSum + 1 > docScrollHeight &&
            hasMore &&
            prevScroll.current + 150 < docSum
        ) {
            prevScroll.current = docSum;
            next();
        }
    };

    return (
        <Wrapper>
            {children}
            {hasMore && loader}
        </Wrapper>
    );
};

export default InfiniteScroll;