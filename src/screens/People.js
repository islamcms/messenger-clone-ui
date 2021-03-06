import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import * as data from "../../demos/data.json";
import { Header, HeaderIcon } from "../components/Header";
import TopTabPeople from "../navigation/TopTabPeople";

export default class People extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => { return (<Icon name={"users"} size={25} color={tintColor}/> ) }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Header screen={"People"}>
          <HeaderIcon name={"address-book-o"}/>
          <HeaderIcon name={"user-plus"}/>
        </Header>
        
        <TopTabPeople />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})