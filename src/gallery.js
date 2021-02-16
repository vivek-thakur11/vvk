import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Text, Icon, Right, Left, View, Header } from 'native-base';
import { Image, Modal, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const images = [
  {
    props: {
      source: require('../assets/photo1.jpg')
    },
    freeHeight: true
  },
  {
    props: {
      source: require('../assets/photo2.jpg')
    },
    freeHeight: true
  },
  {
    props: {
      source: require('../assets/photo3.jpg')
    },
    freeHeight: true
  },
  {
    props: {
      source: require('../assets/photo4.jpg')
    },
    freeHeight: true
  }
];

export default class Gallery extends Component {
  static navigationOptions = {
    drawerLabel: 'Gallery',
    drawerIcon: () => <Icon name="albums" />
  };

  constructor() {
    super();

    this.state = {
      index: 0,
      modalVisible: false
    };
  }

  render() {
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          transparent
          onRequestClose={() => this.setState({ modalVisible: false })}>
          <ImageViewer
            imageUrls={images}
            index={this.state.index}
            onMove={data => console.log(data)}
          />
        </Modal>
        <Header style={{ backgroundColor: '#ff9800' }}>
          <Left>
            <Icon
              name="menu"
              size={30}
              style={{ marginStart: 10 }}
              backgroundColor="#000000"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>Gallery</Text>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Content padder>
            <Card>
              <TouchableHighlight>
                <Image source={photo1} style={{ height: 200, width: null, flex: 1 }} />
              </TouchableHighlight>
              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace client meeting</Text>
              </CardItem>
            </Card>
            <Card>
              <TouchableHighlight>
                <Image source={photo2} style={{ height: 200, width: null, flex: 1 }} />
              </TouchableHighlight>

              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Chairman</Text>
              </CardItem>
            </Card>
            <Card>
              <TouchableHighlight>
                <Image source={photo3} style={{ height: 200, width: null, flex: 1 }} />
              </TouchableHighlight>

              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace Award</Text>
              </CardItem>
            </Card>
            <Card>
              <TouchableHighlight>
                <Image source={photo4} style={{ height: 200, width: null, flex: 1 }} />
              </TouchableHighlight>

              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace Discounts</Text>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </View>
    );
  }
}
