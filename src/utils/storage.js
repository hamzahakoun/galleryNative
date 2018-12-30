import { AsyncStorage } from "react-native" ;


const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key) ;
  return value ;
}

const setItem = (key,value) => {
  AsyncStorage.setItem(key,value) ;
}

const removeItem = (key) => {
  AsyncStorage.removeItem(key) ;
}

export {
  getItem ,
  setItem ,
  removeItem
}
