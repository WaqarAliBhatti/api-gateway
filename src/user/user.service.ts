// Import necessary decorators and classes from NestJS modules.
import { Injectable } from '@nestjs/common';  // Decorator that marks a class as a provider for dependency injection.
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';  // Classes for setting up communication with microservices.

@Injectable()  // Marks the class as a service that can be injected into other components (e.g., controllers).
export class UserService {
    private client: ClientProxy;  // Declares a private property to hold the client for communicating with the microservice.

    // The constructor initializes the ClientProxy used to communicate with the microservice.
    constructor() {
        // Create a ClientProxy instance using ClientProxyFactory.
        // This client will use TCP transport to communicate with a microservice.
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,  // Specifies TCP protocol for communication with the microservice.
            options: {
                host: 'localhost',  // Host where the microservice is running.
                port: 3001,  // Port where the microservice is listening for requests.
            },
        });
    }

    // Method to get the list of users from the microservice.
    // It sends a message with the command 'get_users' to the microservice.
    getUsers() {
        // The 'send' method sends a message to the microservice with a specific command.
        return this.client.send({ cmd: 'get_users' }, {});  // Send command to fetch users, no additional data needed.
    }
}
