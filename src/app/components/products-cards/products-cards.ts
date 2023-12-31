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
    adicionais: AdicionaisList
    id_sabores: number
    destaque: boolean
    observacao: string
    tamanho: string
    quantidade?: number
    imagem?: string
}

export interface AdicionaisList {
    [codigo: number]: number
}