import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function CustomDropdown({data,setValue,value,placeholder,inputWidth}) {
      const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container,inputWidth==1?{width:'81%'}:{width:'90%'}}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'green' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          itemTextStyle={styles.itemTextStyle}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholder : placeholder}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
           
        />
      </View>
  )
}

export default CustomDropdown

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent:'center',
      backgroundColor: 'transparent',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'black',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:'black'
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'black'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    itemTextStyle:{
      color:'black'
    }
  });