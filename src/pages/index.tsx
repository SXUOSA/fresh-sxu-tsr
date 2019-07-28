import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouterProps } from '_@types_react-router@5.0.3@@types/react-router';
import HeadNav from './components/headNav';

const IndexPage:React.FC<RouterProps> = props => {
    return (        
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            background: 'url(http://bkzs.sxu.edu.cn/images/2019-07/2697caa07b054378829225ef872196f2.jpg) no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '200% 100%',
            textAlign: 'center'
        }}>
            <div className="mask"></div>
            <div style={{
                position: 'absolute',
                top: '5rem',
                textAlign: 'center',
                zIndex: 1
            }}>
                <img style={{
                    width: '10rem',
                    height: '5rem'
                }} src="http://bkzs.sxu.edu.cn/images/2019-07/25bf5b5aabbd4037857b86811838ec62.png" alt=""/>
            </div>
            <button className={'openHandBook'} onClick={() => {props.history.push('/info')}}>打开手册</button>
        </div>
    )
}

export default withRouter(IndexPage);