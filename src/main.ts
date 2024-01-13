import 'dotenv/config'

import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

import { env } from './shared/config/env'

const { apiPort } = env

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Recipes API')
    .setDescription(
      'The Recipes API offers comprehensive functionalities for ...',
    )
    .setVersion('1.0')
    .addTag('Recipes')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(apiPort, () => {
    console.log('\x1b[34m\x1b[1m%s\x1b[0m', `Listening in port ${apiPort} 🚀!`)
  })
}

bootstrap()
