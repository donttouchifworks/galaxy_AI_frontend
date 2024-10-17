export const Logo = () => {
    return (
        <>
            <svg width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.35584" cy="3.35593" r="3.35593" fill="url(#paint0_linear_1_17)"/>
                <path
                    d="M49.2203 23.4915C49.2203 34.818 40.0383 44 28.7118 44C17.3853 44 8.20331 34.818 8.20331 23.4915C8.20331 12.165 17.3853 2.98305 28.7118 2.98305C40.0383 2.98305 49.2203 12.165 49.2203 23.4915Z"
                    fill="url(#paint1_radial_1_17)">
                </path>
                <circle
                    cx="23"
                    cy="25.5"
                    r="20"
                    fill="#050404">
                    {/*<animate*/}
                    {/*    attributeName="cx"*/}
                    {/*    values="10; 23"*/}
                    {/*    dur="5s"*/}
                    {/*    repeatCount="1"*/}
                    {/*></animate>*/}
                    <circle
                        cx="23"
                        cy="25.5"
                        r="20"
                        stroke="#ffffff"
                    >
                    </circle>
                </circle>
                {/*<path*/}
                {/*    d="M39.5 30.5C39.5 39.3226 32.1269 46.5 23 46.5C13.8731 46.5 6.5 39.3226 6.5 30.5C6.5 21.6774 13.8731 14.5 23 14.5C32.1269 14.5 39.5 21.6774 39.5 30.5Z"*/}
                {/*    stroke="url(#paint2_linear_1_17)" strokeOpacity="0.4"/>*/}
                <defs>
                    <linearGradient id="paint0_linear_1_17" x1="3.35584" y1="0" x2="3.35584" y2="6.71186"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.71875" stopColor="white" stopOpacity="0.8"/>
                    </linearGradient>
                    <radialGradient id="paint1_radial_1_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(20 35.5) rotate(-43.078) scale(52.7091 47.8459)">
                        <stop offset="0.5"/>
                        <stop offset="0.628125" stopColor="white" stopOpacity="0.8"/>
                    </radialGradient>
                    <linearGradient id="paint2_linear_1_17" x1="17" y1="34.5" x2="41.1395" y2="17.0026"
                                    gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="1" stopColor="white" stopOpacity="0.49"/>
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}