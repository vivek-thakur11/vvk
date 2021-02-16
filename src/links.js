import React, { Component } from 'react';
import {
  Content,
  Body,
  Text,
  Icon,
  Right,
  Left,
  View,
  Header,
  Container,
  ListItem,
  List,
  Card
} from 'native-base';
import { Linking } from 'react-native';

export default class Gallery extends Component {
  static navigationOptions = {
    drawerLabel: 'Useful links',
    drawerIcon: () => <Icon name="link" />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#009688' }}>
          <Left>
            <Icon
              name="menu"
              size={30}
              style={{ marginStart: 10 }}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>Links</Text>
          </Body>
          <Right />
        </Header>
        <Container>
          <Content padder>
            <Card>
              <List>
                <ListItem
                  onPress={() =>
                    Linking.openURL('https://afpnationalpolicechecks.converga.com.au/')
                  }>
                  <Body>
                    <Text>National Police Check (AU)</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                {/* <ListItem
                  onPress={() => Linking.openURL('https://www.vfsglobal.com/india/australia/')}>
                  <Body>
                    <Text>Police Clearance India</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem> */}
                <ListItem onPress={() => Linking.openURL('http://www.bupamvs.com.au/')}>
                  <Body>
                    <Text>Medical Examination (AU)</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                {/* <ListItem
                  onPress={() => Linking.openURL('https://www.vfsglobal.com/india/australia/')}>
                  <Body>
                    <Text>Indian Passport</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem> */}
                <ListItem
                  onPress={() =>
                    Linking.openURL(
                      'https://www.australia.gov.au/about-australia/special-dates-and-events/public-holidays'
                    )
                  }>
                  <Body>
                    <Text>Public Holidays (AU)</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem onPress={() => Linking.openURL('https://www.realestate.com.au/buy')}>
                  <Body>
                    <Text>Real Estate</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem
                  onPress={() =>
                    Linking.openURL(
                      'https://www.australia.gov.au/about-australia/special-dates-and-events'
                    )
                  }>
                  <Body>
                    <Text>Events in Australia</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}
