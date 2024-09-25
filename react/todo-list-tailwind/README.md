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

### Result

### Light Theme

No To-Do: ![No_TO_DO](https://github.com/user-attachments/assets/3fb0fe84-d620-4572-9561-95cfeab64ba6)

Add To-Do: ![Add_To_Do](https://github.com/user-attachments/assets/29be1a03-66f7-4005-baba-d22067ab061f)

Edit To-Do: ![Edit_To_Do](https://github.com/user-attachments/assets/8cad33c1-572d-4afe-b0e8-7084de2a9b63)

View To-Do: ![light_theme_view_to_do](https://github.com/user-attachments/assets/4334b16c-c61d-4c05-a926-54240cd6e060)

### Dark Theme

No To-Do: ![dark_theme_no_to_do](https://github.com/user-attachments/assets/e99e57f0-b8c0-4815-a004-a77b860107a6)

Add To-Do: ![dark_theme_add_to_do](https://github.com/user-attachments/assets/0fd630c5-8942-448f-9567-9bc14efac48e)

Edit To-Do: ![dark_theme_update_to_do](https://github.com/user-attachments/assets/9262d2d8-cf73-4d69-97d0-936fca559895)

View To-Do: ![dark_theme_View_to_do](https://github.com/user-attachments/assets/3217810d-fda0-4f1b-9958-960fdcb3688a)
