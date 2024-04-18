import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from './user/entities/address.entity';
import { User } from './user/entities/user.entity';

export const database_config: TypeOrmModuleOptions = {
  autoLoadEntities: true,
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'ibs',
  entities: [User, Address],
};
