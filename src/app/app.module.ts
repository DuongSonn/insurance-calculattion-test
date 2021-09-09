import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [ProductModule, ConfigModule.forRoot()],
})
export class AppModule {}