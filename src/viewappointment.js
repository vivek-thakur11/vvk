import React, { Component } from 'react';
import { Container, Content, Icon, Text, List, ListItem, Left, Right, Body } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for booking
class ViewAppointmentClass extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.firebase.db.ref('/Booked_Appointments').on('value', snapshot => {
      const data = snapshot.val();
      if (data === null) {
        this.setState({ isLoading: false });
        return;
      }
      const dataArray = Object.values(data);
      this.setState({ list: dataArray, isLoading: false });
    });
  }

  componentWillMount() {
    this.props.firebase.db.ref('/Booked_Appointments').off('value');
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.list.map((user, i) => (
              <ListItem
                key={i}
                onPress={() => {
                  this.props.navigation.navigate('UserAppointment', { user });
                }}>
                <Body>
                  <Text>{user.Name}</Text>
                  <Text note>{user.BookingTime}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
          {this.state.isLoading && <ActivityIndicator size="large" />}
        </Content>
      </Container>
    );
  }
}

// connect booking class to firebase functions
const ViewAppointment = withFirebase(ViewAppointmentClass);
ViewAppointment.navigationOptions = {
  title: 'Appointments'
};

export default ViewAppointment;
