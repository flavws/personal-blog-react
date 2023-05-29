import axios from "axios";

export const api = axios.create({
  baseURL: "https://personalblog-f8cv.onrender.com",
});

export const login = async(url: string, data: object, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data);
}

export const cadastroUsuario = async(url: string, data: object, setData: any) => {
  const response = await api.post(url, data);
  setData(response.data);
}