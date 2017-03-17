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

export default class Chats extends Component {
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
				<Header>
					<Left style={{flex: 1, flexDirection: 'row'}}>
						<Button transparent onPress={()=> this.setModalVisible(!this.state.modalVisible)}>
							<Icon name="arrow-back"/>
						</Button>
						<Button transparent>
							<Thumbnail style={StyleSheet.flatten(styles.userIcon)} source={require('../thumb_nail.jpg')} />
							<Text style={{marginLeft: 5, paddingBottom: 5}}>{this.state.person.name}</Text>
						</Button>

					</Left>
					<Right>
						<Button transparent>
							<Icon name="call"/>
						</Button>
						<Button transparent>
							<Icon name="attach" style={{ transform: [{rotate: '-30deg'}] }}/>
						</Button>
						<Button transparent>
							<Icon name="menu"/>
						</Button>
					</Right>
				</Header>
				<Content>
					<Image source={require('../bg_chats.jpg')} style={StyleSheet.flatten(styles.chats_bg)}/>
				</Content>
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
	chats_bg: {
		flex: 1,
		resizeMode: 'cover'
	},
	userIcon: {
		height:45,
		width: 45
	}
}
