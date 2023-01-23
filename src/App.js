import React from 'react';
import './App.css';
import Profile from './components/Profile/ProfilePage';
import Header from './components/Header/Header';
import Navigation from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Messenger from './components/Messenger/Messenger';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import FriendsContainer from './components/Friends/FriendsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <div className='mainContent'>
          <Navigation />
          <Routes>
            <Route path='/Profile'
              element={<Profile
                store={props.store}
                dispatch={props.dispatch}
                profilePage={props.store.getState().ProfilePage} />} />

            <Route path='/Messenger/*'
              element={<Messenger
                store={props.store}
                dispatch={props.dispatch}
                messengerPage={props.store.getState().MessengerPage} />} />

            <Route path='/Friends'
              element={<FriendsContainer
              store={props.store}/>} />

            <Route path='/News'
              element={<News />} />

            <Route path='/Music'
              element={<Music />} />

            <Route path='/Settings'
              element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
