const instance = require("./axios_instance");

const axios = instance.default;

exports.fetchAllUser = () =>{
   return axios.get("fetchalluser");
}
exports.fetchAllCompanies = () =>{
   return axios.get("fetchallcompanies");
}

exports.farmerSignUp = (data)=>{
   return axios.post("signin",data);
}

exports.farmerLogin = (data)=>{
   return axios.post("farmer-login",data);
}

exports.companyLogin = (data)=>{
   return axios.post("company-login",data);
}

exports.companySignUp = (data)=>{
   return axios.post("company-signin",data);
}

exports.registerItems = (data)=>{
   return axios.post("register-item",data);
}

exports.contactUs =(data)=>{
   return axios.post("contact-us",data);
}
exports.Categories =(data)=>{
   return axios.get("getCategories");
}
exports.itemByCategory =(data)=>{
   return axios.post("getItemByCategory",data);
} 