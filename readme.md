# 📘 TypeScript Learning Guide

Welcome to the **TypeScript Learning Guide**! This repository will help you learn the basics of TypeScript with examples and practical exercises. TypeScript extends JavaScript by adding static types, improving code readability and making large-scale applications easier to manage.

## 🌟 Why Learn TypeScript?

TypeScript is popular among developers for several reasons:

- **Type Safety**: Catch errors early in development.
- **Better Tooling**: Get improved autocompletion, refactoring, and error checking in your IDE.
- **Improved Scalability**: Helps manage large codebases with strict typing.
- **Enhanced Readability**: Writing clean, maintainable code with clear types.

---

## 🛠️ Installation and Setup

### 1. Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **npm**: Comes with Node.js, used for package management.

### 2. Install TypeScript

Install TypeScript globally or locally in your project.

- **Global Installation** (Optional):
  ```bash
  npm install -g typescript

## 📂 Project Structure
Here’s a typical project structure:

    my-typescript-project/
    ├── src/
    │   ├── index.ts         # Main TypeScript file
    ├── dist/                # Compiled JavaScript files
    ├── package.json         # Project metadata and dependencies
    ├── tsconfig.json        # TypeScript configuration file
    └── README.md            # This guide

## 🚀 Getting Started with TypeScript
1. Writing Your First TypeScript File
In the src/ directory, create a new file called index.ts:
    
    const greeting: string = "Hello, TypeScript!";
    console.log(greeting);

In this example, we define greeting as a string. TypeScript ensures the value stays a string throughout.

2. Compile the TypeScript Code
To compile the TypeScript code into JavaScript, run the following command:

    npx tsc


