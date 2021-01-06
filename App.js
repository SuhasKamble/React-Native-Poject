import React, { useState } from 'react'
import {View, Text,Image, SafeAreaView,StyleSheet,FlatList,Alert} from 'react-native'
// import { uuid } from 'uuidv4'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ListItem from './components/ListItem'



const App = ()=>{
  const [items,setItems] = useState([
    {id:Math.random()*1000,text:"Milk"},
    {id:Math.random()*1000,text:"Eggs"},
    {id:Math.random()*1000,text:"Bread"},
    {id:Math.random()*1000,text:"Juice"},
  ])

  const deleteItem=(id)=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id!=id)
    })
}
  const addItem=(text)=>{
    if(!text){
        Alert.alert("Error","Please enter a text")
    }
    else{
      setItems(prevItems=>{
        return [{id:Math.random()*1000,text},...prevItems]
      })
    }
   
  }
  return(
    
    <View style={styles.container} >
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item})=>(

          <ListItem item={item} deleteItem={deleteItem}/>
        
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
  }
})

export default App;