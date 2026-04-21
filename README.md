# Case Técnico - Criação de um Web Scrapper

Este projeto consiste em um web scrapper simples focado na extração de dados estruturados de um produto específico do site de e-commerce netshoes. Foi utilizado princípios de Programação Orientada a Objetos (POO) e SOLID para garantir escalabilidade. 

## Como inicializar

- Acesse o terminal com `ctrl + '` no VSCODE
- Digite `npm install` para instalação de todas as dependências 
- Entre na pasta src
- Digite `node index.ts` se estiver dentro da pasta src ou se preferir pode executar pelos scripts do package.json(obs: estando na pasta principal do projeto) usando `npm run dev`
- A resposta do site pode demorar de 10 a 15 segundos

## Pastas e Arquivos do Web Scrapper 

```text
src/
├── arquivo-gerado/           
├── Classes/    
│   ├── Scraper.ts             
│   └── getTagsHtml.ts          
├── interfaces/                 
│   ├── interfacePrice.ts      
│   └── interfaceSelectorConfig.ts 
├── CreateFile.ts               
└── index.ts                                    
```

- Scraper.ts: Cuida da parte de inicialização do puppeteer e conexão com o browser

- getTagsHtml: Cuida da parte de filtragem e recebimento dos dados corretos

- interfacePrice.ts: Defini a parte de preços com o preço principal e 2 preços opcionais que pode ser escolhido ser usado ou não. O currentPrice é o preço atual que tem desconto ou não, o priceWithoutDiscount é o preço bruto sem desconto e o installmentprice é o preço parcelado.

- interfaceSelectorConfig: Cria o interface principal que vai ser o usado para a filtragem dos dados vindos na requisição do scrapper.

- CreateFile.ts: Cria o arquivo .json para visualizar os dados
- index.ts: Arquivo principal onde é inicializado todo o ambiente de desenvolvimento

## Arquitetura e decisões técnicas

- Utilizei Princípio de responsabilidade única (SRP), dividindo as classes para cada uma ter uma função específica.

- Utilizei encapsulamento para proteger atributos sensíveis do pupeeteer.

- Implementei optional chaining do typescript para garantir que falhas nao interrompam o código em execução.

## Stacks

- Puppeteer: Biblioteca para automação e navegação em navegadores headless
- TypeScript: para melhor tipagem e tratamento de erros
- Node: Ambiente de execução
- FS (File System): Manipulação e armazenamento de dados em arquivos locais.

## Output

- Irá ser gerado um arquivo .json com o produto específico escolhido contendo título, preço (preço atual(com ou sem desconto), preço parcelado e preço bruto sem desconto), imagem e descrição.

- O output tambem sera mostrado no terminal, com um log estruturado contendo título, preço (preço atual(com ou sem desconto), preço parcelado e preço bruto sem desconto), imagem e descrição.

## Imagem do Output

<img width="1564" height="421" alt="image" src="https://github.com/user-attachments/assets/0cc338a2-81a5-452b-bd26-b1096db28666" />
