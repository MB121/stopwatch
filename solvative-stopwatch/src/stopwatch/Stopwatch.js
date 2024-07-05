import React from 'react';
import { useStopwatch } from './StopwatchLogic';
import '../css/Stopwatch.css';

function Stopwatch() {
    const {
        time,
        isRunning,
        finalTime,
        startPause,
        stop,
        reset,
        formatTime
    } = useStopwatch();

    return (
        <div className="stopwatch-container">
            <div className="stopwatch">
                <h1>Stopwatch</h1>
                <div className="display">{formatTime(time)}</div>
                <div className="controls">
                    <button className={`btn ${isRunning ? 'running' : ''}`} onClick={startPause}>
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button className="btn" onClick={stop}>Stop</button>
                    <button className="btn" onClick={reset}>Reset</button>
                </div>
                {finalTime !== null && (
                    <div className="final-time">
                        Final Time: {formatTime(finalTime)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Stopwatch;