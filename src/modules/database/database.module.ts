import { Module, forwardRef } from '@nestjs/common';

import { DatabaseProvider } from './database.providers';
import { UserModule } from '../user/user.module';
// import { SeederService } from './seeder.service';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [...DatabaseProvider],
  exports: [...DatabaseProvider],
})
export class DatabaseModule {}
