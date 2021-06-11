import React from 'react';
import './App.css';
import Heading from './Heading/Heading';
// import Loader from './Loader/Loader';
import Footer from './Footer/Footer';
import CalcErrorBoundary from './CalcErrorBoundary';
import { getFooterData } from './utils';

const Calc = React.lazy(() => import('./Calc'));
const resource = getFooterData();

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CalcErrorBoundary>
                    {/* <React.Suspense fallback={<Loader />}>
                        <Heading></Heading>
                        <Calc></Calc>
                        <Footer></Footer>
                    </React.Suspense> */}
                    <React.SuspenseList revealOrder="forwards" tail="collapsed">
                        <Heading></Heading>
                        <React.Suspense
                            fallback={<div>Loading Calculator...</div>}
                        >
                            <Calc></Calc>
                        </React.Suspense>
                        <React.Suspense fallback={<div>Loading Footer...</div>}>
                            <Footer resource={resource}></Footer>
                        </React.Suspense>
                    </React.SuspenseList>
                </CalcErrorBoundary>
            </header>
        </div>
    );
}

export default App;
