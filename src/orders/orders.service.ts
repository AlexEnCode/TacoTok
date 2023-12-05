import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';

@Injectable()
export class OrdersService {
  


public async create(createOrderDto: CreateOrderDto) {
  const createUser = new NormalizedResponse('Order ${createOrderDto.OrderNumber} has been created',
    await this.prisma.orders.create({
      data: {
      OrderNumber: CreateOrderDto.order_Number,
      orderTotalCostHt: CreateOrderDto.order_total_cost_ht,
      orderTotalQuantity: CreateOrderDto.order_total_quantity,
      createdAt: CreateOrderDto.created_at,
      deliverAt: CreateOrderDto.deliver_at,
      UserUUID: CreateOrderDto.user_uuid,
      },
    }),
  );
  return createUser.toJSON();
}

public async getByOrderNumber(productUUID: string) {
  return new NormalizedResponse(
    `Product for '${productUUID}' uuid has been found`,
    await this.prisma.products.findUnique({
      where: {
        productUUID: product_UUID,
      },
    }),
  ).toJSON();
}
public async getProductsByUserUUID(user_UUID: string) {
  return new NormalizedResponse(
    `Order of user '${userUUID}' uuid has been found`,
    await this.prisma.products.findMany({
      where: {
          UUID: user_UUID,
      },
    }),
  ).toJSON();
}
public async updateByOrderUUID(uuid: string, updateOrdertDto: UpdateOrderDto) {
  return new NormalizedResponse(
    `Order for '${uuid}' uuid has been updated`,
    await this.prisma.products.update({
      where: {
        UUID: uuid,
      },
      data: {
        OrderNumber: CreateOrderDto.order_Number,
        orderTotalCostHt: CreateOrderDto.order_total_cost_ht,
        orderTotalQuantity: CreateOrderDto.order_total_quantity,
        createdAt: CreateOrderDto.created_at,
        deliverAt: CreateOrderDto.deliver_at,
      },
    }),
  ).toJSON();
}

public async removeByOrderUUID(order_uuid: string) {
  return new NormalizedResponse(
    `Product for '${order_uuid} has been deleted'`,
    await this.prisma.products.delete({ where: { UUID: order_uuid } }),
  ).toJSON();
}


}

