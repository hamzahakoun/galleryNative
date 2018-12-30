import React from 'react' ;
import { View , StyleSheet,Text,TouchableOpacity } from 'react-native' ;
import { Card,CheckBox } from 'native-base' ;


const TagsCard = ({data,char,checkedTags,toggleCheck}) => {
  return (
    <Card style = {styles.container}>
      <View style = {styles.title}>
        <Text style = {styles.titleText}>{char.toUpperCase()}</Text>
      </View>
      {
        data.map(item => {
          return (
            <View key = {item.content} style = {styles.infoWrapper}>
              <View style = {styles.tagName}><Text style = {styles.tagNameText}>{item.content} ({item.img_num})</Text></View>
              <View style = {styles.tagNumber}>
                  <TouchableOpacity style = {styles.touchable} onPress = {() => toggleCheck(item)}>
                    <CheckBox style = {styles.check} checked = {checkedTags.indexOf(item) !== -1} />
                  </TouchableOpacity>
              </View>

            </View>

          )
        })
      }

    </Card>
  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    padding : 10 ,
    borderRadius : 6 ,

  },
  tagName : {
    flex : 3 ,
  } ,
  tagNumber : {
    flex : 1 ,
    alignItems : 'flex-end',
    paddingHorizontal :3 ,
  },
  infoWrapper : {
    flex : 1 ,
    flexDirection : 'row' ,
    backgroundColor : '#dfe4ea',
    borderRadius : 6 ,
    padding  : 20 ,
    margin : 5 ,
  },
  title : {
    flex : 2 ,
    alignItems : "center" ,
    justifyContent : "center" ,
    backgroundColor : '#C62828',
    padding : 15  ,
    borderRadius : 6 ,
  },
  titleText : {
    color : "#fff" ,
    fontWeight : 'bold' ,
  },
  tagNameText : {
    fontWeight : 'bold' ,
  },

})
export default TagsCard ;
