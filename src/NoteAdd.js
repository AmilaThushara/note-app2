import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { firebase } from '../config'



const NoteAdd = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleAdd = () => {
    firebase.firestore()
      .collection('notes')
      .add({
        title, note,
      })
      .then(() => {
        setTitle('')
        setNote('')
        Keyboard.dismiss();   //dissmiss the keyboard
      })
      .catch((error) => {
        alert(error)
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Title'
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.inputTitle}
      />
      <TextInput
        value={note}
        onChangeText={(note) => setNote(note)}
        numberOfLines={5}
        multiline={true}
        style={styles.inputNote}
        placeholder={"Start your activity or set on your text"}
        keyboardType="name-phone-pad"


      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
      >
        <Text style={styles.buttonText}>
          Add</Text>
      </TouchableOpacity>
    </View>
  )
}
export default NoteAdd;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ADD9E7',
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    height: 45,
    width: '97%',
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  inputNote: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    height: 140,
    width: '97%',
    borderBottomWidth: 1 / 2,
    borderLeftWidth: 1 / 2,
    padding: 10,
  },
  button: {
    backgroundColor: '#2E92A9',
    borderRadius: 10,
    marginTop: 20,
    height: 55,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    shadowColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  }


})

















// const NoteAdd = () => {
//   const [title, setTitle] = useState('');
//   const [note, setNote] = useState('');


//   const handleAdd = () => {
//     firebase.firestore()
//       .collection('notes')
//       .add({
//         title, note,
//       })
//       .then(() => {
//         setTitle('')
//         setNote('')
//         Keyboard.dismiss();   //dismiss the keyboard
//       })
//       .catch((error) => {
//         alert(error)
//       });
//   }

//   return (
//     <View style={styles.container} >
//       <Text>NoteAdd</Text>
//       <TextInput
//         placeholder='Title'
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//         style={styles.inputTitle}
//       />
//       <TouchableOpacity>
//         style={styles.button}
//         onPress={handleAdd}
//         <Text style={styles.buttonText}>
//         Add
//         </Text>
//       </TouchableOpacity>


//       <TextInput
//         placeholder='Note'
//         value={note}
//         onChangeText={(text) => setNote(text)}
//         style={styles.inputNote}
//       />

//     </View>
//   )
// }

// export default NoteAdd();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#c9f5d9',
//   },
//   inputTitle:{
//     fontSize:18,
//     fontWeight:'bold',
//     marginTop:20,
//     marginBottom:10,
//     height:20,
//     width:'97%',
//     borderBottomWidth:1/2,
//     borderLeftWidth:1/2,
//     padding:10,
//   },
//   inputNote:{
//     fontSize:18,
//     marginTop:20,
//     marginBottom:10,
//     height:200,
//     width:'97%',
//     borderBottomWidth:1/2,
//     borderLeftWidth:1/2,
//     padding:10,
//   },
//   button:{
//     backgroundColor:'red',
//     borderRadius:10,
//     marginTop:20,
//     height:55,
//     width:150,
//     alignItems:'center',
//     justifyContent:'center',
//     elevation:7,
//     shadowColor:'blue',
//   },
//   buttonText:{
//     color:'white',
//     fontSize:22,
//     fontWeight:'bold',
//   }


// })

