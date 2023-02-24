import React, { Suspense } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationBarContainer from './components/NavigationBar/NavigationBarContainer';
import { connect, Provider } from 'react-redux';
import { initialize } from './redux/AppReducer';
import store from './redux/redux-store';
import Preloader from './common/Preloader/Preloader';
import NotFound from './components/NotFound/NotFound';
const LoginPage = React.lazy(() => import('./components/Login/LoginContainer'))
const MessengerContainer = React.lazy(() => import('./components/Messenger/MessengerContainer'))
const ProfilePageContainer = React.lazy(() => import('./components/Profile/ProfilePageContainer'))
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'))
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'))
const Music = React.lazy(() => import('./components/Music/Music'))
const NewsContainer = React.lazy(() => import('./components/News/NewsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return null
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className='mainContent'>
          <NavigationBarContainer />

          <Suspense fallback={<Preloader />}>
            <Routes>

              <Route path='/'
                element={<Navigate to='/Profile/:userId?' />} />

              <Route path='/Profile/:userId?'
                element={<ProfilePageContainer />} />

              <Route path='/Messenger/*'
                element={<MessengerContainer />} />

              <Route path='/Friends'
                element={<FriendsContainer />} />

              <Route path='/News'
                element={<NewsContainer />} />

              <Route path='/Music'
                element={<Music />} />

              <Route path='/Settings'
                element={<SettingsContainer />} />

              <Route path='/login'
                element={<LoginPage />} />

              <Route path='*'
                element={<NotFound />} />

            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    );

  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.App.initialized
  }
}

let AppContainer = connect(mapStateToProps, { initialize })(App);

let SocialMediaApp = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default SocialMediaApp;