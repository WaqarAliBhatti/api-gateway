// Import necessary decorators and classes from the NestJS common module.
import { Body, Controller, Get, Post } from "@nestjs/common";

// Import the Data Transfer Object (DTO) that defines the structure of the data 
// required to create a product. This ensures that only valid data is passed to the service.
import { CreateProductDto } from "src/product/product.dto/create-product.dto";

// Import the ProductService, which handles business logic related to products.
// This service might be interacting with a dedicated product microservice.
import { ProductService } from "src/product/product.service";

// Import the UserService, which handles business logic related to users.
// This service might be interacting with a dedicated user microservice.
import { UserService } from "src/user/user.service";

// Use the @Controller() decorator to define this class as a controller.
// This controller will act as part of the API Gateway, handling incoming HTTP requests 
// and forwarding them to the appropriate services.
@Controller()
export class AppController {
    // The constructor injects the services that will be used within this controller.
    // 'userService' will handle operations related to users, likely by communicating 
    // with a User microservice.
    // 'productService' will handle operations related to products, likely by communicating 
    // with a Product microservice.
    constructor(
        private readonly userService: UserService,  // Dependency Injection of UserService
        private readonly productService: ProductService,  // Dependency Injection of ProductService
    ) { }

    // The @Get('users') decorator defines a route that listens for GET requests at the '/users' endpoint.
    // When this endpoint is hit, the getUsers() method is called.
    // This method interacts with the UserService to fetch the list of users.
    // In a microservices setup, this might involve making a network request to a User microservice.
    @Get('users')
    getUsers() {
        return this.userService.getUsers(); // Fetch users from the UserService
    }

    // The @Get('products') decorator defines a route that listens for GET requests at the '/products' endpoint.
    // When this endpoint is hit, the getProducts() method is called.
    // This method interacts with the ProductService to fetch the list of products.
    // In a microservices setup, this might involve making a network request to a Product microservice.
    @Get('products')
    getProducts() {
        return this.productService.getProducts(); // Fetch products from the ProductService
    }

    // The @Post('product') decorator defines a route that listens for POST requests at the '/product' endpoint.
    // When this endpoint is hit, the addProducts() method is called.
    // This method takes a 'CreateProductDto' object from the request body, which contains 
    // the data needed to create a new product.
    // The method then interacts with the ProductService to add the new product.
    // In a microservices setup, this might involve sending a request with the product data to a Product microservice.
    @Post('product')
    addProducts(@Body() createProductDto: CreateProductDto) {
        return this.productService.addProducts(createProductDto); // Add a new product using the ProductService
    }
}
