
import { createStackNavigator,createAppContainer,createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/RegisterPage';
import EmployeeDetail from '../screens/EmployeeDetailScreen';
import MenuAccountSetting from '../screens/MenuAccountSetting'
import EditEmployeeScreen from '../screens/EditEmployeeScreen';
import Menu from '../screens/MenuStack';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';
import ListEmployeeScreen from '../screens/ListEmployeeScreen';
import CrudeScreen from '../screens/CrudScreen'

const AccountSetting = createStackNavigator({
    menu : MenuAccountSetting,

})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    add : AddEmployeeScreen,
    edit : EditEmployeeScreen,
    list : ListEmployeeScreen,
    detail : EmployeeDetail,
    crud : CrudeScreen,


}, {
    headerMode : 'none'
})

StackBeranda.navigationOptions = ({navigation}) => {
    let tabBarVisible = false

    let routeName = navigation.state.routes[navigation.state.index].routeName
    if(routeName == 'MenuStack'){
        tabBarVisible = true
    }
    return {
        tabBarVisible
    }
     
}

const HomeTab = createMaterialTopTabNavigator({
    home : StackBeranda,
    account : AccountSetting
} , 
{
    tabBarPosition : 'bottom',
    swipeEnabled : false
}) 

const StackRoot = createStackNavigator({
    login : LoginScreen,
    register : Register,
    home : HomeTab
},{
    headerMode : 'none'
})

export const StackContainer = createAppContainer(StackRoot)