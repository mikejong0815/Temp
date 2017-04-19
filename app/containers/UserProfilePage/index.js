/*
 *
 * UserProfilePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionDashboard from 'react-material-icons/icons/action/dashboard';
import DeviceGpsFixed from 'react-material-icons/icons/device/gps-fixed';
import NavigationMoreVert from 'react-material-icons/icons/navigation/more-vert';
import NavigationMenu from 'react-material-icons/icons/navigation/menu';
import NotificationEventNote from 'react-material-icons/icons/notification/event-note';
import ActionSettings from 'react-material-icons/icons/action/settings';
import A from 'components/A';
import { Tabs, Tab } from 'material-ui/Tabs';
import makeSelectUserProfilePage from './selectors';
import logo from './firebase-discs.png';

const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  },
};

export class UserProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    if (isMobile.any()) {
      this.state = {
        menuOpen: false,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          zIndex: 1300,
          overflow: 'hidden',
          width: 0,
        },
        titleBarStyle: {
          paddingLeft: 20,
          backgroundColor: '#9B9B9B',
        },
        appBarStyle: {
          paddingLeft: 24,
          backgroundColor: '#212121',
          position: 'absolute',
        },
        contentStyle: {
          marginTop: 100,
          paddingLeft: 24,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
        },
      };
    } else {
      this.state = {
        menuOpen: false,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          zIndex: 1300,
          overflow: 'hidden',
        },
        titleBarStyle: {
          paddingLeft: 244,
          backgroundColor: '#9B9B9B',
        },
        appBarStyle: {
          paddingLeft: 264,
          backgroundColor: '#212121',
        },
        contentStyle: {
          paddingLeft: 264,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
        },
      };
    }
  }
  switchMenuToggle = () => {
    if (!this.state.menuOpen) {
      this.setState({
        menuOpen: true,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          zIndex: 1300,
          overflow: 'hidden',
        },
        titleBarStyle: {
          paddingLeft: 244,
          backgroundColor: '#9B9B9B',
        },
        appBarStyle: {
          paddingLeft: 264,
          backgroundColor: '#212121',
        },
        contentStyle: {
          paddingLeft: 265,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
        },
      });
    } else {
      this.setState({
        menuOpen: false,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          width: 55,
          zIndex: 1300,
          overflow: 'hidden',
        },
        titleBarStyle: {
          paddingLeft: 75,
          backgroundColor: '#9B9B9B',
        },
        appBarStyle: {
          paddingLeft: 95,
          backgroundColor: '#212121',
        },
        contentStyle: {
          paddingLeft: 95,
          paddingTop: 20,
          paddingRight: 20,
          paddingBottom: 20,
        },
      });
    }
  };
  switchMobileMenuToggle = () => {
    if (!this.state.menuOpen) {
      this.setState({
        menuOpen: true,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          zIndex: 1300,
          overflow: 'hidden',
          width: 224,
        },
      });
    } else {
      this.setState({
        menuOpen: false,
        menuStyles: {
          position: 'fixed',
          height: '100%',
          width: 0,
          zIndex: 1300,
          overflow: 'hidden',
        },
      });
    }
  };
  render() {
    const styles = {
      menuHeader: {
        padding: '20px 20px 20px 60px',
        fontSize: 25,
        lineHeight: 2,
        paddingLeft: 60,
      },
      logo: {
        height: 50,
        marginRight: 10,
        position: 'absolute',
        left: 10,
      },
      tabLabelStyle: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid #B2B2B2',
      },
      tabButtonStyle: {
        color: '#616161',
        alignItems: 'left',
        textIndent: 15,
      },
      textBoxStyles: {
        width: '100%',
      },
      profileImageStyles: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundImage: 'url(https://d3pl14o4ufnhvd.cloudfront.net/v2/uploads/22367d53-e86d-414d-939a-4667b9839ace/127d0ceb39c72b9382bc5638735d55eec41f3c2a_original.png)',
        backgroundColor: 'rgb(224, 224, 224)',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        backgroundSize: '50% 50%',
        display: 'inline-block',
      },
    };
    return (
      <div style={{ width: '100%' }}>
        <Helmet
          title="UserProfilePage"
          meta={[
            { name: 'description', content: 'Description of UserProfilePage' },
          ]}
        />
        <Paper style={this.state.menuStyles} zDepth={3} >
          <Menu>
            { !isMobile.any() ?
              <Subheader style={styles.menuHeader}><A onClick={this.switchMenuToggle}><img src={logo} alt="logo" style={styles.logo} /></A> <div>firebase</div></Subheader>
              :
              <Subheader style={styles.menuHeader}><A onClick={this.switchMobileMenuToggle}><img src={logo} alt="logo" style={styles.logo} /></A> <div>firebase</div></Subheader>
            }
            <MenuItem primaryText="Dashboard" leftIcon={<ActionDashboard />} />
            <MenuItem primaryText="Tracking" leftIcon={<DeviceGpsFixed />} />
            <MenuItem primaryText="Scheduler" leftIcon={<NotificationEventNote />} />
            <MenuItem primaryText="Devices" leftIcon={<ActionSettings />} />
          </Menu>
        </Paper>
        <AppBar
          iconElementRight={<IconButton><NavigationMoreVert /></IconButton>}
          iconElementLeft={
            <div>
              { isMobile.any() ? <IconButton onClick={this.switchMobileMenuToggle} style={{ position: 'absolute' }} iconStyle={{ color: 'white' }} ><NavigationMenu /></IconButton> : null }
              <SelectField value={1} labelStyle={{ color: 'white' }} style={{ marginLeft: 50 }} >
                <MenuItem value={1} primaryText="Morning" />
                <MenuItem value={2} primaryText="Afternoon" />
                <MenuItem value={3} primaryText="Evening" />
                <MenuItem value={4} primaryText="Night" />
              </SelectField>
              { !isMobile.any() ? <SelectField value={1} labelStyle={{ color: 'white' }} style={{ marginLeft: 20 }}>
                <MenuItem value={1} primaryText="All Devices" />
                <MenuItem value={2} primaryText="iPhone" />
                <MenuItem value={3} primaryText="Nexus" />
                <MenuItem value={4} primaryText="Galaxy" />
              </SelectField> : null}
            </div>
          }
          style={this.state.appBarStyle}
        />
        {!isMobile.any() ? <AppBar
          title="Tracking"
          iconElementLeft={<IconButton><DeviceGpsFixed /></IconButton>}
          style={this.state.titleBarStyle}
        /> : null}
        <div style={this.state.contentStyle}>
          <Tabs tabItemContainerStyle={styles.tabLabelStyle} style={{ border: '1px solid #B2B2B2' }}>
            <Tab label="Profile" buttonStyle={styles.tabButtonStyle}>
              <Paper zDepth={0} style={{ backgroundColor: 'transparent', padding: 40 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={styles.profileImageStyles}>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <TextField
                    hintText="Full name"
                    floatingLabelText="Full name"
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <SelectField value={1} floatingLabelText="Language" style={{ textAlign: 'left' }}>
                    <MenuItem value={1} primaryText="English" />
                    <MenuItem value={2} primaryText="French" />
                    <MenuItem value={3} primaryText="German" />
                    <MenuItem value={4} primaryText="Dutch" />
                  </SelectField>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <FlatButton label="Save" />
                </div>
              </Paper>
            </Tab>
            <Tab label="Subscription" buttonStyle={styles.tabButtonStyle} >
              <div>
                <h2 style={styles.headline}>Tab Two</h2>
                <p>
                  This is another example tab.
                </p>
              </div>
            </Tab>
            <Tab
              label="Invoices"
              data-route="/home"
              buttonStyle={styles.tabButtonStyle}
            >
              <div>
                <h2 style={styles.headline}>Tab Three</h2>
                <p>
                  This is a third example tab.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

UserProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  UserProfilePage: makeSelectUserProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
