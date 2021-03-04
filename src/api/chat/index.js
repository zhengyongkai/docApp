
import axios from "axios";
export const chatMessage = (params) => {
  return  axios.get('/chat/chatMessage',params)
}