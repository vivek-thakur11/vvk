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

export default class ProfessionalYear extends Component {
  static navigationOptions = {
    title: 'Professional Year'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Professional Year</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The Professional Year Program (PYear) is a job-readiness program that bridges the
                  gap between full-time study and professional employment in Australia.{'\n'}
                </Text>
                <Text>
                  PROFESSIONAL YEAR PROGRAM ACS's PYear Program gives international ICT graduates
                  from Australian teritary providers the practical job skills and training needed to
                  enhance their career prospects. A practical pathway from university to employment,
                  PYear ensures that graduates are job-ready.{'\n'}
                </Text>

                <Text>
                  GRADUATES MAY CLAIM FIVE (5) POINTS UNDER AN ELIGIBLE SKILLED OCCUPATION
                  Completion of this program may provide the PYear graduate with five (5) points
                  under an eligible skilled occupation, as specified by the Department of Home
                  Affairs (DHA).
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <List>
              <ListItem
                onPress={() =>
                  Linking.openURL(
                    'https://www.acs.org.au/cpd-education/professional-year-program.html'
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
