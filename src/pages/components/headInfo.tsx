import React from 'react';
import { RouterProps } from '_@types_react-router@5.0.3@@types/react-router';
import { withRouter } from 'react-router-dom';

interface HeadInfo {
    title?: string,
    imgUrl?: string
}

const HeadInfo:React.FC<any> = props => {
    return (
        <div style={{
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '30px',
                left: '20px',
                fontSize: '10px',
                color: 'white'
            }}  onClick={() => {
                props.history.push('/menu')
            }}>{ `< 返回主菜单` }</div>
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

export default withRouter(HeadInfo);