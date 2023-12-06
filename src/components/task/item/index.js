import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const TaskItem = ( props)  =>{ 

  const {item, onHandleSelected} = props;
return (
    <TouchableOpacity key ={ item.id} style={styles.lisItemConteiner}  onPress={() => onHandleSelected (item)} >
               <Text style={styles.listItem} > {item.value}</Text>
             </TouchableOpacity> 

);

}

export default TaskItem;