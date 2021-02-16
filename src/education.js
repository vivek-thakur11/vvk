import React, { Component } from 'react';
import { Linking } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Accordion,
  List,
  ListItem,
  Right,
  Icon
} from 'native-base';

const educationDataArray = [
  {
    title: 'Student Visa',
    content:
      'Australian student visa allows you to study and work in Australia for a period equal to the duration of your Course plus one month (28 days after the last day of class). You must be over 16 to require this visa. Australian student visas are divided into various sub categories depending on the level of study to be undertaken. There are different subclasses assigned for each sub category which implies that there exist different visas for different levels of education.'
  },
  {
    title: 'Change Course/Admissions',
    content:
      "Studying in Australia is an overwhelming and ever learning experience. But at some stage students may feel to change the course of their study and wish to join a new course. For this they need to get a new offer letter and COE from the course provider. Note: Students must make sure that they are maintaining their Visa Subclass all the time. Also if a student's visa was granted under Streamlined Visa Processing (SVP), it must be maintained under the same conditions for at least one year. \n At Grace Group our qualified and registered Australian Education counselors provides an exceptional service to the students and make the process as simple as ordering a pizza from home."
  },
  {
    title: 'Student Visa Extension',
    content:
      'Studying and learning is an ever going process. Students can extent their Student Visa in order to extend their further stay in the country to study or work. This is when due to some circumstances a student is unable to complete its education in given fixed time of visa. Education department of Grace Group help students in getting student visa extension by enrolling in the same incomplete or new course that student wishes to commence. Is your visa extinguishing?'
  }
];

export default class Education extends Component {
  static navigationOptions = {
    title: 'Education'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Australia is a land of opportunities with people coming from diverse cultures and
                  heritages of different nations. Australia offers a diverse range of study options
                  for international and national students, with more than 1200 institutes and offer
                  22000 courses to choose from an education system that really makes a difference.
                  Enterprise owners around the world prefer Australian graduates and professionals.
                  In Australia students develop capability in critical & creative thinking as they
                  learn to generate & evaluate knowledge, clarifying concepts & ideas, seek
                  possibilities, consider alternatives & solve problems.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Accordion padder dataArray={educationDataArray} />

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
