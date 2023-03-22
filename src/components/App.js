import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../routes/Main';
import Plays from '../routes/Plays';
import Studys from '../routes/Studys';
import Minds from '../routes/Minds';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/plays`}
                    element={<Plays />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/studys`}
                    element={<Studys />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/minds`}
                    element={<Minds />}
                />
            </Routes>
        </Router>
    );
};

export default App;
