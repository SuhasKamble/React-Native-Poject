import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text ,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
// import { Ionicons } from '@expo/vector-icons';


const AddItem = ({addItem}) => {
    const [text,setText] = useState('')

   
    return (
        <View>
               <TextInput placeholder="Add Item..." style={styles.input} onChangeText={e=>setText(e)} />
               <TouchableOpacity onPress={()=>addItem(text)} style={styles.btn}>
                    <Text style={styles.btnText}><Ionicons name="md-add-circle" size={20}/> Add Item</Text>
               </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16,

    },
    btn:{
        backgroundColor:'#c2bad8',
        padding:9,
        margin:5,

    }
    ,
    btnText:{
        color:'darkslateblue',
        fontSize:20,
        textAlign:'center',
    }


})

export default AddItem
