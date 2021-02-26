import React, {useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


import './PeopleDesc.css';

const PeopleDesc = (props) => {
    var htmllng = props.descExt;
    const htmlsht = props.desc;
    const [readMore,setReadMore]=useState(false);
    const content = 
    <div>
        <h2>{props.name}</h2>
        <h3>{ReactHtmlParser(htmlsht)}</h3>
    </div>
    const extraContent=
    <div>
        <h2>{props.name}</h2>
        <h3>
            {ReactHtmlParser(htmllng)}
        </h3>
    </div>
    const linkName=readMore?<FiChevronUp />:<FiChevronDown />;
    var isFading;
    if(htmllng === null){
        isFading = "desc-nofade";
    }else {
        isFading = readMore?"desc-nofade":"desc-fade";
    }
    return (
        <div className="desc-holder">
            <div className={isFading}>
                {!readMore && content}
                {readMore && extraContent}
            </div>
            <div className="spacing"></div>
            {htmllng != null && <a className="expand-retract" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>}
        </div>
    );
}

export default PeopleDesc;