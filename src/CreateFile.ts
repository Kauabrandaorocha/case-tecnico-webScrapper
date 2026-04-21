import fs from 'fs';
import path from 'path';

export class CreateFile {
    static createJsonFile(fileName: string, data: any): void {
        try{
            const filePath = path.resolve(`./arquivo-gerado/${fileName}.json`);

            const jsonData = JSON.stringify(data, null, 4); // O 'null' é para não alterar as chaves, e o '4' é para adicionar uma indentação de 4 espaços, deixando o arquivo mais legível.

            fs.writeFileSync(filePath, jsonData, 'utf-8');

            console.log(`Arquivo ${fileName}.json criado com sucesso!`);

        } catch(err){
            console.error("Erro ao criar arquivo JSON: ", err);
        }
    }
}