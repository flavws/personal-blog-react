import Theme from "./Theme";
import User from "./User";

interface Postagem {
    id: number;
    title: string;
    text: string;
    theme?: Theme | null;
    user?: User | null;
}

export default Postagem;