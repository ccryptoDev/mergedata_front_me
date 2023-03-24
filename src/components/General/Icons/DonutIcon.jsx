const SvgComponent = (props) => (
    <svg
        width={13}
        height={13}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx={6.476}
            cy={6.435}
            r={4.626}
            stroke="url(#a)"
            strokeWidth={2.313}
        />
        <defs>
            <linearGradient
                id="a"
                x1={12.258}
                y1={0.653}
                x2={1.115}
                y2={0.653}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor={props.initialColor} />
                <stop offset={1} stopColor={props.finalColor} />
            </linearGradient>
        </defs>
    </svg>
)

export default SvgComponent