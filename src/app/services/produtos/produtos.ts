//Nova tipagem de produto (Limpar antiga depois)
export type NewProduct = {
    nome: string
    valor_venda: number
    descricao: string
    categoria: string
    id_categoria: number
    imagem: string
    file: any
}