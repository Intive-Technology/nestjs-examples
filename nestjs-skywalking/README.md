# NestJs Skywalking Example
SkyWalking is an open-source APM (Application Performance Monitor) system, especially designed for microservices, cloud native and container-based architectures. It helps developers to monitor distributed systems, especially based on microservices, cloud native and container architectures. SkyWalking provides distributed tracking, service mesh telemetry analysis, metric aggregation and visualization all-in-one solution.

NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

To instrument SkyWalking with NestJS, you need to follow these steps:

Install SkyWalking NodeJS Agent:
```npm install skywalking-backend-js```
Import and initialize SkyWalking in your main.ts file:
```
import { createApp } from 'nestjs';
import { Agent } from 'skywalking-backend-js';

const agent = new Agent();
agent.start({
  serviceName: 'nestjs-service',
  serviceInstance: 'instance1',
  collectorAddress: 'localhost:11800',
});

async function bootstrap() {
  const app = await createApp();
  await app.listen(3000);
}
bootstrap();
```
In the above code, we create a new SkyWalking agent and start it with the necessary configuration. The serviceName and serviceInstance are identifiers for your service in the SkyWalking UI. The collectorAddress is the address of your SkyWalking collector backend.

Use SkyWalking to monitor your NestJS application: Now, you can use SkyWalking to monitor your NestJS application. You can see traces, metrics, and the topology map of your services in the SkyWalking UI.
Please note that SkyWalking NodeJS Agent is in the incubating stage and may not fully support all features and scenarios. Always check the official documentation for the most accurate and up-to-date information.