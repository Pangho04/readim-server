import { Controller, Dependencies, Get, Bind, Req, Res } from "@nestjs/common";

import { AppService } from "./app.service";
import { HttpError, HttpStatus } from "./utils/http";

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get("/readingTime")
  @Bind(Req(), Res())
  async getReadingTime(request, response) {
    const { url, wpm = 202 } = request.query;

    try {
      const formattedURL = this.appService.formatHttpURL(url);
      const { headElement, bodyElement } =
        await this.appService.getHtmlElement(formattedURL);

      const readingTime = this.appService.getReadingTime(bodyElement, wpm);
      const siteOpenGraph = this.appService.getSiteOpenGraph(
        headElement,
        formattedURL,
      );

      return response.status(HttpStatus.OK.statusCode).send({
        status: HttpStatus.OK.statusCode,
        data: {
          readingTime,
          ...siteOpenGraph,
        },
      });
    } catch (error) {
      if (error instanceof HttpError) {
        const { statusCode, message } = error.getError();
        response.status(statusCode).send({ statusCode, message });
      }

      const { statusCode, message } = HttpStatus.INTERNAR_SERVER_ERROR;
      response.status(statusCode).send({ statusCode, message });
    }

    return null;
  }
}
