import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Text,
  Right,
  Header,
  List,
  ListItem,
  Left,
  View
} from 'native-base';

export default class Contact extends Component {
  static navigationOptions = {
    drawerLabel: 'Contact us',
    drawerIcon: () => <Icon name="md-contacts" />
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#ffc107' }}>
          <Left>
            <Icon
              name="menu"
              size={30}
              style={{ marginStart: 10 }}
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>Contact Us</Text>
          </Body>
          <Right />
        </Header>
        <Container>
          <Content padder>
            <Card>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Icon name="ios-navigate" />
                  </Left>
                  <Body>
                    <Text>Address</Text>
                    <Text note numberOfLines={2}>
                      Level 3, 282 Collins St., Melbourne, VIC - 3000
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Icon type="MaterialCommunityIcons" name="phone" />
                  </Left>
                  <Body>
                    <Text>Telephone</Text>
                    <Text note numberOfLines={1}>
                      (03) 96700017
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Icon type="Entypo" name="mobile" />
                  </Left>
                  <Body>
                    <Text>Mobile No.</Text>
                    <Text note numberOfLines={1}>
                      0420 998 154
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Icon type="MaterialCommunityIcons" name="email" />
                  </Left>
                  <Body>
                    <Text>Email ID</Text>
                    <Text note numberOfLines={1}>
                    melbourne@graceintlgroup.com
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Icon type="Foundation" name="web" />
                  </Left>
                  <Body>
                    <Text>Website</Text>
                    <Text note numberOfLines={1}>
                      www.graceintlgroup.com
                    </Text>
                  </Body>
                  <Right />
                </ListItem>
              </List>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}
