import { Controller, Get } from "@nestjs/common";
import { ProductService } from "src/product/product.service";
import { UserService } from "src/user/user.service";

@Controller()
export class AppController {
    constructor(
        private readonly userService: UserService,
        private readonly productService: ProductService,
    ) { }

    @Get('users')
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('products')
    getProducts() {
        return this.productService.getProducts();
    }
}