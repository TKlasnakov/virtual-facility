import { NestFactory } from '@nestjs/core';
import { WorkflowServiceModule } from './workflow-service.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkflowServiceModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
