import {  getTagsHtml } from "./Classes/getTagsHtml.ts";
import { NETSHOES_CONFIG } from "./interfaces/interfaceSelectorConfig.ts";

async function scrap(url: string): Promise<void>{
      const scraper = new getTagsHtml();

      try{
            const result = await scraper.scrape(url, NETSHOES_CONFIG);

            console.log(result);
      } catch(err){
            console.error("Erro ao realizar o scraping: ", err);
      }
}

const url = "https://www.netshoes.com.br/p/tenis-puma-flyer-flex-bdp-masculino-PI3-0499-375?sellerId=0";

scrap(url);