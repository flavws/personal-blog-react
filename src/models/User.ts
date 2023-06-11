import Postagem from "./Postagem";

interface User{
    id: number;
    name: string;
    user: string;
    password: string;
    picture: string;
    postagem?: Postagem;
}

export default User;