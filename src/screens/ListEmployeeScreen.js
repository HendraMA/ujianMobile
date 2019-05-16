import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, List, ListItem, Text,Left , Right } from 'native-base';


export default class ListEmployee extends Component {
    state = { data : {
        1 : {nama : 'Fikri' , shift : 'Tue', phone : '082226840026'},
        2 : {nama : 'Seto' , shift : 'Wed', phone : '082223440026'},
        3 : {nama : 'Andi' , shift : 'Sat', phone : '082226123026'},
        4 : {nama : 'Steve' , shift : 'Sun', phone : '082226843456'},
    }   
    }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            { Object.keys(this.state.data).map(val => {
                return(
                    <ListItem onPress={() => this.props.navigation.navigate('detail',{
                      nama : this.state.data[val].nama,
                      shift : this.state.data[val].shift,
                      phone : this.state.data[val].phone
                    })}>
                        <Left>
                            <Text>{this.state.data[val].nama}</Text>
                        </Left>
                        <Right>
                            <Icon name='chevron-right' size={24}/>
                        </Right>
                    </ListItem>
                )
            })
                
            }
          </List>
          
        </Content>
      </Container>
    );
  }
}