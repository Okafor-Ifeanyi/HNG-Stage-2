## HNG Stage 2 Backend - Develop REST API Capable of CRUD

# Node.js Express MongoDB CRUD API

A simple REST API for CRUD operations on a "person" resource using Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Documentation](#documentation)
- [UML Diagram](#uml-diagram)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- IDE- Vscode or any suitable.
- Node.js and npm installed.
- MongoDB installed and running.
- Postman or a similar tool for API testing.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Okafor-Ifeanyi/HNG-Stage-2
   ```

2. Change to the project directory:

    `cd your-api-repo`

3. Install dependencies:

    `npm install`

### Environment Variables

- Create a .env file in the root directory of your project and add the following environment variables:

1.  MONGODB_URI=your_mongodb_uri_here
2.  PORT=your_desired_port_here

## API Endpoints
- **Create a new person**:  `POST /api/`
- **Get details of a person by ID or Name**:  `GET /api/person/:info`

- **Update details of an existing person by ID**:   `PATCH /api/person/:id`

- **Remove a person by ID**:  `DELETE /api/person/:id`

## Testing
Use Postman or your preferred API testing tool to test the CRUD operations. Here's a sample Postman collection you can import: Postman Collection.
>   [Render Live](https://vitals-8myt.onrender.com)

## Documentation
>   [Postman Docs](https://documenter.getpostman.com/view/19026826/2s93m7X2Jc)

## UML Diagram
>   [Diagrams on dbdiagrams.io](https://dbdiagram.io/d/64fe69fa02bd1c4a5e4dcb09)

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

> Copyright (c) 2023 Prog BIO