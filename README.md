# Portfolio CEF

There is a portfolio, designed and developped for my formation to become a fullstack developper.
It use Vue.JS to structure and edit the content. It present works in a modal displaying JSON informations.
It use EmailJS to send email when a contact form is submit.

## :magic_wand: Features

- :sparkles: One Page Layout
- :sparkles: Custom with var colors
- :sparkles: Responsive
- :sparkles: Valid HTML5 & CSS3
- :sparkles: Contact form with EmailJS

## :building_construction: Getting Started

### :page_facing_up: Prerequisites

You'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) (which comes with NPM) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

### :hammer: Installation

From your command line, first clone Portfolio CEF :

```sh
# Clone repository
$ git clone https://github.com/AlexD004/CEFPortfolio

# Move into repository
$ git cd vue-project
```

After that, you can install the dependencies either using NPM.

```
# Install dependencies
$ npm install

# Run the project in Dev Mode to see the result
$ npm run dev
```

## :level_slider: Custom set-up

### :email: Change admin e-mail

You have to change the admin email in settings to receive emails from the contact form.

:open_file_folder: vue-project
        :page_facing_up: .env
        
1. In the main folder 'vue-project', search the file '.env'
2. Open it !
3. Write your mail adress
   
```
# What you will see
VITE_USER_MAIL="YOUR-MAIL-HERE"

# Whay you have to write
VITE_USER_MAIL="myadressmail@example.com"
```

### :art: Change fonts and colors

:open_file_folder: vue-project
    :open_file_folder: src
            :open_file_folder: assets
                :page_facing_up: base.css        

You can edit fonts and colors using css variables. You will find all in this file :
1. In the main folder 'vue-project', search the folder 'src'
2. In the folder 'src', search the folder 'assets'
3. In the folder 'assets', search the file 'base.css'
4. Open it and edit it !


## 	:house: Compile and Minify for Production

When the project is end, you can build it for production.

First, quite the Dev Mode...
```
$ q
```
... and compile your application.

```sh
npm run build
```


