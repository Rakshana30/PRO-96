import React,{Components} from 'react';
import {Text ,StyleSheet ,View ,TouchableOpacity ,KeyboardAvoidingView ,Alert ,TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SettingScreen extends Component{
    constructor(){
        super()

        this.state={
            firstName : "",
            lastName : "",
            docId : ''
        }
    }

    getUserDetail = ()=>{
        var email = firebase.auth().currentUser.email
        db.collection('users').where('emailId','==',email).get()
        .then(snapShot =>{
            snapShot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    firstName : data.firstName,
                    lastName : data.lastName,
                    docId : doc.id
                })
            })
        })
    }

    updateUserDetails =()=>{
        db.collection('users').doc(this.state.docId).update({
            "firstName" : this.state.firstName,
            "lastName" : this.state.lastName
        })
        Alert.alert("Profile updated successfully")

    }

    componentDidMount(){
        this.getUserDetail()
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.formTextInput}
                placeholder = {"First Name"}
                maxLength = {8}
                onChangeText = {(text)=>{
                    this.setState({
                        firstName : text })
                }}
                value = {this.state.firstName} />

<TextInput
                style={styles.formTextInput}
                placeholder = {"Last Name"}
                maxLength = {8}
                onChangeText = {(text)=>{
                    this.setState({
                        lastName : text })
                }}
                value = {this.state.lastName} />

                <TouchableOpacity style={styles.button}
                onPress = {()=>{
                    this.updateUserDetails()
                }}
                ></TouchableOpacity>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    container : {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    formContainer:{
      flex:1,
      width:'100%',
      alignItems: 'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#91d3ff',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:'#2277ff',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
    },
    buttonText:{
      fontSize:25,
      fontWeight:"bold",
      color:"#fff"
    }
  })
  