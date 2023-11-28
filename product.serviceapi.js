import axios from "axios";

export function saveData(url){
return axios.post(url);
}
export function getData(url , data){
return axios.get(url);
}
export function updateData(url){
return axios.put(url);
}
// export function deleteData();{
// return axios.delete(url);
// }
