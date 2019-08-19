import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouterProps } from '_@types_react-router@5.0.3@@types/react-router';
import Doc from '../docs/doc';

interface Doc {
    title: string | number,
    imgUrl: string,
    children: {}
}

const Menu:React.FC<RouterProps> = props => {
    const handleClick = (e:React.MouseEvent, index:number) => {
        props.history.push(`/info?index=${index}`);
    };

    return (
        <>
            <div className={'fresh-sxu-menu-wrap'}>
                {/* <h1 style={{textAlign:'center'}}>导 航</h1> */}
                <ul>
                    {
                        Doc.map((doc: Doc, index: number) => {
                            return <li onClick={e => handleClick(e, index)}>{doc.title}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
};

export default withRouter(Menu);