/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import A from 'components/A';

import makeSelectLoginPage from './selectors';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const textBoxStyles = {
      width: '100%',
    };
    const loginLinkContainerStyles = {
      textAlign: 'center',
      padding: 10,
    };
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <Card containerStyle={{ marginTop: '30%' }} style={{ width: '60%', maxWidth: 350, margin: 'auto' }} >
          <CardTitle title="Log in" style={{ backgroundColor: '#212121' }} titleColor="white" titleStyle={{ textAlign: 'center' }} />
          <CardText>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              style={textBoxStyles}
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              style={textBoxStyles}
            />
            <div style={loginLinkContainerStyles}>
              <A onClick={() => { browserHistory.push('/restorepassword'); }}>Forgot Password</A>
            </div>
            <div style={loginLinkContainerStyles}>
              <A onClick={() => { browserHistory.push('/signup'); }}>Sign up new account</A>
            </div>
          </CardText>
          <CardActions style={{ textAlign: 'center', paddingBottom: 30 }}>
            <FlatButton label="LOG IN" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
