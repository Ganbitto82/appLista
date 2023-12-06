import React from 'react';
import {View,Text, Button, Modal} from 'react-native';
import {styles} from './styles';



const ModalItem = props => {
  const {modalVisible,onHandleCancel, onHandleDelete ,selectedTask } =props
 
  return (
    <Modal  visible={modalVisible} animationType ='fade'>
    <View style={styles.modalContainer}>
      <Text style ={styles.modalTitle}>Task Detail </Text>           
    
         <View style={styles.modalDetailConteiner}>
         <Text style={styles.modalDetailText}>Estas seguro que quieres eliminar este elemento de la lista ?</Text>
         <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
         
          <View style={styles.modalButtonContainer}>
            <Button 
               title='Cancelar'
               color= ' #3C4F76'
               onPress={onHandleCancel}
             />
             <Button 
              title='Eliminar'
              color =' #3C4F76'
              onPress={onHandleDelete}
              />
         </View>    
     </View>
    </View>
 </Modal>

  )



};

export default ModalItem;
