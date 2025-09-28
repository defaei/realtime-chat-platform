import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class CustomSwagger {
  static initialize(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('RealTime Chat API Documentation')
      .setDescription(
        'a complete document of how to use the back-end server of this app + test for client devs',
      )
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();

    const factoryDocument = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('#api', app, factoryDocument);
  }
}
