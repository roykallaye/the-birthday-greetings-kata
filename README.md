# Birthday Greetings Kata

## Description

This project is a Node.js application written in TypeScript that sends birthday greetings to employees. It demonstrates the use of TypeScript with Node.js, including environment variables, email sending functionality, and file-based data storage.

## Features

- Handles sending birthday greetings via email.
- Reads employee data from a file.
- Configurable with environment variables for email credentials.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.11.0 or higher)
- [npm](https://www.npmjs.com/) (v9.8.1 or higher)

## Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/roykallaye/the-birthday-greetings-kata.git
   ```

2. Navigate to the Project Directory

```
cd the-birthday-greetings-kata
```

3. Install Dependencies

```
npm install
```

4. Create a .env File

Create a .env file in the root directory of the project and add your environment variables. For example:

```
EMAIL=your-email@example.com
PASSWORD=your-email-password  (Gmail app password, to be generated first)
```

5. Run the Application

```
npm start
```

This command will start your application. Ensure your package.json has a start script defined.

6. Run Tests

```
npm test
```

This will execute your test suite using Jest.

7. Project Structure
```
src/: Contains the source TypeScript files.
dist/: Compiled JavaScript files (generated after building the project).
test/: Test files.
.env: Environment variables file.
package.json: Project metadata and dependencies.
tsconfig.json: TypeScript configuration file.
README.md: This file.
```

9. Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.
