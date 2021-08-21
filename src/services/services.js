const instance = require("./axios_instance");

const axios = instance.default;

exports.fetchAllUser = () =>{
   return axios.get("fetchalluser");
}

exports.farmerSignUp = (data)=>{
   return axios.post("signin",data);
}

exports.farmerLogin = (data)=>{
   return axios.post("farmer-login",data);
}