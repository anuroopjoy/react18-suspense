import { useEffect } from 'react';

export default function Loader() {
    useEffect(() => {
        console.log('Loader effects');
        return () => {
            console.log('Cleanup Loader effects');
        };
    });
    return <div>Loading...</div>;
}
