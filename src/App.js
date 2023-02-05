import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import FriendsContainer from './components/Friends/FriendsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import ProfilePageContainer from './components/Profile/ProfilePageContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginContainer';
import MessengerContainer from './components/Messenger/MessengerContainer';
import NavigationBarContainer from './components/NavigationBar/NavigationBarContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className='mainContent'>
        <NavigationBarContainer />
        <Routes>

          <Route path='/Profile/:userId?'
            element={<ProfilePageContainer />} />

          <Route path='/Messenger/*'
            element={<MessengerContainer />} />

          <Route path='/Friends'
            element={<FriendsContainer />} />

          <Route path='/News'
            element={<News />} />

          <Route path='/Music'
            element={<Music />} />

          <Route path='/Settings'
            element={<Settings />} />

          <Route path='/login'
            element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
