import React from 'react';

interface headNavProps {
    tabs: string[],
    selectedTab: string,
    onClick: (e:React.MouseEvent, tab:string) => void;
}

const HeadNav:React.FC<Partial<headNavProps>> = props => {
    const handleClick = (e:React.MouseEvent, tab:string) => {
        if (props && props.onClick) {
            props.onClick(e, tab);
        }
    };

    return (
        <div className={"fresh-sxu-headNav"}>
            <div style={{width: '100%', height: '120%'}}>
            {
                props.tabs?
                props.tabs.map(tab => {
                    if (tab === props.selectedTab) {
                        return <button id={"selectedTab"}
                                       style = {{
                                        //    width: props.tabs?`${(100 / props.tabs.length)}%`:'30%',
                                           fontSize: '0.35rem',
                                           lineHeight: '30px'
                                       }}
                                       onClick={e => handleClick(e, tab)}>{tab}</button>;
                    }
                    return <button onClick={e => handleClick(e, tab)}
                                   style = {{
                                       width: props.tabs?`${100 / props.tabs.length}%`:'30%',
                                       fontSize: '0.3rem',
                                       lineHeight: '30px'
                                   }}>{tab}</button>;
                }):
                null
            }
            </div>
        </div>
    )
}

export default HeadNav;