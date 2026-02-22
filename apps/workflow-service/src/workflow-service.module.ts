import { Module } from '@nestjs/common';
import { WorkflowServiceController } from './workflow-service.controller';
import { WorkflowServiceService } from './workflow-service.service';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [WorkflowModule],
  controllers: [WorkflowServiceController],
  providers: [WorkflowServiceService],
})
export class WorkflowServiceModule {}
