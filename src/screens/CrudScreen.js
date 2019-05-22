
import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

class App extends React.Component {

    componentWillMount() {

        
        var config = {
            apiKey: "AIzaSyCCrQklY2JOaLbyriwCcnyW76SBRP_jh94",
            authDomain: "reactnativedatabase-29573.firebaseapp.com",
            databaseURL: "https://reactnativedatabase-29573.firebaseio.com",
            projectId: "reactnativedatabase-29573",
            storageBucket: "",
            messagingSenderId: "1003641028384"
        };
        firebase.initializeApp(config);

       
        firebase.database().ref('users').on('value', (data) => {
            console.log(data.toJSON());
        })

        
        setTimeout(() => {
            firebase.database().ref('users/004').set(
                {
                    name: 'randi',
                    age: 22
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);

        
        firebase.database().ref('users/004').update({
            name: ''
        });

        
        firebase.database().ref('users/004').remove();

    }

    render() {
        return (
            <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    
                </Text>
            </View>
        )
    }
}

export default App;
