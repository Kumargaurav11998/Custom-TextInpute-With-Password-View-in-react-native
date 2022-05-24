import { Avatar } from '@rneui/base';
import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, Text, StyleSheet, Keyboard } from 'react-native';

function CustomeTextInpute(props) {
  const [islabel, setlabel] = useState(false);
  const [ispassword, setpassword] = useState(true);
  const [showpassIcon, setshowPassicon] = useState(props.eyeicon);
  const issubmit = () => {
    setlabel(false);
    Keyboard.dismiss;
  };
  return (
    <View style={[{ height: props.height, width: props.width, alignSelf: 'center' }]}>
      <Text
        style={{
          opacity: islabel ? 1 : 0,
          color: props.labelcolor,
          fontWeight: props.fontWeight,
          fontSize: props.fontSize,
        }}
      >
        {props.lable}
      </Text>
      <View style={[styles.iconshow]}>
        <TextInput
          onSubmitEditing={() => issubmit()}
          onPressIn={() => setlabel(true)}
          onChangeText={(v) => props.onchange(v)}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholdertxtcolor}
          secureTextEntry={showpassIcon ? ispassword : false}
          style={[
            {
              backgroundColor: props.backgroundColor,
              color: props.inputecolor,
              width: props.inputewidth,
              fontSize: props.fontSize,
            },
          ]}
        />
        {showpassIcon && (
          <Avatar
            onPress={() => setpassword(!ispassword)}
            icon={{
              name: ispassword ? 'eye-with-line' : 'eye',
              type: 'entypo',
              color: props.iconcolor,
              size: props.iconsize,
            }}
            containerStyle={[styles.iconcontainer, { right: props.iconright, top: props.top }]}
          />
        )}
      </View>
    </View>
  );
}
export default CustomeTextInpute;

const styles = StyleSheet.create({
  iconshow: {
    flexDirection: 'row',
  },
  iconcontainer: {
    position: 'relative',
  },
});
