interface ProductPrice{
    currentPrice: string //preço atual do produto com desconto
    priceWithoutDiscount?: string //preço do produto sem desconto, caso haja. obs: pode ser colocado durante a criação do objeto, se for da vontade de quem acessar a interface
    installmentPrice?: string //preço do produto parcelado, caso haja. obs: pode ser colocado durante a criação do objeto, se for da vontade de quem acessar a interface
}
export type { ProductPrice };