import Categoria from "./Produto";

export default interface Produto {
    length: unknown;
    id: number;
    nome: string;
    produto?: Categoria | null;
}