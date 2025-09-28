import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { CustomSwagger } from "./utilities/swagger";
import { GlobalExceptionFilter } from "./utilities/global-exception.filter";
const cookieParser = require("cookie-parser");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  app.useGlobalFilters(new GlobalExceptionFilter());

  CustomSwagger.initialize(app);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
