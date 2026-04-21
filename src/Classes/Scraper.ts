import puppeteer, { Browser, Page } from 'puppeteer';

export class Scraper {
    private browser: Browser | null = null;
    private page: Page | null = null;

    async initializeConnection(url: string): Promise<Page> {
        this.browser = await puppeteer.launch({ headless: true }); //pega o browser sem interface gráfica para nao abrir uma janela, deixando o processo mais leve e rápido. Se quiser ver o processo, basta colocar headless: false

        this.page = await this.browser.newPage();
        //abre uma nova page em branco

        /*
                  Navega para o site. 

                  'domcontentloaded' é uma opção que indica para o puppeteer esperar até que o DOM esteja completamente carregado antes de continuar a execução do código. Garantindo que os elementos estejam disponíveis para serem manipulados.

                  'timeout' é uma opção que define o tempo máximo de espera para a página carregar. O tempo limite é 20 segundos, se passar disso, lançará um erro.

        */

        await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });


        await this.page.waitForNetworkIdle(); //espera a página carregar completamente

        return this.page;
    }

    async close(): Promise<void> {
        if (this.browser) {
            await this.browser.close();
        }
    }

    getPage(): Page {
        if (!this.page) throw new Error("Scraper não foi inicializado");
        return this.page;
    }
}