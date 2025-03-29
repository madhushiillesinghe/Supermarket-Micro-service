# 🛒 Supermarket Microservices System

## 📌 Introduction
The **Supermarket Microservices System** is a scalable and distributed architecture built using **Spring Boot** and **Spring Cloud**. It manages supermarket operations by dividing responsibilities among different microservices, ensuring flexibility, maintainability, and scalability.

## 🏗 Architecture Overview
This project follows a **microservices architecture**, where each service operates independently and communicates through REST APIs and service discovery.

### 🔥 Key Components
- **Eureka Server** - Service Discovery for dynamic registration of microservices.
- **API Gateway** - Centralized entry point for all microservices, managing authentication and routing.
- **Order Service** - Handles customer orders and processes transactions.
- **Product Service** - Manages product details, pricing, and stock information.
- **Inventory Service** - Maintains stock levels and updates product availability.
- **Employee Service** - Manages employee records, roles, and permissions.

## ⚙️ Tech Stack
- **Backend:** Spring Boot, Spring Cloud, 
- **API Gateway:** Spring Cloud Gateway
- **Service Discovery:** Eureka Server
- **Communication:** Feign Client / RestTemplate

## 📂 Project Structure
```plaintext
├── eureka-server/          # Service Discovery
├── api-gateway/            # API Gateway for routing
├── order-service/          # Manages orders
├── product-service/        # Manages products
├── inventory-service/      # Handles inventory
├── employee-service/       # Manages employees
```

## 🔗 API Gateway Routing Example
```yaml
routes:
  - id: order-service
    uri: lb://ORDER-SERVICE
    predicates:
      - Path=/api/orders/**
      
  - id: product-service
    uri: lb://PRODUCT-SERVICE
    predicates:
      - Path=/api/products/**
```



## 🎯 Features
✅ Service Discovery with Eureka  
✅ Load Balancing & Routing via API Gateway  
✅ Secure Communication between services  

## 📜 License
This project is licensed under the **MIT License**.


🚀 **Happy Coding!** 🚀
