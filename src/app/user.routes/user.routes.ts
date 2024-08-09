// Import necessary decorators and classes from the NestJS common module.
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

// Import the ProductService, which handles business logic related to products.
// This service might be interacting with a dedicated product microservice.
import { ProductService } from "src/product/product.service";

// Import the UserService, which handles business logic related to users.
// This service might be interacting with a dedicated user microservice.
import { UserService } from "src/user/user.service";

// Use the @Controller() decorator to define this class as a controller.
// This controller will act as part of the API Gateway, handling incoming HTTP requests 
// and forwarding them to the appropriate services.
@ApiTags("Users Server API")
@Controller()
export class UserController {
    // The constructor injects the services that will be used within this controller.
    // 'userService' will handle operations related to users, likely by communicating 
    // with a User microservice.
    // 'productService' will handle operations related to products, likely by communicating 
    // with a Product microservice.
    constructor(
        private readonly userService: UserService,  // Dependency Injection of UserService
    ) { }

    // The @Get('users') decorator defines a route that listens for GET requests at the '/users' endpoint.
    // When this endpoint is hit, the getUsers() method is called.
    // This method interacts with the UserService to fetch the list of users.
    // In a microservices setup, this might involve making a network request to a User microservice.
    @Get('users')
    getUsers() {
        return this.userService.getUsers(); // Fetch users from the UserService
    }

}
