import { createAppContainer, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Icon, View, Text, Thumbnail, Label } from 'native-base';
import React from 'react';
import { Alert, StyleSheet, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './homescreen';
import Education from './education';
import Migration from './migration';
import Gallery from './gallery';
import Links from './links';
import AuthLoadingScreen from './authloading';
import SignInScreen from './signin';
import RegisterScreen from './register';
import { FirebaseContext } from './firebase/firebase';
import logo from '../assets/logo.png';
import Booking from './booking';
import ViewAppointment from './viewappointment';
import UserAppointment from './userappointment';
import AddAppointment from './addappointment';
import Points from './points';
import Contact from './contact';
import PteIelts from './pteielts';
import ProfessionalYear from './professionalyear';
import VisaOptions from './visaoptions';
import OtherServices from './otherservices';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Education: {
      screen: Education
    },
    Migration: {
      screen: Migration
    },
    Pteielts: {
      screen: PteIelts
    },
    Professional: {
      screen: ProfessionalYear
    },
    VisaOpt: {
      screen: VisaOptions
    },
    Other: {
      screen: OtherServices
    },
    Booking: {
      screen: Booking
    },
    ViewAppointment: {
      screen: ViewAppointment
    },
    AddAppointment: {
      screen: AddAppointment
    },
    UserAppointment: {
      screen: UserAppointment
    }
  },
  {
    navigationOptions: {
      drawerIcon: () => <Icon name="home" />
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: RootStack
    },
    Gallery: {
      screen: Gallery
    },
    Links: {
      screen: Links
    },
    Points: {
      screen: Points
    },
    Contact: {
      screen: Contact
    }
  },
  {
    contentComponent: props => (
      <SafeAreaView>
        <View
          style={{
            height: 100,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Thumbnail square source={logo} style={{ width: 194, height: 71 }} />
        </View>
        <DrawerNavigatorItems {...props} />

        <FirebaseContext.Consumer>
          {firebase => {
            return (
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'Log out',
                    'Do you want to logout?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {
                          return null;
                        }
                      },
                      {
                        text: 'Confirm',
                        onPress: () => {
                          firebase.auth.signOut().then(() => {
                            props.navigation.navigate('Auth');
                          });
                        }
                      }
                    ],
                    { cancelable: false }
                  )
                }>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <Icon name="ios-log-out" />
                  </View>
                  <Text style={styles.label}>Logout</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        </FirebaseContext.Consumer>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 48
          }}>
          <Label style={{ fontWeight: 'bold' }}>Follow us</Label>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 16
          }}>
          <Icon
            name="logo-facebook"
            onPress={() => {
              Linking.openURL('https://www.facebook.com/graceintlgroup');
            }}
          />
          <Icon
            name="logo-twitter"
            onPress={() => {
              Linking.openURL('https://twitter.com/graceintlgroup/');
            }}
          />
          <Icon
            name="logo-instagram"
            onPress={() => {
              Linking.openURL('https://www.instagram.com/graceintlgroup/');
            }}
          />
          {/* <Icon
            name="logo-youtube"
            onPress={() => {
              Linking.openURL('https://www.youtube.com/channel/UCLuzQv45Cmwy5dTIMB_z7iQ');
            }}
          /> */}
        </View>
      </SafeAreaView>
    )
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    mode: 'modal'
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
    fontSize: 14
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  }
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
