import puppeteer, { Browser } from "puppeteer"; //manipulador
import type {Product}  from "./interfaces/interfaceProduct.ts";


async function scrap(url: string): Promise<void>{
      try{
            const browser = await puppeteer.launch({ headless: true }); //pega o browser sem interface gráfica para nao abrir uma janela, deixando o processo mais leve e rápido. Se quiser ver o processo, basta colocar headless: false

            const page = await browser.newPage(); //abre uma nova page em branco

            /*
                  Navega para o site. 

                  'domcontentloaded' é uma opção que indica para o puppeteer esperar até que o DOM esteja completamente carregado antes de continuar a execução do código. Garantindo que os elementos estejam disponíveis para serem manipulados.

                  'timeout' é uma opção que define o tempo máximo de espera para a página carregar. O tempo limite é 20 segundos, se passar disso, lançará um erro.

            */
            await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000});

            await page.waitForNetworkIdle(); //espera a página carregar completamente

            const result = await page.evaluate(() => {
                  const product: Product[] = [];

                  const productTitle = document.querySelector<HTMLElement>("body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > h1");

                  const productCurrentPrice = document.querySelector<HTMLElement>("body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.price-box > div.price-box__saleInCents > div > span.saleInCents-value");

                  const productPriceWithoutDiscount = document.querySelector<HTMLElement>("body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.price-box > div.price-box__listInCents > span.listInCents-value");

                  const productInstallmentPrice = document.querySelector<HTMLElement>("body > div:nth-child(1) > div.main > section > div.productBuybox > div > div > div.buybox__buy-content > div > div > div:nth-child(1) > div.buybox-item__content__price > div > div.payment-method > p > span");

                  const productImage = document.querySelector<HTMLImageElement>("#swiper-image-presenter--carousel > div.swiper-wrapper > div.swiper-slide.carousel-item.swiper-slide-visible.swiper-slide-active > div > figure > img");

                  const productDecription = document.querySelector<HTMLElement>("body > div:nth-child(1) > div.main > section > div.productDescriptionAndReviews > div.separator.features.features--white-bg > div > p");

                  if(productTitle && productCurrentPrice && productPriceWithoutDiscount && productInstallmentPrice && productImage && productDecription){
                        product.push({
                              title: productTitle.innerText.trim(),
                              price: {
                                    currentPrice: productCurrentPrice.innerText.trim(),
                                    priceWithoutDiscount: productPriceWithoutDiscount.innerText.trim(),
                                    installmentprice: productInstallmentPrice.innerText.trim()
                              },
                              image: productImage.src,
                              description: productDecription.innerText.trim()
                        })
                  }

                  return product
            })

            console.log(result); //imprime o resultado no console, que é um array de objetos do tipo Product, contendo o título do produto encontrado na página

            await browser.close(); //fecha o browser
      }
      catch(err){
            console.error("Error in scraping: ", err);
      }
};

const url = "https://www.netshoes.com.br/p/tenis-puma-flyer-flex-bdp-masculino-PI3-0499-375?sellerId=0";

scrap(url);