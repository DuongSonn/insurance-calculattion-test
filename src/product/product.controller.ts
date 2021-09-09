import { Controller, Get, Query } from '@nestjs/common';
import { GetProductResponseDto, GetProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('getProduct')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getProduct(
        @Query() data: GetProductDto,
    ): Promise<GetProductResponseDto> {
        return this.productService.getProduct(data);
    }
}