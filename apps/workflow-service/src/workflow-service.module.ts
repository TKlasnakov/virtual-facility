import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowServiceController } from './workflow-service.controller';
import { WorkflowServiceService } from './workflow-service.service';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT!,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    WorkflowModule,
  ],
  controllers: [WorkflowServiceController],
  providers: [WorkflowServiceService],
})
export class WorkflowServiceModule {}
