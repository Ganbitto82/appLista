import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


modalContainer:{
    backgroundColor: '#D6DDEA',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop :50,
    padding: 20,
},
modalTitle:{
    
    paddingHorizontal : 120,
    fontSize:18,
    fontWeight: 'bold',
    

},
modalDetailConteiner:{
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical:20,
    paddingHorizontal:40,
},
modalDetailText:{
    fontSize: 14,
    color: '#212121',

},
selectedTask:{
    fontSize:14,
    color : '#212121',
    fontWeight : 'bold',
    paddingVertical: 20,
},
modalButtonContainer:{
   //backgroundColor : 'red',
    width: '70%',
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginHorizontal:20,
    
},
}

);