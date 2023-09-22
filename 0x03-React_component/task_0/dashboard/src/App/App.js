import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        <Notifications listNotifications={this.state.listNotifications} />
        <Header />

        <div className='App-body'>
          {this.state.isLoggedIn ? (
            <CourseList listCourses={this.state.listCourses} />
          ) : (
            <Login />
          )}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
