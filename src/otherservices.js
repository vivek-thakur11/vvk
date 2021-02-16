import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  List,
  ListItem,
  Right,
  Icon,
  Button
} from 'native-base';
import { Linking } from 'react-native';

export default class OtherServices extends Component {
  static navigationOptions = {
    title: 'Other Services'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Other Services</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>To explore our other services.</Text>

                <Button
                  transparent
                  onPress={() => Linking.openURL('http://www.graceintlgroup.com')}>
                  <Text style={{ color: '#2196f3' }}> click here </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
