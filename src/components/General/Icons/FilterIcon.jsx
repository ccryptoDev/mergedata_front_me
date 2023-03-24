const SvgComponent = (props) => (
    <svg
        width={12}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.902 2.833H.667a.5.5 0 1 1 0-1h6.235a1.834 1.834 0 0 1 3.53 0h.901a.5.5 0 1 1 0 1h-.902a1.834 1.834 0 0 1-3.529 0Zm.931-.5a.833.833 0 1 1 1.667 0 .833.833 0 0 1-1.667 0ZM5.098 8.167h6.235a.5.5 0 1 0 0-1H5.098a1.834 1.834 0 0 0-3.529 0H.667a.5.5 0 1 0 0 1h.902a1.834 1.834 0 0 0 3.529 0Zm-2.598-.5a.833.833 0 1 1 1.667 0 .833.833 0 0 1-1.667 0Z"
            fill="#fff"
        />
    </svg>
)

export default SvgComponent