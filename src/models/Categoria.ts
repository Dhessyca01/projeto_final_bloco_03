import Produto from "./Produto";

export default interface Categoria {
    length: unknown;
    id: number;
    nome: string;
    produto?: Produto | null;
}