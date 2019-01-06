import React from 'react'  ;
import { View , StyleSheet , Text } from 'react-native' ;
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome' ;

const Fabs = ({fabs}) => {
  return (
    <ActionButton buttonColor="#F99E4C">
      {
        fabs.map((item,i) => {
          return (
            <ActionButton.Item
              buttonColor={item.buttonColor}
              title={item.title}
              onPress={item.action}
              key = {i}
              >
              <Icon name={item.icon} color={item.iconColor} />
            </ActionButton.Item>
          )
        })
      }

   </ActionButton>
  )

}


export default Fabs ;
