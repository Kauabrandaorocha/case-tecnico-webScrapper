import { Scraper } from "./Scraper.ts";
import type { SelectorConfig } from "../interfaces/interfaceSelectorConfig.ts";

export class getTagsHtml {
    private scraper: Scraper;

    constructor() {
        this.scraper = new Scraper();
    }

    async scrape(url: string, selectors: SelectorConfig): Promise<SelectorConfig[]> {
        try {
            await this.scraper.initializeConnection(url);
            const page = this.scraper.getPage();

            const result = await page.evaluate(({ config }) => {
                const elements = {
                    title: document.querySelector<HTMLElement>(config.title),
                    currentPrice: document.querySelector<HTMLElement>(config.price.currentPrice),
                    // O "?? ''" garante que o argumento seja sempre uma string
                    priceWithoutDiscount: document.querySelector<HTMLElement>(config.price.priceWithoutDiscount ?? ""),
                    installmentPrice: document.querySelector<HTMLElement>(config.price.installmentPrice ?? ""),
                    image: document.querySelector<HTMLImageElement>(config.image),
                    description: document.querySelector<HTMLElement>(config.description)
                };

                if (!elements.title || !elements.currentPrice || !elements.image) {
                    return [];
                }

                return [{
                    // O '?' tenta acessar o innerText. Se for null, o '??' garante uma string vazia.

                    title: elements.title!.innerText.trim(),
                    price: {
                        currentPrice: elements.currentPrice?.innerText.trim() ?? "",
                        priceWithoutDiscount: elements.priceWithoutDiscount?.innerText.trim() ?? "",
                        installmentprice: elements.installmentPrice?.innerText.trim() ?? ""
                    },
                    image: elements.image?.src,
                    description: elements.description?.innerText.trim() ?? ""
                }];
            }, { config: selectors });

            return result;
        } finally {
            await this.scraper.close();
        }
    }
}