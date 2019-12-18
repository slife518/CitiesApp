//  모든 내비게이션 설정 정보 
import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'

import {color, colors} from './theme'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from  'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const CitiesNav = createStackNavigator({
        Cities : {screen : Cities}, 
        City : {screen : City}
    }, 
    {
        navigationOptions:{
            headerStyfle:{
                backgroundcolor : colors.primary
            },
            headerTintColor:'#fff'
        }
})



