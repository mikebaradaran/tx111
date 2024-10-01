import React, { useState, useEffect } from 'react';
import './Header.css';
import data from './HeaderData.json';

const Header = () => {
    const [endTime, setEndTime] = useState(0);
    const [remainingTime, setRemainingTime] = useState(0);
    const [displayTimer, setDisplayTimer] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            calculateRemainingTime(endTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    const calculateRemainingTime = (endTime) => {
        const distance = endTime - now();
        setRemainingTime(distance > 0 ? distance : 0);
    };

    const handleSetEndTime = (mins) => {
        setEndTime(now() + mins * 60000);  // mins to milliseconds
        setDisplayTimer(true);
    };

    const now = () => {
        return new Date().getTime();
    };

    function formatSeconds(seconds) {
        seconds /= 1000;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.ceil(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function openSite(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <header>
            <stopWatch>
                {!displayTimer &&
                    <div>
                        <span>Start 9:30</span>
                        <button onClick={() => setDisplayTimer(true)}>Timer</button>
                    </div>
                }
                {displayTimer &&
                    <div>
                        <span>Remaining Time:{formatSeconds(remainingTime)}</span>
                        <div></div>
                        <button onClick={() => handleSetEndTime(15)}>15</button>
                        <button onClick={() => handleSetEndTime(20)}>20</button>
                        <button onClick={() => handleSetEndTime(30)}>30</button>
                        <button onClick={() => handleSetEndTime(60)}>60</button>
                    </div>
                }
            </stopWatch>
            <course onClick={() => openSite(data.material)} title="Click for the course material">
                {data.courseTitle}
            </course>
            <trainer>
                <div>{data.trainer}</div>
                <email>{data.email}</email>
                <button onClick={() => openSite(data.eval)}>E</button>
                <button onClick={() => openSite(data.comments)}>C</button>
            </trainer><br />

        </header>
    );
};

export default Header;
