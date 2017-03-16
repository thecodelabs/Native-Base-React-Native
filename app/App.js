import React, { Component } from 'react';
import { Container, Button, Body, Icon, Header, Tabs, Tab, Left, Right, Text } from 'native-base';
import { StyleSheet } from 'react-native';

import Chats from './tabs/Chats';
import Calls from './tabs/Calls';
import Status from './tabs/Status';

export default class App extends Component {
	render() {
		return (
				<Container>
					<Header hasTabs style={StyleSheet.flatten(styles.header)}>
						<Left>
                <Text style={StyleSheet.flatten(styles.header_text)}>WhatsApp</Text>
            </Left>
            <Right>
            	<Button transparent>
            		<Icon style={StyleSheet.flatten(styles.header_content)} ios='ios-search' android='md-search'/>
            	</Button>
            	<Button transparent>
            		<Icon style={StyleSheet.flatten(styles.header_content)} name='dots-vertical'/>
            	</Button>
            </Right>
					</Header>
					 <Tabs>
              <Tab 
              	tabStyle={{backgroundColor: '#004B49'}} 
              	textStyle={{color: '#26A498', fontWeight:'bold', fontSize: 13}} 
              	activeTabStyle={{backgroundColor: '#004B49'}}
              	activeTextStyle={{color: '#fff', fontSize: 13}}
              	heading="CHATS">
                  <Chats />
              </Tab>
              <Tab
              	tabStyle={{backgroundColor: '#004B49'}} 
              	textStyle={{color: '#26A498', fontWeight:'bold', fontSize: 13}} 
              	activeTabStyle={{backgroundColor: '#004B49'}}
              	activeTextStyle={{color: '#fff', fontSize: 13}} 
              	heading="STATUS">
                  <Status />
              </Tab>
              <Tab 
              	tabStyle={{backgroundColor: '#004B49'}} 
              	textStyle={{color: '#26A498', fontWeight:'bold', fontSize: 13}} 
              	activeTabStyle={{backgroundColor: '#004B49'}}
              	activeTextStyle={{color: '#fff', fontSize: 13}}
              	heading="CALLS">
                  <Calls />
              </Tab>
          </Tabs>
				</Container>
		);
	}
}
const styles = StyleSheet.create({
	header: {
		backgroundColor: '#004B49'
	},
	header_text: {
		fontSize: 17,
		color: '#fff'
	},
	header_content: {
		color: '#fff',
		fontSize: 18
	},
});

