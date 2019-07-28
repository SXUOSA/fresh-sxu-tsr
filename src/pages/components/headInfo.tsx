import React from 'react';

interface HeadInfo {
    title: string,
    imgUrl: string
}

const HeadInfo:React.FC<Partial<HeadInfo>> = props => {
    return (
        <div style={{
            position: 'relative'
        }}>
            <img src={props.imgUrl} style={{
                width: '10rem',
                height: '4rem'
            }}/>
            <h1 style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                fontSize: '0.5rem',
                color: 'white',
            }}>{props.title}</h1>
        </div>
    );
}

export default HeadInfo;