import { useEffect } from 'react';

export default function Footer({ resource }) {
    const data = resource.read();
    useEffect(() => {
        console.log('Footer effects');
    });
    return <div>{data}</div>;
}
