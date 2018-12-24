import { AsyncStorage } from "react-native" ;


const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key) ;
  return value ;
}

const setItem = (key,value) => {
  AsyncStorage.setItem(key,value) ;
}



export {
  getItem ,
  setItem , 
}
