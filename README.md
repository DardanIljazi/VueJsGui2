# VueJsGui2
Projet VueJs du cours GUI2 au CPNV

## Set up development

### I. Clone the repository
Clone the repository with

```bash
git clone https://github.com/Dardanboy/VueJsGui2.git
```

### II. Install dependencies
Go to your project folder and run the installation of laravel dependencies.

```bash
cd /path/to/your/local/clone/of/VueJsGui2

# install composer dependencies
composer install

# install the npm dependencies
npm i
```

### III. Set up your application key

Finally, for laravel to work properly, you must generate the application key.

```bash
cd /path/to/your/local/clone/of/VueJsGui2

php artisan key:generate
```

### IV. Launch the web server

```bash
php artisan serve
```

### V. Access the webpage

[Access localhost:8000](localhost:8000) By Default (has to be change to another Port if already Used)

### VI. Enjoy!
