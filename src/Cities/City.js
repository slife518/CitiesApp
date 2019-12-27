import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    TouchableWithoutFeedback,
    TextInput, 
    TouchableOpacity,
    Platform
} from 'react-native'

import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class City extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>

                <ScrollView contentContainerStyle={[!city.locations.length && {
                    flex: 1
                }]}>
                    <View style={{styles}}>

                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    }, 
    locationContainer:{
        padd 
    }
})