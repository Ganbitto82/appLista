import React from "react";
import { FlatList } from "react-native"; 
import {styles} from './styles';

 const ListItem = (props) => { 
    
    const {taskList, renderItem ,item } = props;
     console.log(item.id);
      //item = item;
      
    return (
       
        <FlatList 
        style = {styles.listContainer}
               data={taskList}
               renderItem = {renderItem}
               keyExtractor = {item}
               
            />
    )
}

export default ListItem;