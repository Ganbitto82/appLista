import {  View ,Text, FlatList} from 'react-native';
import  { styles } from './styles'
import { useState } from 'react';
import { AddItem, TaskItem , ModalItem, ListItem} from './components/index';

export default function App() {
  const [task, setTask] = useState ('');
  const [taskList, setTaskList] = useState ([]);
  const [modalVisible,setModalVisible] = useState ( false);
  const [selectedTask, setSelectedTask] = useState (null);

  const onHandleTask = () => {
 
    setTaskList ((prevTaskList) => [...prevTaskList , {id: Math.random().toString() ,  value:task}]);
    setTask ('');



  };
  const onHandleSelected = (item) => {
    setSelectedTask(item);
   // console.log(item);
    setModalVisible(!modalVisible);

  };

  const renderItem = ({item})=> (
   <TaskItem item={item} onHandleSelected ={onHandleSelected}/>

   )

   const onHandleCancel = () => {
    setModalVisible(!modalVisible);

   };
   const onHandleDelete = () => {
    setTaskList ((prevTaskList) => prevTaskList.filter((item)=> item.id != selectedTask.id),
   
   );
   
   setModalVisible(!modalVisible);
  };

  const onHandleChange = (text) => setTask(text) ;

  return (
    <View style={styles.container}>
     
     <AddItem 
       task ={task} 
       onHandleTask ={onHandleTask} 
       onHandleChange={onHandleChange}
       />
       <View style={styles.listContainer}>
       <Text style={styles.listTitle}> Lista de contenido</Text>
       <View>
         
       
             <FlatList 
               style = {styles.listContainer}
               data={taskList}
               renderItem = {renderItem}
               keyExtractor = {item =>item.id}
               
            />
            
       <ModalItem 
        modalVisible= {modalVisible} 
        onHandleCancel={onHandleCancel} 
        onHandleDelete={onHandleDelete}
        selectedTask ={selectedTask}
      />
          </View>
        </View>
     </View>         
  );
}