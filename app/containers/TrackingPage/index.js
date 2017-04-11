/*
 *
 * TrackingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import ReactMapboxGl, { Layer, Feature, Marker, Cluster } from 'react-mapbox-gl';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MapsDirectionsBus from 'react-material-icons/icons/maps/directions-bus';
import MapsDirectionsCar from 'react-material-icons/icons/maps/directions-car';
import MapsNavigation from 'react-material-icons/icons/maps/navigation';
import ActionFavorite from 'react-material-icons/icons/action/favorite';
import ActionBookmark from 'react-material-icons/icons/action/bookmark';
import SocialShare from 'react-material-icons/icons/social/share';
import ActionDashboard from 'react-material-icons/icons/action/dashboard';
import DeviceGpsFixed from 'react-material-icons/icons/device/gps-fixed';
import NavigationMoreVert from 'react-material-icons/icons/navigation/more-vert';
import NavigationMenu from 'react-material-icons/icons/navigation/menu';
import NotificationEventNote from 'react-material-icons/icons/notification/event-note';
import ActionSettings from 'react-material-icons/icons/action/settings';
import A from 'components/A';
import makeSelectTrackingPage from './selectors';
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

export class TrackingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    if (isMobile.any()) {
      this.state = {
        vehicle_id: 'none',
        type: 'none',
        pop_open: false,
        checkpoint: {},
        drawerOpen: false,
        zoomLevel: 0,
        menuOpen: false,
        menuStyles: {
          position: 'absolute',
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
        drawerStyle: {
          position: 'absolute',
          height: '0vh',
          marginTop: 'auto',
        },
      };
    } else {
      this.state = {
        vehicle_id: 'none',
        type: 'none',
        pop_open: false,
        checkpoint: {},
        drawerOpen: false,
        zoomLevel: 0,
        menuOpen: true,
        menuStyles: {
          position: 'absolute',
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
        drawerStyle: {},
      };
    }
  }
  getMovingPath = (vId) => {
    const { movingPath } = this.props.TrackingPage;
    for (let i = 0; i < movingPath.length; i += 1) {
      if (movingPath[i].id === vId) {
        return movingPath[i];
      }
    }
    return { path: [[], [], []] };
  };
  getScheduledPath = (vId) => {
    const { scheduledPath } = this.props.TrackingPage;
    for (let i = 0; i < scheduledPath.length; i += 1) {
      if (scheduledPath[i].id === vId) {
        return scheduledPath[i];
      }
    }
    return { path: [], checkpointInfo: [] };
  };
  zoomChanged = (zoom) => {
    let zoomLevel = 0;
    if (zoom < 15) {
      zoomLevel = 0;
    } else if (zoom < 17) {
      zoomLevel = 1;
    } else {
      zoomLevel = 2;
    }
    this.setState({ zoomLevel });
  };
  handleRequestClose = () => {
    this.setState({
      pop_open: false,
    });
  };
  switchMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    if (this.state.menuOpen) {
      this.setState({
        menuStyles: {
          position: 'absolute',
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
      });
    } else {
      this.setState({
        menuStyles: {
          position: 'absolute',
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
      });
    }
  };
  switchMobileMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
    if (this.state.menuOpen) {
      this.setState({
        menuStyles: {
          position: 'absolute',
          height: '100%',
          zIndex: 1300,
          overflow: 'hidden',
          width: 224,
        },
      });
    } else {
      this.setState({
        menuStyles: {
          position: 'absolute',
          height: '100%',
          width: 0,
          zIndex: 1300,
          overflow: 'hidden',
        },
      });
    }
  };
  render() {
    const clusterMarker = (coordinates, pointCount) => (
      <Marker coordinates={coordinates} key={coordinates.toString()} style={styles.clusterMarker}>
        { pointCount }
      </Marker>
    );
    const styles = {
      clusterMarker: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#51D5A0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        border: '2px solid #56C498',
      },
      marker: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#E0E0E0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #C9C9C9',
      },
      popHeader: {
        backgroundColor: '#BDBDBD',
      },
      vType: {
        fontSize: 20,
        lineHeight: 1.5,
        fontWeight: 'bold',
        padding: 10,
        paddingLeft: 30,
        display: 'inline-block',
      },
      checkpoint: {
        color: 'white',
        padding: 10,
        fontWeight: 'ligher',
        paddingLeft: 30,
        paddingBottom: 30,
      },
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
      time: {
        width: 60,
        verticalAlign: 'top',
        display: 'table-cell',
      },
      description: {
        display: 'table-cell',
      },
      ckpWrapper: {
        padding: 20,
        border: '1px solid #949494',
      },
    };
    const openSecondary = true;
    let drawerWidth = '266';
    if (isMobile.any()) {
      drawerWidth = '100vw';
    }

    const { vehicles, vehicle_state } = this.props.TrackingPage;
    const mPath = this.getMovingPath(this.state.vehicle_id);
    const sPath = this.getScheduledPath(this.state.vehicle_id);
    const pathList = sPath.checkpointInfo.map((item) => (
      <div style={styles.ckpWrapper}>
        <div style={styles.time}>
          {item.actualTime}
        </div>
        <div style={styles.description}>
          <div>{item.name}</div>
          <div>{item.description}</div>
        </div>
      </div>
    ));
    let drawerStyle = {};
    if (isMobile.any()) {
      drawerStyle = {
        position: 'absolute',
        height: '45vh',
        top: 'auto',
        bottom: '0',
      };
    }
    return (
      <div style={{ width: '100%' }}>
        <Helmet
          title="TrackingPage"
          meta={[
            { name: 'description', content: 'Description of TrackingPage' },
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
        <div>
          <ReactMapboxGl
            style="mapbox://styles/mapbox/streets-v9"
            accessToken="pk.eyJ1IjoibWlrZWpvbmciLCJhIjoiY2oxODFmbXZsMDV5MjJ3cDl4Nzlsc2R0YSJ9.oSbrQVExUOQ0v82ALzmX9A"
            containerStyle={{
              height: '100vh',
              width: '100%',
            }}
            minZoom={13}
            onZoomEnd={(map) => (this.zoomChanged(map.getZoom()))}
          >
            <Cluster ClusterMarkerFactory={clusterMarker} clusterThreshold={8} radius={30} >
              {
                vehicles.map((vehicle, key) => {
                  const markerStyles = Object.assign({}, styles.marker);
                  markerStyles.backgroundColor = vehicle_state[vehicle.state].color;
                  return (
                    <Marker
                      key={key}
                      style={markerStyles}
                      coordinates={vehicle.coordinates}
                      onClick={(event) => (this.setState({
                        pop_open: true,
                        drawerOpen: false,
                        vehicle_id: vehicle.id,
                        type: vehicle.type,
                        checkpoint: {
                          name: vehicle.ckName,
                          description: vehicle.ckDescription,
                          time: vehicle.ckPassTime,
                        },
                        anchorEl: event.currentTarget,
                      }))}
                    >
                      V
                    </Marker>
                  );
                })
              }
            </Cluster>
            <Layer
              type="line"
              layout={{ 'line-cap': 'round', 'line-join': 'round' }}
              paint={{ 'line-color': '#4790E5', 'line-width': 12 }}
            >
              { this.state.drawerOpen ? (<Feature coordinates={mPath.path[this.state.zoomLevel]} />) : null}
            </Layer>
          </ReactMapboxGl>
          <Popover
            open={this.state.pop_open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'center', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <div style={styles.popHeader}>
              <div style={styles.vType}>
                {this.state.type.type === 'Truck' ? <MapsDirectionsBus /> : <MapsDirectionsCar />} {this.state.type}
              </div>
              <div style={styles.checkpoint}>
                {this.state.checkpoint.name} - {this.state.checkpoint.description}
              </div>
            </div>
            <Toolbar>
              <ToolbarGroup>
                <IconButton>
                  <MapsNavigation
                    onTouchTap={() => (this.setState({
                      drawerStyle,
                      pop_open: false,
                      drawerOpen: true,
                    }))}
                  />
                </IconButton>
              </ToolbarGroup>
              <ToolbarGroup>
                <IconButton>
                  <ActionFavorite />
                </IconButton>
                <IconButton>
                  <ActionBookmark />
                </IconButton>
                <IconButton>
                  <SocialShare />
                </IconButton>
              </ToolbarGroup>
            </Toolbar>
          </Popover>
          <Drawer
            open={this.state.drawerOpen}
            openSecondary={openSecondary}
            docked={false}
            onRequestChange={(open) => this.setState({
              drawerOpen: open,
              drawerStyle: {
                position: 'absolute',
                height: 0,
                marginTop: 'auto',
              },
            })}
            width={drawerWidth}
            overlayStyle={{ display: 'none' }}
            containerStyle={this.state.drawerStyle}
          >
            <div style={styles.popHeader}>
              <div style={styles.vType}>
                {this.state.type.type === 'Truck' ? <MapsDirectionsBus /> : <MapsDirectionsCar />} {this.state.type}
              </div>
              <div style={styles.checkpoint}>
                {this.state.checkpoint.name} - {this.state.checkpoint.description}
              </div>
            </div>
            <div>
              {pathList}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

TrackingPage.propTypes = {
  TrackingPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  TrackingPage: makeSelectTrackingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackingPage);
