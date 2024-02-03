# Vue auth with translate

### Hi!
This GitHub project offers a simple example showcasing authentication in Vue.js and Vuex, employing the composition API. Additionally, the second page features a sample demonstrating server communication and translating mocks.

## **Requirements:**

- The project has to be developed using [Vue.js](https://vuejs.org/) latest version;
- The application has to run similarly on all modern browsers (Chrome, Firefox, Safari*, Edge*);
- The application has to be responsive (mobile, tablet and desktop);

### **Additional information**
- This repo contains a vue project generated usin vue cli, To get started, see below
```bash
  # use node version 14, because of node-sass 4 used on the project
  yarn install
  yarn serve # to run the application locally
  yarn build
  yarn test:unit # to test your application
  yarn lint
  See [Configuration Reference](https://cli.vuejs.org/config/) for more config setup.
```

### Installing

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Change into the project's directory:

   ```bash
   cd project-directory
   ```

3. Install project dependencies:

   ```bash
   npm install || yarn
   ```

4. Create an `.env` file in the project root directory and set your server's API URL:

   ```
   VUE_APP_SERVER_API=http://your-server-ip:your-server-port
   ```

### Running the Development Server

To start the development server:

```bash
npm run serve
```

Visit [http://localhost:8080](http://localhost:8080) in your browser to view your application.

### Building for Production

To build the project for production:

```bash
npm run build
```

This command will create a `dist` directory containing optimized production-ready files.

### Running Tests

To run unit tests:

```bash
npm run test:unit
```