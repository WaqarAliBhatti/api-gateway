// Import necessary decorators and classes from NestJS modules.
import { Injectable } from '@nestjs/common';  // Decorator that marks a class as a provider that can be injected into other classes.
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';  // Classes for setting up microservices communication.
import { CreateProductDto } from './product.dto/create-product.dto';  // Import the Data Transfer Object (DTO) for creating a product.

@Injectable()  // Marks this class as a provider that can be injected into other components, such as controllers.
export class ProductService {
    private client: ClientProxy;  // Declares a private property to hold the client for communicating with the microservice.

    // The constructor initializes the client used to communicate with the microservice.
    constructor() {
        // Create a ClientProxy instance using ClientProxyFactory.
        // This client will use TCP transport to communicate with a microservice.
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,  // Specifies that TCP protocol is used for communication.
            options: {
                host: 'localhost',  // Host where the microservice is running.
                port: 3002,  // Port where the microservice is listening for requests.
            },
        });
    }

    // Method to get the list of products from the microservice.
    // It sends a message with the command 'get_products' to the microservice.
    getProducts() {
        // 'send' method sends a message to the microservice with a specific command.
        return this.client.send({ cmd: 'get_products' }, {});  // Send command to fetch products, no additional data needed.
    }

    // Method to add a new product by sending product data to the microservice.
    // It takes 'CreateProductDto' as input, which contains the data required to create a new product.
    addProducts(createProductDto: CreateProductDto) {
        // 'send' method sends a message to the microservice with a specific command and the product data.
        return this.client.send({ cmd: 'add_product' }, createProductDto);  // Send command to add a product with the provided data.
    }
}
