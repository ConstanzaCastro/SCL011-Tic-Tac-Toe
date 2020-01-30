import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
    <View style={styles.tile}>
      <Text>Tic Tac Toe</Text>
      
    </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F871',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    borderWidth:1,
    width: 100,
    height: 100,
  }

});
/*export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.states = {
     gameState: [
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]
     ],
     currentPlayer: 1,
   }
 }
}*/
