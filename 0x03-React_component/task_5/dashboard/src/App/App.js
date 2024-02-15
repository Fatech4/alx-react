import React, { Fragment } from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Login/Login.css';
import '../Footer/Footer.css';
import '../Header/Header.css';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginsBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import WithLogging from '../HOC/WithLogging';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    return (
      <>
        <div className='App'>
          <Notifications listNotifications={listNotifications} />
          <Header />

          <div className='App-body'>
            {isLoggedIn ? (
              <BodySectionWithMarginsBottom title='Course list'>
                {' '}
                <CourseList listCourses={listCourses} />{' '}
              </BodySectionWithMarginsBottom>
            ) : (
              <BodySectionWithMarginsBottom title='Log in to continue'>
                <Login />
              </BodySectionWithMarginsBottom>
            )}
            <BodySection title='News from the School.'>
              Commodo sint aliqua et eu aute ea magna ex fugiat aliquip dolore
              mollit eiusmod aliqua. Pariatur reprehenderit quis deserunt
              consectetur occaecat cupidatat non laboris nisi consequat mollit
              reprehenderit anim ullamco. Velit non sint officia laboris elit
              elit ullamco reprehenderit enim nisi anim. In reprehenderit sit
              reprehenderit ea exercitation eiusmod in irure irure aute
              reprehenderit. Exercitation veniam ut veniam laborum sint aliquip
              duis voluptate amet ipsum non reprehenderit.
            </BodySection>
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
        ;
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};
export default App;
