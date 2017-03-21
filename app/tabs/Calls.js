import React, { Component } from 'react';
import { StyleSheet, Modal, Image } from 'react-native';
import { 
	Container,
	Content, 
	Left, 
	Button,
	Icon,
	Body, 
	Right, 
	List,
	ListItem, 
	Thumbnail, 
	Badge,
	View, 
	Header,
	Text } from 'native-base';

import { data } from '../data';

export default class Calls extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	modalVisible: false,
	  	person: {}
	  };
	}

	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	parsePerson(person, boolean) {
		this.setModalVisible(boolean);
		this.setState({person});
	}
	render() {
		return (
			<Container>
				<List
					dataArray={data} 
					renderRow={(person) =>
					<ListItem 
						onPress={() => this.parsePerson(person, true)} 
						thumbnail 
						style={StyleSheet.flatten(styles.list_item)}>
						{
							person.call !== undefined &&
							<Left>
								<Thumbnail source={require('../thumb_nail.jpg')} />
							</Left>
						}	
						{
							person.call !== undefined &&
							<Body>
								<Text>{person.name}</Text>
								<Text note>{person.call}</Text>
							</Body>		
						}
						{
							person.call !== undefined &&
							<Right>
								<Button transparent><Icon style={{color: '#5cb85c'}} name="call"/></Button>
							</Right>	
						}

					</ListItem>
				}/>		
				<Modal
					animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(!this.state.modalVisible) }
         >
				
				</Modal>
			</Container>
		);
	}
}

const styles = {
	list: {
		flex: 1
	},
	list_item: {
		marginRight: 15
	},
	time: {
		fontSize: 11,
		marginTop: -12,
		color: 'rgba(0,0,0,0.5)'
	},
	badge: {
		height: 28,
		marginBottom: -20,
		width:28
	},
	userIcon: {
		height:45,
		width: 45
	}
}
