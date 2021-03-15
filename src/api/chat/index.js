
import axios from "axios";
export const chatMessage = (params) => {
  return  axios.get('/chat/chatMessage',params)
}
export const friendList = (params) => {
  return  axios.get('/friend/friendList',params)
}