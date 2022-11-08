import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function App() {






  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.back}>
          <Entypo name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchbutton}>
          <Feather name="search" size={20} color="white" />
        </TouchableOpacity>

      </View>
      <Text style={styles.browse}>Browse</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
      >

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#211649',
  },
  topbar: {
    flexDirection: 'row',
    height: 40,
    justifyContent:'space-between',
    paddingHorizontal: 10

  },
  searchbutton: {
    width: 40,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 10
  },
  back:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  browse:{
    fontSize: 45,
    fontFamily: 'Helvetica',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 25,
    marginLeft: 20
    
  }



});
