import React from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    Scrollview
} from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors} from '../theme'

export default class Cities extends React.Component{
    static navigationOptions = {
        title : 'Cities',
        headerTitleStyle:{
            color : 'white', 
            fontSize: 20,
            fontWeight : '400'
        }
    }

    navigate = (item) =>{
        this.props.navigation.navigate('City', {city:item})
    }

    render(){
        const{screenProps:{cities}} = this.props
        return(
            <Scrollview contentContainerStyle={[!cities.length && {flex : 1}]}>

                <View style={[!cities.length && { justifyContent: 'center', flex: 1}]}>
                    {
                        !cities.length && <CenterMessage message='No saved cities!' />}
                    {
                        cities.map((item, index) => (
                            <TouchableWithoutFeedback onPress={()=>this.navigate(item)} key={index}>
                                <View style={styles.cityContainer}>
                                    <Text style={styles.city}>{item.city}</Text>
                                    <Text style={styles.country}>{item.country}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </View>
            </Scrollview>
        )
    }
}

const styles = StyleSheet.create({
    cityContainer:{
        paddding : 10, 
        borderBoottomWidth : 2, 
        borderBottomColor: colors.primary
    }, 
    city:{
        fontSize: 20, 
    }, 
    country:{
        color : 'rgba(0,0,0,.5)'
    },


})