import { useState, useEffect } from 'react';

const Clock = () => {
    const dateIni = new Date();
    const [date, setDate] = useState(dateIni);
    useEffect(() => {
        const interval = setInterval(() => {
            const time = date.getTime();
            setDate(new Date(time));
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [date]);

    return (
        <h1>{dateIni.toLocaleTimeString()}</h1>
    );
}

export default Clock;