<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Laravel SB Admin Template

> Laravel v9.15.0

> Bootstrap 4 - SB Admin 2

## Requirements

-   Version Control System (VCS): [GIT](https://git-scm.com/)
-   Project Installer, one of the following:
    -   [Docker Desktop / Docker Compose](http://docker.com/)
    -   [NodeJS](https://nodejs.org/), [PHP](https://www.php.net/downloads.php#v8.1.6) and [Composer](https://getcomposer.org/)

## Installation

### With Laravel Sail

If your local machine already has [Docker](http://docker.com/) installed

> Under the hood laravel sail is using docker compose

```bash
# Download official laravel installation
curl -s https://laravel.build/laravel-sb-admin | bash

# Enter working directory
cd laravel-sb-admin

# Init Git local repository
git init

# Stage Git file
git add .

# Commit laravel project
git commit -m "install laravel --fresh"

# Set remote repository as origin
git remote add origin https://github.com/alHasandev/laravel-sb-admin.git

# Fetch and merge with laravel-sb-admin template
git pull --set-upstream -f --no-rebase --allow-unrelated-histories origin main
git checkout --theirs .
git add .
git commit -m "install template:https://github.com/alHasandev/laravel-sb-admin.git"
```

### With NodeJS, PHP and Composer

If your local machine already has [NodeJS](https://nodejs.org/), [PHP](https://www.php.net/downloads.php#v8.1.6) and [Composer](https://getcomposer.org/) installed

```bash
# Clone Repository
git clone https://github.com/alHasandev/laravel-sb-admin.git

# Enter working directory
cd larave-sb-admin

# Install dependencies
composer update
npm install

# Generate js modules
npm run dev
```

## Environment Settings

Before you start developing make sure you have `.env` file on your project directory root

If you are using [Docker](http://docker.com/) in development you can simply rename `.env.sail` file to `.env`

Otherwise you can use `.env.example` file and rename it to `.env`

Adjust `.env` settings to your project preferences

## Development

### With Laravel Sail

```bash
# On your project root directory
./vendor/bin/sail up
```

```bash
# Or running sail with detached mode
./vendor/bin/sail up -d
```

After sail up and running, run the following command on current terminal (if you using -d (detached) flag) or other terminal to generate js modules

```bash
# Install package dependencies
sail npm install
```

```bash
# Generate js modules
sail npm run dev
```

### With Laravel PHP Artisan

Before you can run php artisan, you must generate a key

```bash
# On your project root directory
php artisan key:generate
```

And run the local development server:

```bash
# On your project root directory
php artisan serve
```

If above instructions success now you can start view your web on browser `http://localhost:8000` (based on your .env setting)

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

-   **[Vehikl](https://vehikl.com/)**
-   **[Tighten Co.](https://tighten.co)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Cubet Techno Labs](https://cubettech.com)**
-   **[Cyber-Duck](https://cyber-duck.co.uk)**
-   **[Many](https://www.many.co.uk)**
-   **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
-   **[DevSquad](https://devsquad.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
-   **[OP.GG](https://op.gg)**
-   **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
-   **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
