import { Product } from "../products-cards"

export type Adicional = {
    codigo: number
    nome: string
    valor_venda: number
    quantidade: number
}

export type CurrentProductData = {
    currentProduct: Product
    isEdit: boolean,
    indexProduct: number
}