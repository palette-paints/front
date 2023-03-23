import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../routes/Main';
import Plays from '../routes/Plays';
import Studys from '../routes/Studys';
import Minds from '../routes/Minds';
import Login from '../routes/Login';
import Signup from '../routes/Signup';
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
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    element={<Login />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/signup`}
                    element={<Signup />}
                />
            </Routes>
        </Router>
    );
};

export default App;
