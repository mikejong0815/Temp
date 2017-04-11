/*
 *
 * SignupPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import makeSelectSignupPage from './selectors';

export class SignupPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const textBoxStyles = {
      width: '100%',
    };
    const loginLinkContainerStyles = {
      textAlign: 'center',
      margin: 10,
    };
    return (
      <div>
        <Helmet
          title="SignupPage"
          meta={[
            { name: 'description', content: 'Description of SignupPage' },
          ]}
        />
        <Card containerStyle={{ marginTop: '30%' }} style={{ width: '60%', maxWidth: 350, margin: 'auto' }} >
          <CardTitle title="Sign up" style={{ backgroundColor: '#212121' }} titleColor="white" titleStyle={{ textAlign: 'center' }} />
          <CardText>
            <TextField
              hintText="Full name"
              floatingLabelText="Full name"
              style={textBoxStyles}
            />
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              style={textBoxStyles}
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              style={textBoxStyles}
              type="password"
            />
            <div style={loginLinkContainerStyles}>
              <Checkbox
                label="I agree terms and conditions"
              />
            </div>
          </CardText>
          <CardActions style={{ textAlign: 'center', paddingBottom: 30 }}>
            <FlatButton label="SIGN UP" />
            <FlatButton label="BACK" onTouchTap={() => (browserHistory.push('/login'))} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignupPage: makeSelectSignupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
