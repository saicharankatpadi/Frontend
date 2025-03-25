
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Profile from './components/Profile';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './components/Feed';
import Connections from './components/Connections';
import Requests from './components/Requests';
import Courses from './components/Courses';
import TestSeries from './components/TestSeries'; // Import the TestSeries component

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
            <Route path="chat/:targetUserId" element={<Chat />} />
            <Route path="courses" element={<Courses />} />
            <Route path="test-series" element={<TestSeries />} /> {/* Add the TestSeries route */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
