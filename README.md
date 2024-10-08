# Customer International Payments Portal

## Project Overview
The Customer International Payments Portal is a secure web application designed for handling international payments for customers. The application focuses on ensuring data security, implementing best practices for password management, and providing a user-friendly experience for customers to register and manage their payment details.

## Features
- User registration with password hashing for security.
- Input validation for user data.
- Rate limiting to protect against DDoS attacks.
- Secure data transmission using SSL.
- Integration with SonarCloud for code quality and security analysis.
- CI/CD pipeline setup using CircleCI.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Security**: bcryptjs, helmet, express-rate-limit
- **CI/CD**: CircleCI, SonarCloud

## Getting Started

### Prerequisites
- Node.js (v20.18.0 or later)
- MongoDB installed and running
- OpenSSL for generating SSL certificates
- A GitHub account for version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ST10041541apds/customer-payments-portal.git
   cd customer-payments-portal
