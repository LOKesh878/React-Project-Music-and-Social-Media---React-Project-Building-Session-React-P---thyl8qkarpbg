import axios from "./axios.instance";

export async function signup(userInfo) {
  try{
  const response = await axios.post(
    `https://academics.newtonschool.co/api/v1/user/signup`,
    { ...userInfo, appType: "music" }
  );
  console.log("response Api",response);
  return response.data;
  }catch(err){
    console.error("Signup Error:",err.response.ddata);
  }
}

export async function signin(userInfo) {
  try{
  const response = await axios.post(
    `https://academics.newtonschool.co/api/v1/user/login`,
    { ...userInfo, appType: "music" }
  );
  return response.data;
  }catch(err){
    console.error("Signin Error:", err.response.data);
    throw err; 
  }
}