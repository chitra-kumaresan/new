import axios from "axios";
import {getToken } from '../services/AuthService';


//using interceptors to intercept all api request
axios.interceptors.request.use(function (config) {
    config.headers["Authorization"]=getToken();
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


const REST_API_BASE_URL='http://localhost:8080/api/employees';

export const getAllEmployees=()=>axios.get(REST_API_BASE_URL);


export const createEmployees=(employee)=>axios.post(REST_API_BASE_URL+ "/saveEmployee", employee);

export const getEmployee=(empId)=>axios.get(REST_API_BASE_URL+ "/"+ empId);

export const deleteEmployee=(empId)=>axios.delete(REST_API_BASE_URL+ "/"+ empId);

export const updateEmployee=(empId,employee)=>axios.put(REST_API_BASE_URL+ "/"+ empId, employee);
