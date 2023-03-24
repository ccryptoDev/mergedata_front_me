const SvgComponent = (props) => (
    <svg
        width={46}
        height={46}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x={0.5} y={0.5} width={45} height={45} rx={7.5} stroke="#363661" />
        <path
            d="M23 33c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 23 31Zm0-12.95L27.95 23 23 27.95 18.05 23 23 18.05Zm0 2.829L20.879 23 23 25.121 25.121 23 23 20.879Z"
            fill="#6A6A9F"
        />
    </svg>
)

export default SvgComponent