import React, { Component } from 'react';
import { StyleSheet, Modal } from 'react-native';
import { 
	Container, 
	Left, 
	Body, 
	Right, 
	List,
	ListItem, 
	Thumbnail, 
	Badge,
	View, 
	Text } from 'native-base';

import { data } from '../data';

export default class Chats extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	modalVisible: false
	  };
	}

	setModalVisible(person, visible) {
    this.setState({modalVisible: visible});
  }

	render() {
		return (
			<Container>
				<List
					dataArray={data} 
					renderRow={(person) =>
					<ListItem 
						onPress={(person) => this.setModalVisible(person, true)} 
						thumbnail 
						style={StyleSheet.flatten(styles.list_item)}>
						<Left>
							<Thumbnail source={require('../thumb_nail.jpg')} />
						</Left>
						{
							person.read?
								<Body>
									<Text>{person.name}</Text>
									<Text note>{ ((person.text.split(' ')).length >= 7) ? 
										(((person.text).substring(0,30-3)) + '...') : 
										person.text }
									</Text>
								</Body>
							:
								<Body>
									<Text>{person.name}</Text>
									<Text note>{ ((person.text.split(' ')).length > 12) ? 
										(((person.text).substring(0,30-3)) + '...') : 
										person.text }
									</Text>
								</Body>
						}
						{
							!person.read ?
							<Right>
								<Text style={StyleSheet.flatten(styles.time)} note>{person.time}</Text>
								<Badge success style={StyleSheet.flatten(styles.badge)}>
									<Text>1</Text>
								</Badge>
							</Right>
							:
							<Right>
								<Text style={StyleSheet.flatten(styles.time)} note>{person.time}</Text>
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
	}
}
