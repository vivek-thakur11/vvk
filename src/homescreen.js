import React from 'react';
import { Container, Button, Text, Card, CardItem, Thumbnail, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import educationLogo from '../assets/education.png';
import migrationLogo from '../assets/migration.png';
import studyLogo from '../assets/study.png';
import professionalLogo from '../assets/professional.png';
import visaLogo from '../assets/visa.png';
import otherLogo from '../assets/other.png';
import { withFirebase } from './firebase/firebase';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      adminUser: false
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          adminUser: true
        });
      } else {
        this.setState({
          adminUser: false
        });
      }
    });
  }

  render() {
    return (
      <Container style={[style.parent]}>
        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Education')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={educationLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Education')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Education</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={migrationLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Migration</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Pteielts')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={studyLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Pteielts')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>PTE/IELTS</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Professional')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={professionalLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Professional')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Professional Year</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('VisaOpt')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={visaLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('VisaOpt')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Visa Options</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Other')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={otherLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Other')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Other Services</Text>
          </CardItem>
        </Card>
        {this.state.adminUser && (
          <>
            <Card transparent style={[style.child]}>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2196f3'
                }}
                primary
                rounded
                onPress={() => {
                  this.props.navigation.navigate('ViewAppointment');
                }}>
                <Text style={{ fontWeight: 'bold' }}> View Booking </Text>
              </Button>
            </Card>
            <Card transparent style={[style.child]}>
              <Button
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#2196f3'
                }}
                primary
                rounded
                onPress={() => {
                  this.props.navigation.navigate('AddAppointment');
                }}>
                <Text style={{ fontWeight: 'bold' }}> Add Booking</Text>
              </Button>
            </Card>
          </>
        )}
        {!this.state.adminUser && (
          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2196f3',
              marginLeft: 75
            }}
            primary
            rounded
            onPress={() => {
              this.props.navigation.navigate('Booking');
            }}>
            <Text style={{ fontWeight: 'bold' }}> Book Appointment </Text>
          </Button>
        )}
      </Container>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20
  },
  child: {
    width: '44%',
    margin: '1%',
    aspectRatio: 1
  }
});

// expose home component to firebase functions
const Home = withFirebase(HomeScreen);
Home.navigationOptions = ({ navigation }) => {
  return {
    title: 'Grace Consultancy',
    headerStyle: {
      backgroundColor: '#f44336'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerLeft: (
      <Icon
        name="menu"
        size={30}
        style={{ marginStart: 10 }}
        backgroundColor="#000000"
        onPress={() => navigation.openDrawer()}
      />
    )
  };
};

export default Home;
