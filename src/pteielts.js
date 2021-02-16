import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base';
import { Linking } from 'react-native';

export default class PteIelts extends Component {
  static navigationOptions = {
    title: 'PTE/IELTS'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>PTE</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  PTE Academic is accepted for student and migration applications across the world.
                  In addition to its unbiased approach to testing, the test has many unique
                  advantages.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button transparent onPress={() => Linking.openURL('https://pearsonpte.com/')}>
                <Text style={{ color: '#2196f3' }}> Book Test Date</Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>IELTS</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The International English Language Testing System, or IELTS™, is an international
                  standardised test of English language proficiency for non-native English language
                  speakers.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button transparent onPress={() => Linking.openURL('https://ielts.com.au/')}>
                <Text style={{ color: '#2196f3' }}> Book Test Date</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
