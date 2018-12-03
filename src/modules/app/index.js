// NPM Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Local Dependencies
import RouterMap from './router';

/**
 * Application Component
 */
// const App = ({ authenticated }) => (
const App = () => (
    <Fragment>
        <h1>Spot</h1>
        <Router>
            <RouterMap />
        </Router>
    </Fragment>
);

// App.propTypes = {
//     authenticated: PropTypes.bool.isRequired
// };

const mapStateToProps = (state) => {
    return {
        // authenticated: state.user.authenticated
    };
};

export default connect(mapStateToProps)(App);
