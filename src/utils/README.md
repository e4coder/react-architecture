# Primetrader Dashboard Backend

## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Development Setup](#development-setup)
   - [Prerequisites](#prerequisites)
   - [Getting Started](#getting-started)
   - [Working with the Application](#working-with-the-application)
   - [Swagger Documentation](#swagger-documentation)
   - [Folder Structure](#folder-structure)
4. [Swagger UI for API Testing and Integration](#swagger-ui-for-api-testing-and-integration)
5. [Contributing](#contributing)

## Overview
The Primetrader Dashboard Backend is a robust backend system designed to power the Primetrader Admin Dashboard. This backend serves as the backbone for managing various administrative tasks and data management for the Primetrader platform.

## Technologies Used

- **Gorilla Mux**:  A powerful URL router and dispatcher for Golang.
- **Go Ethereum (Geth)**: Used for interacting with the Ethereum blockchain.
- **PostgreSQL**: Robust and reliable database management system for data storage.
- **Swaggo**: A tool to automatically generate Swagger documentation for the Go API.
- **Grafana**: An open-source platform for monitoring and observability. Grafana is used to create dashboards with real-time visualizations of the system's health and performance metrics.
- **Prometheus**: An open-source monitoring and alerting toolkit. It's integrated with Grafana to provide detailed insights and analytics for system monitoring, particularly focusing on time-series data.
- **PkgSite**: A tool for browsing and searching Go packages and modules. It is used to manage and document the dependencies and packages in the Go ecosystem for the project.

# Development Setup
This guide walks you through setting up a development environment for the project. This setup includes dashboard-backend, PostgreSQL, and Docker for containerization.

| Service        | Description                | URI                     | Env          |
|----------------|----------------------------|-------------------------|--------------|
| app            | API Server                 | localhost:8080          | Docker       |
| postgresql     | Development Database       | localhost:5433          | Docker       |
| prometheus     | Prometheus Metrics Scraper | localhost:9090          | Docker       |
| grafana        | Metrics Visualization      | localhost:3001          | Docker       |
| pkgsite        | godoc explorer             | localhost:4500          | ./pkgsite.sh |
| swagger        | API endpoints documentation| localhost:8080/swagger/ | ./swagger.sh |

`grafana default user and passwrod { admin, admin }`

## Prerequisites
Before you begin, ensure you have the following installed on your system:
* Docker and Docker Compose
* PostgreSQL command-line tools (`pg_dump` and `psql`) for database operations
* Git (optional for cloning the repository)

## Getting Started
1. **Clone the Repository** (if applicable)
```sh
git clone https://github.com/prime-trader/dashboard-backend.git
cd dashboard-backend
```
---
2. **Set Up the Development Environment**
We use Docker Compose to set up the local development environment. The `docker-compose.dev.yml` file defines the necessary services, volumes, and configurations.
```sh
docker-comose -f docker-compose.dev.yml up -d
```
This command starts the service defined in `docker-compose.dev.yml` in detached mode.

---
3. **Accessing the Development Container**
To access the container's shell where the Golang application is running, use the provided script:
```sh
./open_shell.sh
```
Inside the container, you can manually start the application using:
```sh
go run main.go
```

---
4. **Database Setup**
The project depends on PostgreSQL 15. The Docker Compose setup includes the PostgreSQL service.

**Copying Data from Remote Database** (if needed)
if you need to copy data from a remote database (sandbox env), first configure the `copy_db.sh` script with your remote and local database credentials.
Then, run the script to copy the data:
```sh
./copy_db.sh
```

## Working with the Application
* **Viewing Logs**
To view the logs of your running services:
```sh
docker-compose -f docker-compose.dev.yml logs
```
* **Stopping the Services**
To stop the Docker Compose services:
```sh
docker-compose -f docker-compose.dev.yml down
```
## Swagger Documentation
Run the command `swag init` to build the Swagger specification file. If the environment is set to `dev`, the Swagger UI can be accessed at the `/swagger/` endpoint, which provides detailed documentation of all API endpoints and their specifications.

## Folder Structure
- **/api**
  - **/db**
  - **/metrics**
  - **/middlewares**
  - **/router**
  - **/routes**
    - **/auth**
    - **/users**
    - **/wallets**
  - **/types**
  - **/utils**
  - **/validator**
- **/docs**
- **/grafana-provisioning**
  - **/dashboards**
  - **/datasources**
- **/web3**

| Directory         | Description                                 |
|-------------------|---------------------------------------------|
| /db               | db connection and queries                   |
| /metrics          | prometheus configurations                   |
| /middlewares      | routing middlewares                         |
| /router           | router setup                                |
| /routes           | api endpoints                               |
| /routes/auth      | auth endpoints                              |
| /routes/users     | user endpoints                              |
| /routes/wallets   | wallet endpoints                            |
| /types            | shared types                                |
| /utils            | utility and helper functions                |
| /validator        | validator instance and custom validation setup |
| /docs             | swagger spec (auto generated)               |
| /web3             | goethereum and contract bindings            |
| /grafana-provisioning | grafana default dashboards and datasources for development env |

# Swagger UI for API Testing and Integration

The Primetrader Dashboard Backend includes an interactive Swagger UI that provides a visual interface for exploring and testing the API endpoints. This interface makes it easier to understand and integrate the API functionalities.

## Accessing Swagger UI
- The Swagger UI can be accessed at: [http://localhost:8080/swagger/](http://localhost:8080/swagger/)
- Ensure that the backend server is running and accessible.

## Features of Swagger UI
- **Interactive Documentation**: Browse through the list of all available API endpoints with their detailed documentation.
- **Try Out API Requests**: Directly send requests to the API endpoints from the UI and view the responses.
- **Parameter Customization**: Easily customize request parameters and body to test different scenarios and inputs.
- **Curl Command Generation**: For each API request, Swagger UI provides the equivalent `curl` command, which can be used for command-line testing and integration.

## Utilizing Swagger UI for Development
- **Quick Testing**: Test the endpoints immediately without writing any additional code or using separate API testing tools.
- **Error Debugging**: Check responses and debug errors or unexpected behaviors of the API endpoints.
- **Frontend Integration**: Use the Swagger UI to understand the API specifications, making frontend integration more straightforward.

Remember, the Swagger UI is only accessible if the environment is set to `dev`. It is recommended to restrict access to the Swagger UI in production environments for security reasons.

For any issues or questions regarding the use of Swagger UI, please reach out to [noman@primetrader.com](mailto:noman@primetrader.com).


# Contributing
 Please ensure to follow the existing code structure and maintain the coding standards.

---

For more information, questions, or feedback, please contact [noman@primetrader.com](mailto:noman@primetrader.com).