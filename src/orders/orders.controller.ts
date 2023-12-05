import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}



  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }


  @Get('Order')
  findOne(@Param('NumberOrder') id: string) {
    return this.ordersService.getByOrderNumber(order_Number);
  }

  @Patch('Order')
  update(@Param('Order') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.updateByOrderUUID(order_Number, updateOrderDto);
  }

  @Delete('Order')
  remove(@Param('Order') id: string) {
    return this.ordersService.removeByOrderUUID(order_Number);
  }
}
