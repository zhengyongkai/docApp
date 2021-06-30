import http from "../../utils/http";
export const getSongSheet = (params) => {
  return http.get("/home/group/getSongSheet", params);
};
export const addSongSheet = (params) => {
  return http.get("/home/group/addSongSheet", params);
};

export const deleteSongSheet = (params) => {
  return http.post("home/group/deleteSongSheet", params);
};

export const editSongSheet = (params) => {
  return http.post("/home/group/editSongSheet", params);
};
