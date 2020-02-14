import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grids from './grids';

export default class Home extends React.Component {
 constructor(props) {
   super(props);
   this.states = {
     currentPlayer: 1,
     gameState: [
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]
     ],
   };
 }
}