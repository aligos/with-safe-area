// @flow
import * as React from 'react';
import { Platform, StyleSheet, SafeAreaView, View } from 'react-native';

type Props = {
  children?: React.Node,
};

export default class WithSafeArea extends React.Component<Props> {
  render() {
    const majorVersionIOS = parseInt(Platform.Version, 10);
    if (majorVersionIOS <= 10) {
      return <View style={styles.manualSafeArea}>{this.props.children}</View>;
    } else {
      return <SafeAreaView style={styles.safeArea}>{this.props.children}</SafeAreaView>;
    }
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  manualSafeArea: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
});
