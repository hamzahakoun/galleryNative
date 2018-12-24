import { getItem } from './storage' ;
import axios from 'axios' ;
import config from '../config' ;


const getRequest = async (endpoint) => {
  const token = await getItem('token')
  const headers = {'Content-Type' : 'application/json',"Authorization":`JWT ${token}`} ;
  const dest = `${config.baseUrl}/${endpoint}` ;

  return axios.get(dest,{headers : headers}) ;
}


const request = async (endpoint,payload,method = "post") => {
  const token = await getItem('token') ;
  const headers = {'Content-Type' : 'application/json',"Authorization":`JWT ${token}`} ;
  const dest = `${config.baseUrl}/${endpoint}` ;
  return axios({
    url : dest ,
    method ,
    data : payload ,
    headers
  })
}

const deleteRequest = async (endpoint) => {
  const token = await getItem('token') ;
  const headers = {'Content-Type' : 'application/json',"Authorization":`JWT ${token}`} ;
  const dest = `${config.baseUrl}/${endpoint}` ;
  return axios({
    url : dest ,
    method : 'DELETE',
    headers ,
  })
}

export {
  getRequest,
  request ,
  deleteRequest ,
}
