const instance = require("./axios_instance");

const axios = instance.default;

exports.fetchAllUser = () =>{
   return axios.get("fetchalluser");
}

exports.farmerSignUp = (data)=>{
   return axios.post("signin",data);
}