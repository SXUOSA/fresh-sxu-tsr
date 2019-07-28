import React, { useEffect, useState } from 'react';
import HeadNav from './components/headNav';

const InfoPage:React.FC = () => {
    const [content, setContent] = useState<string>("");
    const headNavClick = (e: React.MouseEvent, tab: string) => {
        
    };
    return (
        <div>
            <HeadNav tabs={["第一个tab", 
                            "第二个tab"]}
                     onClick={(e:React.MouseEvent, tab:string) => {headNavClick(e, tab)}}/>
        </div>
    )
}

export default InfoPage;