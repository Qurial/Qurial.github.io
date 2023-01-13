import './App.css';
import Profile from './components/Profile/ProfilePage';
import Header from './components/Header/Header';
import Navigation from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Messenger from './components/Messenger/Messenger';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className='mainContent'>
          <Navigation />
          <Routes>
            <Route path='/Profile'
              element={<Profile
                ProfilePage={props.state.ProfilePage} />} />

            <Route path='/Messenger/*'
              element={<Messenger
                MessengerPage={props.state.MessengerPage} />} />

            <Route path='/Friends'
              element={<Friends />} />

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
    </BrowserRouter>
  );
}

export default App;
