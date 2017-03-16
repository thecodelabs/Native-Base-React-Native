import React, { Component } from 'react';
import { Container, Left, Body, Right, ListItem, Thumbnail, Badge, Text } from 'native-base'
import { StyleSheet, Modal } from 'react-native';
import { data } from '../data';

export default class Chats extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	modalVisible: false
	  };
	}

	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render() {
		return (
			<Container>
						{
							data.map((person, i)=>{
								return(
									<ListItem 
										onPress={() => this.setModalVisible(true)} 
										key={i} 
										thumbnail 
										style={StyleSheet.flatten(styles.list)}>
										<Left>
											<Thumbnail source={require('../thumb_nail.jpg')} />
										</Left>
										{
											person.read?
												<Body>
													<Text>{person.name}</Text>
													<Text note>{ ((person.text).length > 30) ? 
  													(((person.text).substring(0,30-3)) + '...') : 
    												person.text }
    											</Text>
												</Body>
											:
												<Body>
													<Text>{person.name}</Text>
													<Text note>{ ((person.text).length > 30) ? 
  													(((person.text).substring(0,30-3)) + '...') : 
    												person.text }
    											</Text>
												</Body>
										}
										{
											!person.read ?
											<Right>
												<Text style={StyleSheet.flatten(styles.time)}>{person.time}</Text>
												<Badge success style={StyleSheet.flatten(styles.badge)}>
													<Text>1</Text>
												</Badge>
											</Right>
											:
											<Right>
												<Text style={StyleSheet.flatten(styles.time)}>{person.time}</Text>
											</Right>
										}
									</ListItem>
								)
							})
						}
						<Modal
						animationType={"slide"}
	          transparent={false}
	          visible={this.state.modalVisible}
	          onRequestClose={() => this.setModalVisible(!this.state.modalVisible) }>
							
						</Modal>
			</Container>
		);
	}
}

const styles = {
	list: {
		marginRight: 15
	},
	time: {
		fontSize: 11,
		marginTop: -12,
		color: 'rgba(0,0,0,0.5)'
	},
	badge: {
		height: 25,
		marginBottom: -15,
		width:25
	}
}
