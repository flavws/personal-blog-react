import Theme from "./Theme";

interface Postagem {
    id: number;
    title: string;
    text: string;
    theme?: Theme | null;
}

export default Postagem;