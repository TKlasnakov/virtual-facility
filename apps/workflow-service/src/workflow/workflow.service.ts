import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkflowDto, UpdateWorkflowDto } from '@app/workflows';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workflow } from './entities/workflow.entity';

@Injectable()
export class WorkflowService {
  constructor(
    @InjectRepository(Workflow)
    private readonly workflowRepository: Repository<Workflow>,
  ) {}

  async create(createWorkflowDto: CreateWorkflowDto) {
    const workflow = this.workflowRepository.create(createWorkflowDto);
    return await this.workflowRepository.save(workflow);
  }

  findAll() {
    return this.workflowRepository.find();
  }

  async findOne(id: number) {
    const workflow = await this.workflowRepository.findOne({ where: { id } });

    if (!workflow)
      throw new NotFoundException(`Workflow #${id} does not exist`);

    return workflow;
  }

  async update(id: number, updateWorkflowDto: UpdateWorkflowDto) {
    const workflow = await this.workflowRepository.preload({
      id,
      ...updateWorkflowDto,
    });

    if (!workflow)
      throw new NotFoundException(`Workflow #${id} does not exist`);

    return this.workflowRepository.save(workflow);
  }

  async remove(id: number) {
    const workflow = await this.findOne(id);

    return this.workflowRepository.remove(workflow);
  }
}
