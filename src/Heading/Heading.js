import { useEffect } from 'react';

export default function Heading() {
    useEffect(() => {
        console.log('Heading effects');
    });
    return <div>Add Two Numbers</div>;
}
