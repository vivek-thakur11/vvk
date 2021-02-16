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
  Accordion
} from 'native-base';
import { Linking } from 'react-native';

const migrationDataArray = [
  {
    title: 'SKILLED INDEPENDENT PR (189 VISA)',
    content:
      'If you are living overseas and wish to enhance your skills and explore yourself to \
gain global experience then Australia is the country you. Australian government \
provides you various visa types which allow you to migrate to Australia based on \
your skills, experience and education etc. Following are the Visa Subclasses that \
allows you to migrate to Australia and gives you options for Permanent Residency \
as well.'
  },
  {
    title: 'FAMILY VISA',
    content:
      'Family visa by Department of Immigration and Border Protection allows you to bring \
    your family (Includes Parent, Spouse, De Facto, Child, other family member) to \
    Australia subject to certain conditions. These visas are sponsored by Australian \
    Citizens, permanent residents and New Zealand eligible citizens. Grace Group \
    provides an exceptional customer service and advice for family relating visas. We \
    bring loved ones together.'
  },
  {
    title: 'EMPLOYER SPONSORED VISAS',
    content:
      'Employer Sponsored Visa is the key for skilled people having skills in particular \
    occupations to work and live in Australia if sponsored by an Australian business. \
    Also an employer in need of skilled workers can sponsor prospective people to work \
    in Australia if the occupation is in the SOL, CSOL list. Employer sponsored visas \
    are categorized into three different subclasses.'
  }
];

export default class Migration extends Component {
  static navigationOptions = {
    title: 'Migration'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Migration</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  If you are living overseas and wish to enhance your skills and explore yourself to
                  gain global experience then Australia is the country you. Australian government
                  provides you various visa types which allow you to migrate to Australia based on
                  your skills, experience and education etc. Following are the Visa Subclasses that
                  allows you to migrate to Australia and gives you options for Permanent Residency
                  as well.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Accordion padder dataArray={migrationDataArray} />

          <Card>
            <List>
              <ListItem
                onPress={() => Linking.openURL('http://www.graceintlgroup.com')}>
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
