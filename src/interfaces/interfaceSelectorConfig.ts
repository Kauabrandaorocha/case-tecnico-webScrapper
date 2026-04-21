import type { ProductPrice } from "./interfacePrice.ts"

interface SelectorConfig{
    title: string
    price: ProductPrice
    image: string
    description: string
}

export const NETSHOES_CONFIG: SelectorConfig = {
    title: "body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > h1",
    price: {
        currentPrice: "body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.price-box > div.price-box__saleInCents > div > span.saleInCents-value",

        priceWithoutDiscount: "body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.price-box > div.price-box__listInCents > span.listInCents-value",

        installmentPrice: "body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.payment-method > p > span"
    },

    image: "#swiper-image-presenter--carousel > div.swiper-wrapper > div.swiper-slide.carousel-item.swiper-slide-visible.swiper-slide-active > div > figure > img",

    description: "body > div:nth-child(1) > div.main > section > div.productDescriptionAndReviews > div.separator.features.features--white-bg > div > p"
}

export type { SelectorConfig };