import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton(props) {
  return (
    <View style={[styles.view, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <View disabled={props.dsbled} style={[styles.container, props.button]}>
          <Text style={[styles.btnText]}>{props.text || props.children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 25,
    marginTop: '12%',
  },
  btnText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
