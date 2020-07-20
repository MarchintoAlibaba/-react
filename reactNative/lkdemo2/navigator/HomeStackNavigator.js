import {createStackNavigator} from 'react-navigation-stack'

import LKHome from '../pages/LKHome';
import LKHomeDetail from '../pages/LKHomeDetail';

const HomeRootStack = createStackNavigator({
    Home: LKHome,
    HomeDetail: LKHomeDetail
}, {
    initialRouteName: "Home",
    navigationOptions: ({navigation})=>({
        tabBarVisible: navigation.state.index === 0,
    })
},);

export default HomeRootStack;
