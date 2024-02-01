# NestJS Healthcheck Liveliness Example
This project is an example of how to implement health checks in a NestJS application. It includes checks for various types of services such as gRPC, HTTP, memory, microservices, Mongoose, TypeORM, and Sequelize.

## Health Checks
Health checks are implemented using the @nestjs/terminus package. Each service has its own health indicator which can be checked individually or as part of a group.

### gRPC Service
The gRPC service health check verifies the availability of a gRPC server. If the server is not reachable, the health check will fail.

### HTTP Service
The HTTP service health check verifies the availability of an HTTP server. If the server is not reachable, the health check will fail.

### Memory
The memory health check verifies that the application has enough free memory. If the free memory falls below a certain threshold, the health check will fail.

### Microservice
The microservice health check verifies the availability of a microservice. If the microservice is not reachable, the health check will fail.

### Mongoose
The Mongoose health check verifies the connection to a MongoDB database using Mongoose. If the connection fails, the health check will fail.

### TypeORM
The TypeORM health check verifies the connection to a database using TypeORM. If the connection fails, the health check will fail.

### Sequelize
The Sequelize health check verifies the connection to a database using Sequelize. If the connection fails, the health check will fail.

Running the Health Checks
To run the health checks, start the application:

1. Clone the repository
2. Build images with command: `docker-compose build`
3. Run the application with `docker-compose up -d`

Following endpoints has different implementation for health check
```
curl http://localhost:3000/custom-health-indicator
curl http://localhost:3000/grpc-health-indicator
curl http://localhost:3000/http-health-indicator
curl http://localhost:3000/memory-health-indicator
curl http://localhost:3000/microservice-health-indicator
curl http://localhost:3000/mongoose-health-indicator
curl http://localhost:3000/sequelize-health-indicator
curl http://localhost:3000/typeorm-health-indicator
```

##### Contributing
Contributions are welcome. Please make sure to update tests as appropriate.

License
[MIT](https://choosealicense.com/licenses/mit/)