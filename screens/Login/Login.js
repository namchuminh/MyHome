import React from "react"
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';
import {bgTop, primary, inactive, h1, h4, h3, h5} from '../../constants/index'
function Login(props){
    return(
        <ImageBackground source={bgTop} style={Styles.topBg}>
            <View style={Styles.container}>
                <View style={Styles.top}>
                        
                        <Text style={{
                            marginTop: 130,
                            color: 'white',
                            fontSize: 30,
                            alignSelf: 'center',
                            fontWeight: 'bold'
                        }}>
                            <Icon name="home" color="white" size={30} style={{
                        }} /> MY HOME
                        </Text>
                        <Text style={{
                            alignSelf: 'center',
                            marginTop: 10,
                            fontSize: 10,
                            color: 'white',
                        }}>Family is number one!</Text>
                </View>
                <View style={Styles.mid}>
                    <View style={{
                        marginHorizontal: 30,
                    }}>
                        <Text style={{
                            marginTop: 35,
                            color: 'black',
                            fontSize: h1,
                            fontWeight: '400'
                        }}>Welcome</Text>
                        <View style={{
                            marginTop: 20
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Icon name="user" size={20} color={inactive} style={{
                                    margin: 5
                                }} />
                                <TextInput placeholder="Email" style={{
                                    height: 35,
                                    marginStart: 5,
                                    fontSize: h4
                                }} />
                            </View>
                            <View style={{
                                    width: '100%',
                                    borderColor: inactive,
                                    borderWidth: 0.5
                                }}/>

                            
                            <View style={{
                                flexDirection: 'row',
                                marginTop: 20
                            }}>
                                <Icon name="key" size={20} color={inactive} style={{
                                    margin: 5
                                }} />
                                <TextInput secureTextEntry placeholder="Password" style={{
                                    height: 35,
                                    marginStart: 5,
                                    fontSize: h4
                                }} />
                            </View>
                            <View style={{
                                    width: '100%',
                                    borderColor: inactive,
                                    borderWidth: 0.5
                                }}/>
                        </View>
                    </View>
                </View>
                <View style={Styles.bottom}>
                    <View style={{
                        marginHorizontal: 30
                    }}>
                        <TouchableOpacity style={Styles.buttonSignIn}>
                            <Text style={{
                                color: primary,
                                fontSize: h3,
                                fontWeight: '500'
                            }}>Sign in</Text>
                        </TouchableOpacity>
                        <Text style={{
                            color: inactive,
                            alignSelf: 'center',
                            marginTop: 15,
                            fontSize: h4
                        }}>Forgot passwrod?</Text>
                        <TouchableOpacity style={Styles.buttonSignUp}>
                            <Text style={{
                                color: 'white',
                                fontSize: h3,
                                fontWeight: '500'
                            }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 40,
    },
    mid: {
        flex: 30,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 10
    },
    bottom: {
        flex: 30,
        backgroundColor: 'white',
    },
    topBg: {
        flex: 1,
        width: '100%'
    },
    buttonSignIn: {
        alignItems: "center",
        padding: 11,
        height: 55,
        borderRadius: 10,
        borderColor: primary,
        borderWidth: 2
    },

    buttonSignUp: {
        marginTop: 30,
        alignItems: "center",
        padding: 11,
        height: 55,
        backgroundColor:primary,
        borderRadius: 10,
        borderColor: primary,
        borderWidth: 2
    },
})

export default Login;