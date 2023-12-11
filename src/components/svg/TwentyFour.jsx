import React from 'react';

function TwentyFour({ color, width, height }) {
    return (
        <svg
            width={width || '30px'}
            height={height || '30px'}
            fill={color || '#757779'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M12.0049 13.0029C13.6617 13.0029 15.0049 14.3461 15.0049 16.0029C15.0049 16.8521 14.6521 17.6188 14.0851 18.1646L12.175 20.0025L15.0049 20.0029V22.0029H9.00488L9.00398 20.2785L12.6983 16.7235C12.8874 16.5413 13.0049 16.2858 13.0049 16.0029C13.0049 15.4506 12.5572 15.0029 12.0049 15.0029C11.4526 15.0029 11.0049 15.4506 11.0049 16.0029H9.00488C9.00488 14.3461 10.348 13.0029 12.0049 13.0029ZM18.0049 13.0029V17.0029H20.0049V13.0029H22.0049V22.0029H20.0049V19.0029H16.0049V13.0029H18.0049ZM4.00488 12.0029C4.00488 14.5295 5.17612 16.7825 7.00527 18.2486L7.0049 20.6651C4.01588 18.9361 2.00488 15.7043 2.00488 12.0029H4.00488ZM12.0049 2.00293C17.1902 2.00293 21.4537 5.94955 21.9555 11.0028L19.943 11.003C19.4509 7.05664 16.0845 4.00293 12.0049 4.00293C9.2551 4.00293 6.82935 5.39027 5.3894 7.50317L8.00488 7.50293V9.50293H2.00488V3.50293H4.00488L4.00477 6.00211C5.82922 3.57368 8.73362 2.00293 12.0049 2.00293Z"
            ></path>
        </svg>
    );
}

export default TwentyFour;