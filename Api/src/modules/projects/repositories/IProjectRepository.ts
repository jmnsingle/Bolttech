import IProjectDTO from '../dtos/IProjectDTO';
import Project from '../typeorm/entities/Project';

export default interface IProjectRepository {
  create(data: IProjectDTO): Promise<Project>;
  save(data: Project): Promise<Project>;
  findAll(user_id: string): Promise<Array<Project>>;
  delete(id: string): Promise<void>;
}
