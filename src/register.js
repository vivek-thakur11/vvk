import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Input, Item, Container, Button, Text } from 'native-base';
import { withFirebase } from './firebase/firebase';

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
      errorMessage: null
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Text style={{ fontWeight: 'bold', color: '#2196f3', marginTop: 16 }}>Register</Text>
        {this.state.errorMessage && <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>}
        <Item style={{ width: 300 }}>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </Item>

        <Item style={{ width: 300 }}>
          <Input
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </Item>

        <Item style={{ width: 300 }}>
          <Input
            secureTextEntry
            placeholder="Confirm Password"
            autoCapitalize="none"
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />
        </Item>

        <Button
          onPress={this.signUp}
          primary
          style={{
            justifyContent: 'center',
            marginTop: 8,
            backgroundColor: '#2196f3',
            width: 150
          }}>
          <Text style={{ fontWeight: 'bold' }}> Sign Up </Text>
        </Button>
        {this.state.isLoading && <ActivityIndicator size="large" />}
      </Container>
    );
  }

  signUp = () => {
    if (this.state.email === '') {
      this.setState({ errorMessage: 'Please enter email id' });
      return;
    }
    if (this.state.password === '') {
      this.setState({ errorMessage: 'Please enter password' });
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ errorMessage: 'Password does not match' });
      return;
    }

    this.setState({ isLoading: true });
    this.props.firebase.auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log('New User', user);
        this.setState({ isLoading: false });
        this.props.navigation.navigate('App');
      })
      .catch(error => {
        this.setState({ isLoading: false, errorMessage: error.code });
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default withFirebase(RegisterScreen);
