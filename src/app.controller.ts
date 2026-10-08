import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import type { ArticleView } from './models/ArticleView.interface.ts';
import { readDataFromFile } from "./scripts/readDataFromFile.ts"
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly wikiArticles = readDataFromFile("data/wiki_articles.json")
  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'Teszt'
    }
  }
}
