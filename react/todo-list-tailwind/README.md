# To-Do List Using Tailwind.css

## To run react project run below commands:
### Pre-requisites:

## Node.js 
Download from here: https://nodejs.org/en/download

## Goto To-Do List project
```
cd frontend-projects/react/todo-list
```

## To install and configure tailwind.css follow this section
### Step 1 - Install Tailwind css
```
npm install -D tailwindcss
npx tailwindcss init
```

## Step 2 - Configure tempate path for Tailwind
### Replace content: {} of tailwind.config.js file with below
```
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

## Step 3 - Add the Tailwind directives to your CSS
### Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install node modules
```
npm install
```

## Running the bundler
```
npm start
```

## Open To-Do List
http://localhost:3000/

## Useful links
### Tailwind.css docs 
[docs](https://tailwindcss.com/docs/installation)

### Tailwind.css class list
[list](https://tailwind.build/classes)