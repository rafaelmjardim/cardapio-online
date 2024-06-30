import { Product } from "../products-cards/products-cards"

export type Order = {
    lista_carrinho: Product[]
    id_cliente: number
    mesa: number
    nome_cliente: string
    form_pag: number
    data_venda: Date
    entrega: boolean
    finalizado: boolean
    desconto?: number
    valor_total: number
}