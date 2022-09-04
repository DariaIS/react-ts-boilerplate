import {ExamplePage, Home} from '@pages';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

export const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/example_table" element={<ExamplePage />} />
            </Routes>
        </div>
    );
};
