import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
    .setTitle('Microservices based App')
    .setDescription('Microservices based App ==> API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
