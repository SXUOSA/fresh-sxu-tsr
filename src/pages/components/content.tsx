import React from 'react';

interface ContentProps {
    contentHtml: string,
    nextPage: string,
    showNextPage: boolean,
    onNextPage: () => any
}

const Content:React.FC<Partial<ContentProps>> = props => {
    return (
        <div>
            <div className={"fresh-sxu-content"} dangerouslySetInnerHTML={{__html:props.contentHtml?props.contentHtml:"<div></div>"}}></div>
            {props.showNextPage?<button onClick={props.onNextPage}>{props.nextPage}</button>:null}
        </div>
    )
};

export default Content;