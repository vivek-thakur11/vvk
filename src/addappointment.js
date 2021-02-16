import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Form,
  Label,
  Item,
  Input,
  Button,
  View,
  List,
  ListItem,
  Body,
  Right,
  Icon
} from 'native-base';
import { ActivityIndicator, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { withFirebase } from './firebase/firebase';

// Main class for adding booking date and time
class AddAppointmentClass extends Component {
  constructor() {
    super();
    this.state = { datetime: [], isDateTimePickerVisible: false };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    const data = date.toLocaleString();
    this.setState({ datetime: [...this.state.datetime, data] });
    this.hideDateTimePicker();
  };

  onFormSubmit = () => {
    if (this.state.datetime.length === 0) {
      Alert.alert('Invalid Input', 'Please at least 1 date and time', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    this.props.firebase.db
      .ref('/Available_Appointments')
      .once('value')
      .then(snapshot => {
        let data = snapshot.val();

        if (data === null || data === undefined) {
          data = [];
        }
        console.log('data val', data);
        data.push(...this.state.datetime);
        this.props.firebase.db.ref('Available_Appointments/').set(data, error => {
          // error handling
          if (error) {
            Alert.alert('Faild', 'Failed to add appointment. Please try again later.', [
              {
                text: 'Ok',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                }
              }
            ]);
          } else {
            // display success message
            Alert.alert('Done', 'You have added new appointment.', [
              {
                text: 'Ok',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                }
              }
            ]);
          }
        });
      });
  };

  render() {
    return (
      <ScrollView>
        <View padder>
          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2196f3'
            }}
            primary
            rounded
            onPress={this.showDateTimePicker}>
            <Text style={{ fontWeight: 'bold' }}> Select Dates </Text>
          </Button>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode="datetime"
          />
          <Text>{'\n'}</Text>

          <List>
            {this.state.datetime.map((time, i) => (
              <ListItem key={i}>
                <Body>
                  <Text>{time}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
          <Text>{'\n'}</Text>
          {this.state.datetime.length > 0 && (
            <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f44336'
              }}
              primary
              onPress={this.onFormSubmit}
              rounded>
              <Text style={{ fontWeight: 'bold' }}> Add Dates </Text>
            </Button>
          )}
        </View>
      </ScrollView>
    );
  }
}

// connect booking class to firebase functions
const AddAppointment = withFirebase(AddAppointmentClass);
AddAppointment.navigationOptions = {
  title: 'Appointments'
};

export default AddAppointment;
