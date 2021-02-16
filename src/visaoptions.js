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
  Icon
} from 'native-base';
import { Linking } from 'react-native';

export default class VisaOptions extends Component {
  static navigationOptions = {
    title: 'Visa Options'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Visa Options</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Know what to expect when you enter Australia. Depending on your circumstances, you
                  might want to find out more about: {'\n'}-visas and our requirements for entry
                  {'\n'}-what to -what to expect when you cross the border {'\n'}-how to enter
                  Australia as air or sea crew, an offshore worker or member of the military
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <List>
              <ListItem
                onPress={() =>
                  Linking.openURL(
                    'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder'
                  )
                }>
                <Body>
                  <Text>More Information</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Card>
        </Content>
      </Container>
    );
  }
}
