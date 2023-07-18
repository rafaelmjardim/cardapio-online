export type Pedido = {
    id_cliente: number
    lista_carrinho: Produto[]
    mesa: number
}

export type Produto = {
    id_produto: number[]
}