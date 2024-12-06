import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

function CustomDropdown1({data,setValue,value,placeholder,inputWidth,setLabel}) {
      const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container,inputWidth==1?{width:'81%'}:{width:'90%'}}>
        <Dropdown
          style={[styles.dropdown]}
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
            setLabel(item.label)
            setIsFocus(false);
          }}
           
        />
      </View>
  )
}

export default CustomDropdown1

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent:'center',
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 42,
      borderWidth: 0,
      backgroundColor:'white',
      borderRadius: 20,
      paddingHorizontal: 8,
      marginTop: 12,
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
      color:'black',
      paddingLeft:4
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color:'black'
    },
    itemTextStyle:{
      color:'black'
    }
  });