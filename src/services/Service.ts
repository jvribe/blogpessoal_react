import axios from "axios";

const api = axios.create({
    baseURL: "https://blogpessoal-zylk.onrender.com",
});

//função cadastrar usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
const resposta = await api.post(url, dados);
setDados(resposta.data);
}

//função autenticar usuário
export const login = async (url: string, dados: Object, setDados: Function) => {
const resposta = await api.post(url, dados);
setDados(resposta.data);
}
