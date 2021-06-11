import { useEffect } from 'react';

export default function Result({ result }) {
    useEffect(() => {
        console.log('Result effects', result);
    }, [result]);
    return <div>{result}</div>;
}
