import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../routes/Main';
import Plays from '../routes/Plays';
import PlaysDetail from '../components/PostView/PlaysDetail';
import Studys from '../routes/Studys';
import StudysDetail from '../components/PostView/StudysDetail';
import Minds from '../routes/Minds';
import MindsDetail from './PostView/MindsDetail';
import Login from '../routes/Login';
import Signup from '../routes/Signup';
import S_create from '../routes/S_create';
import P_create from '../routes/P_create';
import M_create from '../routes/M_create';
import S_edit from '../routes/S_edit';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/plays`}
                    element={<Plays />}
                />
                <Route exact path={`/plays/:id`} element={<PlaysDetail />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/studys`}
                    element={<Studys />}
                />
                <Route exact path={`/studys/:id`} element={<StudysDetail />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/minds`}
                    element={<Minds />}
                />
                <Route exact path={`/minds/:id`} element={<MindsDetail />} />
                <Route
                    path={`${process.env.PUBLIC_URL}/login`}
                    element={<Login />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/signup`}
                    element={<Signup />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/studys/create`}
                    element={<S_create />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/minds/create`}
                    element={<M_create />}
                />
                <Route
                    path={`${process.env.PUBLIC_URL}/plays/create`}
                    element={<P_create />}
                />

                <Route
                    path={`${process.env.PUBLIC_URL}/studys/edit/:id`}
                    element={<S_edit />}
                />
            </Routes>
        </Router>
    );
};

export default App;
