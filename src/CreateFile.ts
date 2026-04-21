import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ira fazer com que seja gerado o arquivo dentro do src.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class CreateFile {
    static createJsonFile(fileName: string, data: any): void {
        try{
            const folderPath = path.resolve(__dirname, 'arquivo-gerado')
            const filePath = path.resolve(folderPath, `${fileName}.json`);

            if(!fs.existsSync(folderPath)){
                fs.mkdirSync(folderPath, { recursive: true }); //cria pasta se nao existir
            }

            const jsonData = JSON.stringify(data, null, 4); // O 'null' é para não alterar as chaves, e o '4' é para adicionar uma indentação de 4 espaços, deixando o arquivo mais legível.

            fs.writeFileSync(filePath, jsonData, 'utf-8');

            console.log(`Arquivo ${fileName}.json criado com sucesso!`);

        } catch(err){
            console.error("Erro ao criar arquivo JSON: ", err);
        }
    }
}