# Personal Portfolio Website

This is the repository for my personal portfolio website, built with React and Vite. It showcases my skills, projects, and professional experience as a software engineering student.

## Description

This project is a single-page application designed to be a comprehensive and interactive showcase of my work. It features a clean and modern design with smooth animations and transitions. The portfolio is built to be easily configurable and extensible for future updates.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need to have the following installed on your machine:

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone "https://github.com/your-github-username/your-portfolio-repo.git"
   cd your-portfolio-repo
   ```

2. **Install the dependencies:**

   Using npm:

   ```sh
   npm install
   ```

   Or using yarn:

   ```sh
   yarn install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root of the project by copying the example file:

   ```sh
   cp .env.example .env
   ```

   Then, open the `.env` file and replace the placeholder values with your own information.

   ```env
   # Vite environment variables

   # Contact + Social
   VITE_CONTACT_EMAIL=your-email@example.com
   VITE_CONTACT_PHONE=your-phone-number
   VITE_SOCIAL_GITHUB=https://github.com/your-handle
   VITE_SOCIAL_LINKEDIN=https://www.linkedin.com/in/your-handle/
   VITE_SOCIAL_MEDIUM=https://medium.com/@your-handle

   # Contact form backend (Formspree recommended)
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

## Usage

To start the development server, run one of the following commands:

Using npm:

```sh
npm run dev
```

Or using yarn:

```sh
yarn dev
```

This will start the development server. Open the local dev server (default port: 5173). The exact port may vary.

## Built With

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool and development server for modern web projects.
- CSS: Custom styling for the components and layout.
- Framer Motion: For animations and transitions.
- React Icons: A library of popular icons.

## Contact

- Mohamed Niyaz — mohamed.niyaz219@gmail.com