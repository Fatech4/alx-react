import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginsBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { user, logOut, AppContext } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayDrawer: false, user: user, logOut: this.logOut };
  }
  logIn = (email, password) => {
    this.setState({
      user: { email: email, password: password, isLoggedIn: true },
    });
  };
  logOut = () => {
    this.setState({ user: { email: '', password: '', isLoggedIn: false } });
  };
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      window.alert('Logging you out');
      this.state.logOut();
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
    // const { isLoggedIn } = this.props;

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
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <div className={css(styles.app)}>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={() => this.handleDisplayDrawer()}
            handleHideDrawer={() => this.handleHideDrawer()}
          />
          <Header />

          <div className={css(styles.appBody)}>
            {this.state.user.isLoggedIn ? (
              <BodySectionWithMarginsBottom title='Course list'>
                {' '}
                <CourseList listCourses={listCourses} />{' '}
              </BodySectionWithMarginsBottom>
            ) : (
              <BodySectionWithMarginsBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
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
          <div className={css(styles.appFooter)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
const styles = StyleSheet.create({
  app: {
    position: 'relative',
    boxSizing: 'border-box',
  },
  appBody: {
    padding: '0.5rem',
    paddingLeft: '2rem',
    paddingTop: '3rem',
    boxSizing: 'border-box',
  },
  appFooter: {
    borderTop: '3px solid rgb(231, 46, 46)',
    paddingTop: '0.5rem',
    paddingLeft: '0.5rem',
    // position: 'absolute',
    overflow: 'hidden',
    bottom: '0px',
    right: '1rem',
    left: '1rem',
    textAlign: 'center',
    boxSizing: 'border-box',
    '@media screen and (max-width:900px)': {
      position: 'unset',
    },
  },
});
// App.propTypes = {
//   isLoggedIn: PropTypes.bool,
//   logOut: PropTypes.func,
// };

// App.defaultProps = {
//   isLoggedIn: false,
//   logOut: () => {},
// };
export default App;
