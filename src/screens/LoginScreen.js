import React, { Component } from 'react';
import { View , ActivityIndicator } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label , Body , Title , Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import {Fire} from './../support/firebase'
import {StackActions , NavigationActions} from 'react-navigation'
import { onLoginSuccess } from './../2.actions'


class LoginScreen extends Component {
  state ={pass : '', confirm : '', loading : false, error : ''}

  componentDidUpdate(){
    if(this.props.user.email){
      const resetAction = StackActions.reset({
        index : 0,
        actions : [NavigationActions.navigate({routeName : 'home'})]          
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  onBtnLoginClick = () => {
    if(this.inputEmail && this.state.confirm && this.state.pass){
      if(this.state.pass == this.state.confirm){
        this.setState({loading : true})
        const auth = Fire.auth()
        auth.createUserWithEmailAndPassword(this.inputEmail,this.state.pass)
        .then((val) => {
          var {uid,email} = val.user
          console.log(uid)
          this.props.onLoginSuccess(email,uid)
        })
        .catch((err) => {
            this.setState({error : err.message , loading : false})
        })
      }else{
        this.setState({error : 'Password and confirm tidak sama'})
      }
      
    }else{
      this.setState({error : 'Isi Semua !!'})
    }
    
  }
  render() {
    const confirm = this.state.confirm == "" ? 
        <Item floatingLabel last>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
        </Item> : 
        this.state.confirm !== this.state.pass ?
        <Item floatingLabel last error>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
          <Icon name='close-circle' />
        </Item> : 
        <Item floatingLabel last success>
          <Label>Confirm Password</Label>
          <Input onChangeText={(val) => this.setState({confirm : val})} />
          <Icon name='checkmark-circle' />
        </Item>
    return (
      <Container>
        <Header>
                <Body>
                    <Title style={{marginLeft : 15}}>Login</Title>
                </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.inputEmail = text } />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText = {(val) => this.setState({pass : val})} />
            </Item>
            {confirm}
            <Button style={{marginTop : 20, marginHorizontal : 15}} onPress={this.onBtnLoginClick} block>
                {
                  this.state.loading 
                  ? 
                  <ActivityIndicator size="small" color="white" />
                  : 
                  <Text>Login</Text>
                }
            </Button>

            <View style={{flexDirection : 'row',justifyContent : 'center', marginTop : 15}}>
                <View style={{height : 60 , width : 60 }}>
                    <Icon name='facebook' size={40} />
                </View>
                <View style={{height : 60 , width : 60  }}>
                    <Icon name='google' size={40} />
                </View>
                <View style={{height : 60 , width : 60  }}>
                    <Icon name='twitter' size={40}/>
                </View>
            </View>

            { 
            this.state.error 
            ?
            <View style={{paddingVertical : 15, backgroundColor : 'red',marginHorizontal : 15 }}>
              <View style={{position : 'absolute' , top : 3, right:3}}>
                <Icon name='close-circle' fontSize={7} color='white' onPress={() => this.setState({error : ''})} />
              </View>
              <Text style={{color : 'white',alignSelf : 'center'}}>{this.state.error}</Text>
            </View>
            :
            null
            }
            <View style={{flexDirection : 'row', justifyContent: "center", marginTop : 30}}>
                <Text onPress={() => this.props.navigation.navigate('register')}>Belum Punya Akun? Register</Text>
            </View>
                
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    user : state.auth
  }
}

export default connect(mapStateToProps , {onLoginSuccess})(LoginScreen);
