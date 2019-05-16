import React, { Component } from 'react';
import { View } from 'react-native'
import {Text ,Container, Header, Content, Form, Item, Input, Label,Button ,Picker,Left,Right } from 'native-base';
export default class FloatingLabelExample extends Component {
    state = {
        selected : 'Monday',
        data : {
          1 : {nama : 'Fikri' , shift : 'Tue' , telp : '082227492381'},
          2 : {nama : 'Seto' , shift : 'Wed' , telp : '082227492381'},
          3 : {nama : 'Andi' , shift : 'Sat' ,telp : '082227492381'},
          4 : {nama : 'Steve' , shift : 'Sun', telp : '082227492381'},
        } , 
        idEdit : null}
  render() {
    return (
      <Container>
        <Header />
        <Content>
            <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                <View style={{paddingTop : 15, paddingLeft : 15}}>
                    <Text> Select Data </Text>
                </View>
                <View>
                    <Picker 
                    style={{width : 200}} 
                    mode ='dropdown' 
                    selectedValue={this.state.idEdit}
                    onValueChange={(val) => this.setState({idEdit : val}) } >
                        <Picker.Item label='Select Name' value={null} />
                        {
                            Object.keys(this.state.data).map(val => {
                                return(
                                    <Picker.Item label={this.state.data[val].nama} value={val} />
                                )
                            })
                        }
                    </Picker>
                </View>
            </View>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input defaultValue={this.state.idEdit ? this.state.data[this.state.idEdit].nama : null} />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input  defaultValue={this.state.idEdit ? this.state.data[this.state.idEdit].telp : null} />
            </Item>
            <Item last>
                <Left>
                    <Label>Select Day</Label>
                </Left>
                <Right>
                    <Picker 
                        style={{ width:120}}  
                        mode="dropdown"
                        selectedValue={this.state.idEdit? this.state.data[this.state.idEdit].shift : this.state.selected}
                        onValueChange={(value) => this.setState({selected : value})}>
                    <Picker.Item label='Monday' value='Mon' />
                    <Picker.Item label='Tuesday' value='Tue' />
                    <Picker.Item label='Wednesday' value='Wed' />
                    <Picker.Item label='Thursday' value='Thu' />
                    <Picker.Item label='Friday' value='Fri' />
                    <Picker.Item label='Saturday' value='Sat' />
                    <Picker.Item label='Sunday' value='Sun' />
                    </Picker>
                </Right>
            </Item>
            <Button style={{marginTop : 20, marginHorizontal : 15}} block>
                <Text>Save</Text>
            </Button>
            <Button style={{marginTop : 20, marginHorizontal : 15}} block>
                <Text>Edit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
