import { readFileSync } from "node:fs";
import { ArticleView } from "../models/ArticleView.interface.ts";

export const readDataFromFile = function (filePath: string):ArticleView[] {
    const currentRootPath = process.cwd()
    try {
        const response = readFileSync(`${currentRootPath}/src/${filePath}`, "utf-8");
        const data:ArticleView[] = JSON.parse(response);
        console.log(data);
        return data
    } catch (error: Error | any) {
        throw new Error(error)
    };
};