import { useState, useRef, useCallback } from 'react';

export const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [finalTime, setFinalTime] = useState(null);
    const intervalRef = useRef(null);

    const startPause = useCallback(() => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - startTime);
            }, 10);
        }
        setIsRunning(!isRunning);
    }, [isRunning, time]);

    const stop = useCallback(() => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
        setFinalTime(time);
    }, [time]);

    const reset = useCallback(() => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
        setFinalTime(null);
    }, []);

    const formatTime = useCallback((t) => {
        const minutes = Math.floor(t / 60000);
        const seconds = Math.floor((t % 60000) / 1000);
        const milliseconds = Math.floor((t % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }, []);

    return {
        time,
        isRunning,
        finalTime,
        startPause,
        stop,
        reset,
        formatTime
    };
};