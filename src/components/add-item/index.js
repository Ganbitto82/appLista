import React from 'react';
import { styles } from './styles';
import { View ,TextInput,Button } from  'react-native';

const AddItem = props => {
   const  {task , onHandleTask, onHandleChange} =props
   return (
    <View style ={styles.inputContainer}>
     <TextInput 
      style={styles.input}
      value={task} 
      placeholder = "Introduzca un Item"
      onChangeText = {onHandleChange} 

      /> 
     <Button disabled= {!task} title='Agregar' color = '#A4ABB7' onPress={onHandleTask}/>
   </View>

   )

};

export default AddItem;