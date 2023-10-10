import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../config'
import { FlashList, FlatList } from '@shopify/flash-list'




const Home = () => {

  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();

  //fetch the database from firestore

  useEffect(() => {
    firebase.firestore()
      .collection('notes')
      .onSnapshot((querySnapshot) => {
        const newNotes = [];
        querySnapshot.forEach((doc) => {
          const { note, title } = doc.data();
          newNotes.push({ note, title, id: doc.id });
        });
        setNotes(newNotes);
      });

  }, []);

  return (
    <View style={styles.container} >

      <FlashList
        data={notes}
        numColumns={2}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <View style={styles.noteView}>
            <Text style={styles.noteTitle}>
              {item.title}
            </Text>
            <Text style={styles.noteDescription}>
              {item.note}
            </Text>
          </View>
        )}
      />
      <Button title='Add Note' onPress={() => navigation.navigate('NoteAdd')}   color="black" />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD9E7',
  },
  noteView: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#2E92A9',
    shadowOffset: { width: 0., height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    alignItems: 'center',
  },
  noteTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteDescription: {
    fontSize: 16,
    marginTop: 5,
  },


////////////////////////

  button: {
    backgroundColor: 'red',
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










// const Home = () => {

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   // welcome: {
//   // fontSize: 20,
//   // textAlign: 'center',
//   // margin: 10,
//   // },
//   // instructions: {
//   // textAlign: 'center',
//   // color: '#333333',
//   // marginBottom: 5,
//   // },
// })