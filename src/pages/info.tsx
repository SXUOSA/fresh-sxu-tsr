import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import HeadNav from './components/headNav';
import Content from './components/content';
import HeadInfo from './components/headInfo';
import Doc from '../docs/doc';
import { RouterProps } from '_@types_react-router@5.0.3@@types/react-router';

const markdown = require('markdown').markdown;

interface InfoProps {
    docTitle: string
}

interface docType {
    [index:string]:string
}

const getParamsFromQuery:(query:string, aim:string) => string = (query:string, aim:string) => {
    let result: {[index:string]:string} = {};
    let paramArray = query.split('');
    paramArray.splice(0, 1);
    let paramString = paramArray.join('');
    paramString.split('&').forEach(param => {
        let temp = param.split('=');
        result[temp[0] as string] = temp[1] as string;
    });
    return result[aim];
};

const InfoPage:React.FC<InfoProps & RouterProps> = props => {
    let docs:[string, string][] = Doc[parseInt(getParamsFromQuery(window.location.search, 'index'))]['children'] as unknown as [string, string][];
    docs = (Object.entries(docs) as unknown as [string, string][]);
    const [content, setContent] = useState<string>(markdown.toHTML(docs[0][1]));
    const [selectTab, setSelectTab] = useState<string>(docs[0][0]);
    const [tabs, setTabs] = useState<string[]>(():string[] => {
        return docs.map(doc => {
            return doc[0] as string;
        })
    });

    const findDoc = (tab:string) => {
        for (let i = 0; i < docs.length; i++) {
            if (docs[i][0] === tab) {
                return docs[i][1];
            }
        }
    }

    // window.onscroll = function () {
    //     var t = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (t === 0) {
    //         props.history.push('/menu');
    //     }
    // }

    const headNavClick = (e: React.MouseEvent, tab: string) => {
        setSelectTab(tab);
        setContent(markdown.toHTML(findDoc(tab)));
    };

    const handleNextPage = () => {};

    return (
        <div>
            <HeadInfo imgUrl={"http://bkzs.sxu.edu.cn/images/2019-07/35982080e0bc4df88657e01e05e7c20b.jpg"} title="新生手册"/>
            <HeadNav tabs={tabs}
                     selectedTab={selectTab}
                     onClick={(e:React.MouseEvent, tab:string) => {headNavClick(e, tab)}}/>
            <Content key={selectTab} contentHtml={content} onNextPage={handleNextPage} showNextPage={false} nextPage={"我是下一页"}/>
        </div>
    )
}

export default withRouter(InfoPage as React.FC<RouterProps>);