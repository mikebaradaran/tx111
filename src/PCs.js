import React, { useState, useEffect } from 'react';
import data from './PCs.json';
import "./PCs.css"

const PCs = () => {
    const [endTime, setEndTime] = useState(0);

    function openSite(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
        console.log(url);
    }

    function openPC(index) {
        openSite(data.pcs[index]);
    }

    let names = data.students.map((name, index) =>
        <div onClick={() => openPC(index)} key={index}>
            {index + 1}-{name.split(",")[0]}
        </div>
    );

    return (
        <>
            <passwords>
                <span>email:</span><input type="text" value={data.passwords[0]} />
                <span>pass1:</span><input type="text" value={data.passwords[1]} />
                <span>pass2:</span><input type="text" value={data.passwords[2]} />
            </passwords>
            <content>
                <pcs>{names}</pcs>
            </content>
        </>
    );
};

export default PCs;
