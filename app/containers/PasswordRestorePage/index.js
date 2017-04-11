/*
 *
 * PasswordRestorePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import makeSelectPasswordRestorePage from './selectors';

export class PasswordRestorePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const textBoxStyles = {
      width: '100%',
    };
    return (
      <div>
        <Helmet
          title="PasswordRestorePage"
          meta={[
            { name: 'description', content: 'Description of PasswordRestorePage' },
          ]}
        />
        <Card containerStyle={{ marginTop: '30%' }} style={{ width: '60%', maxWidth: 350, margin: 'auto' }} >
          <CardTitle title="Reset Password" style={{ backgroundColor: '#212121' }} titleColor="white" titleStyle={{ textAlign: 'center' }} />
          <CardText>
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              style={textBoxStyles}
            />
          </CardText>
          <CardActions style={{ textAlign: 'center', paddingBottom: 30 }}>
            <FlatButton label="SEND" />
            <FlatButton label="BACK" onTouchTap={() => (browserHistory.push('/login'))} />
          </CardActions>
        </Card>
      </div>
    );
  }
}

PasswordRestorePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PasswordRestorePage: makeSelectPasswordRestorePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRestorePage);
