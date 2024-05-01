export type GET_PEDIDOS = Pedido[]

export interface Pedido {
  id: string
  id_cliente: number
  mesa: number
  lista_carrinho: ListaCarrinho[]
  data_venda: string
  form_pag: number
  entrega: boolean
  finalizado: boolean
}

export interface ListaCarrinho {
  codigo: number
  codigo_interno?: number
  nome: string
  valor_venda: number
  valor_promo?: number
  descricao: string
  status: number
  id_categoria: number
  id_adicional?: number
  id_sabor?: number
  destaque?: number
  observacao?: string
  tamanho?: string
  imagem: string
  quantidade: number
  adicionais: Adicionais
}

export interface Adicionais {}
