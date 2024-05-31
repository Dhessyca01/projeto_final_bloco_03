import Produto from "./Categoria";

export default interface Categoria {

     id: number;
     nome: string;
     preco: string;
     foto: string;
     produto: Produto | null;
     
}