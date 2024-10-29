import { NewProduct } from "src/app/services/produtos/produtos"
import { Adicional } from "./product-dialog/product-dialog"

// Tipagem antiga refatorar isso melhor
export interface Product {
    codigo: number
    codigo_interno: string
    nome: string
    valor_venda: number
    valor_promo: number
    descricao: string
    categoria: string
    status: boolean
    id_categoria: number
    adicionais: Adicional[]
    id_sabores: number
    destaque: boolean
    observacao: string
    tamanho: string
    quantidade?: number
    imagem?: string
}

export type Categoria = {
    id: number,
    nome: string
}

export type cardList = {
    label: string
    id_categoria: number
    products: NewProduct[]
}