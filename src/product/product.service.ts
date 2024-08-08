import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';


@Injectable()
export class ProductService {
    private client: ClientProxy;

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3002,
            },
        });
    }

    getProducts() {
        return this.client.send({ cmd: 'get_products' }, {});
    }
}
