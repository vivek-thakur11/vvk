import React, { Component } from 'react';
import { Container, Content, Text, Card, CardItem } from 'native-base';
import { withFirebase } from './firebase/firebase';

// Main class for viewing user's appointment
class UserAppointmentClass extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'NO-ID');
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>{user.Name}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Phone :</Text>
              <Text>{user.Phone}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Email :</Text>
              <Text>{user.Email}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Address :</Text>
              <Text>{user.Address}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Query :</Text>
              <Text>{user.BookingQuery}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Time :</Text>
              <Text>{user.BookingTime}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

// connect booking class to firebase functions
const UserAppointment = withFirebase(UserAppointmentClass);
UserAppointment.navigationOptions = {
  title: 'Client'
};

export default UserAppointment;
