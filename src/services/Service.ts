import axios from "axios";

export const api = axios.create({
  baseURL: "https://personalblog-f8cv.onrender.com",
});

export const login = async(url: any, data: any, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data.token);
}

export const cadastroUsuario = async(url: any, data: any, setData: any) => {
  const response = await api.post(url, data);
  setData(response.data);
}

export const busca = async(url: any, setData: any, header: any) => {
  const response = await api.get(url, header);
  setData(response.data);
}