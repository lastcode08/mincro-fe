import { Controller, Get, Param } from '@nestjs/common';
import products, { TProduct } from 'src/products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<TProduct[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<TProduct> {
    return products.find((product) => product.id === +id);
  }
}
