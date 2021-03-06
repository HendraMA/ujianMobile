import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between',marginTop : 100, marginHorizontal :20 }}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('add')} style={{height : 100 , width : 100 , borderWidth : 3 , borderColor : 'orange' }}>
                        <Text>Add Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('edit')} style={{height : 100 , width : 100 , borderWidth : 3 , borderColor : 'orange' }}>
                        <Text>Edit Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('list')} style={{height : 100 , width : 100 , borderWidth : 3 , borderColor : 'orange' }}>
                        <Text>List Employee</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('crud')} style={{height : 100 , width : 100 , borderWidth : 3 , borderColor : 'orange' }}>
                        <Text>CrudeScreen</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});