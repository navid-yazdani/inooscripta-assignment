const ArrowDown = ({color = "#000"}: { color?: string }) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
            <path fill={color}
                  d="M9.293 12.95l0.707 0.707 5.657-5.657-1.414-1.414-4.243 4.242-4.243-4.242-1.414 1.414z"></path>
        </svg>
    );
}

export default ArrowDown;
