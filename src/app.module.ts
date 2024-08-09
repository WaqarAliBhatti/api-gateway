import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
// import { AppController } from './app/app.controller';
import { UserController } from './app/user.routes/user.routes';
import { ProductController } from './app/product.routes/products.routes';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [UserController, ProductController],
  providers: [AppService],
})
export class AppModule { }
