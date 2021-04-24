import React,{Component} from 'react';
import {TextInput ,TouchableOpacity ,Text ,View ,KeyboardAvoidingView ,StyleSheet ,Alert ,FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SearchScreen extends React.Component{
   
   constructor(props){
       super(props)

       this.state={
           allMemories:[],
           search:'',
       }
   }

   searchMemories = async(text)=>{
       const memory = await db.collection("Memories").where('title','==',text).get()
       memory.docs.map((doc)=>{
           this.setState({
               allMemories:[...this.state.allMemories,doc.data()]
           })
       })
   }

    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.searchBar}>
                    <TextInput style={styles.bar}
                    placeholder = "Enter Your Title"
                    onChangeText = {(text)=>{
                        this.setState({search:text}) }}/>

                <TouchableOpacity style={styles.searchButton}
                    onPress={()=>{
                        this.searchReminders(this.state.search)
                    }}>
                        <Text style={styles.searchButton}>Search</Text>
                    </TouchableOpacity>
                </View>

            <FlatList data={this.state.allMemories}
            renderItem = {({item})=>(
                <View style={{borderBottomWidth : 2}}>
                    <Text>{"title"+item.title}</Text>
                    <Text>{"date"+item.date}</Text>
                    <Text>{"reminder"+item.reminder}</Text>
                </View>
            )}
            keyExtractor={(item,index)=>index.toString}
            />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20
    },
    searchBar:{
      flexDirection:'row',
      height:40,
      width:'auto',
      borderWidth:0.5,
      alignItems:'center',
      backgroundColor:'grey',
  
    },
    bar:{
      borderWidth:2,
      height:30,
      width:300,
      paddingLeft:10,
    },
    searchButton:{
      borderWidth:1,
      height:30,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'green'
    }
  })

