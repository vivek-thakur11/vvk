import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  Body,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  View,
  Header
} from 'native-base';

export default class Points extends Component {
  static navigationOptions = {
    drawerLabel: 'PR points table',
    drawerIcon: () => <Icon name="ios-grid" />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#2196f3' }}>
          <Left>
            <Icon
              name="menu"
              size={30}
              style={{ marginStart: 10 }}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>PR points</Text>
          </Body>
          <Right />
        </Header>
        <Container>
          <Content padder>
            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Age</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>at least 18 but less than 25 years</Text>
                  </Left>
                  <Right>
                    <Text>25</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>at least 25 but less than 33 years </Text>
                  </Left>
                  <Right>
                    <Text>30</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>at least 33 but less than 40 years </Text>
                  </Left>
                  <Right>
                    <Text>25</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>at least 40 but less than 45 years </Text>
                  </Left>
                  <Right>
                    <Text>15</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>English language skills</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Competent English </Text>
                  </Left>
                  <Right>
                    <Text>0</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Proficient English </Text>
                  </Left>
                  <Right>
                    <Text>10</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Superior English </Text>
                  </Left>
                  <Right>
                    <Text>20</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Overseas skilled employment</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Less than 3 years </Text>
                  </Left>
                  <Right>
                    <Text>0</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 3 but less than 5 years </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 5 but less than 8 years </Text>
                  </Left>
                  <Right>
                    <Text>10</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 8 years </Text>
                  </Left>
                  <Right>
                    <Text>15</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Australian skilled employment</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Less than 1 year </Text>
                  </Left>
                  <Right>
                    <Text>0</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 1 but less than 3 years </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 3 but less than 5 years </Text>
                  </Left>
                  <Right>
                    <Text>10</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 5 but less than 8 years </Text>
                  </Left>
                  <Right>
                    <Text>15</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>At least 8 years </Text>
                  </Left>
                  <Right>
                    <Text>20</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Educational qualifications</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      A Doctorate from an Australian educational institution or a Doctorate from
                      another educational institution, that is of a recognised standard.
                    </Text>
                  </Left>
                  <Right>
                    <Text>20</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      At least a Bachelor degree from an Australian educational institution or at
                      least a Bachelor qualification, from another educational institution, that is
                      of a recognised standard.
                    </Text>
                  </Left>
                  <Right>
                    <Text>15</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      A diploma or trade qualification from an Australian educational institution.
                    </Text>
                  </Left>
                  <Right>
                    <Text>10</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      Attained a qualification or award recognised by the relevant assessing
                      authority for your nominated skilled occupation as being suitable for that
                      occupation.
                    </Text>
                  </Left>
                  <Right>
                    <Text>10</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Specialist education qualification</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      A Masters degree by research or a Doctorate degree from an Australian
                      educational institution that included at least 2 academic years study in a
                      relevant field.
                    </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Australian study requirement</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Meet the Australian study requirement</Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Professional Year in Australia</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>Completion of a Professional Year in Australia</Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Credentialled community language</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      Hold a recognised qualification in a credentialled community language
                    </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Study in regional Australia</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      You must have at least 1 degree, diploma or trade qualification from an
                      Australian educational institution that satisfies the Australian study
                      requirement obtained while living and studying in an eligible area of regional
                      Australia
                    </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
                  </Right>
                </ListItem>
              </List>
            </Card>

            <Card>
              <List>
                <ListItem itemDivider>
                  <Left>
                    <Text style={{ fontWeight: 'bold' }}>Partner skills</Text>
                  </Left>
                  <Right>
                    <Text style={{ fontWeight: 'bold' }}>Points</Text>
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>
                      Your spouse or de facto partner must also be an applicant for this visa and
                      meet age, English and skill criteria
                    </Text>
                  </Left>
                  <Right>
                    <Text>5</Text>
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
