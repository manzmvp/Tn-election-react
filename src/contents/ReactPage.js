import React, { useState } from 'react';
import MapChart from '../components/MapChart';
import ReactTooltip from "react-tooltip";


function ReactPage() {
    const [content, setContent] = useState("");
    return(
        <div>
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
        
        
    );
}

export default ReactPage;