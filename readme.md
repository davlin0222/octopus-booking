# Octopus Booking

Octopus Booking is a project developed for a school assignment during the first year of the Digital Business Development program. It is designed to provide a booking management system to the fictional company Big Squid AB. This readme file will guide you on how to get started with running the project on your own machine.

## Getting Started

_A tutorial for running the project locally._

### Prerequisites

Before you can follow the guide, ensure that you have XAMPP installed or a similar local web server environment.

### Guide

To run Octopus Booking on your local machine, follow these steps:

1. Clone the Octopus Booking repository to your local machine.

    ```shell
    git clone https://github.com/davlin0222/octopus-booking.git
    ```

2. Start XAMPP and ensure that the Apache and MySQL services are running.

3. Open a web browser and navigate to `http://localhost/phpmyadmin/` to access the phpMyAdmin interface.

4. Create a new MySQL database for Octopus Booking.

---

5. Import the database schema and data by executing the SQL script provided in the `database` folder of the project.

6. Configure the database connection settings in the `config.php` file located in the project's root directory. Update the following variables with your MySQL credentials:

    ```php
    define('DB_HOST', 'localhost');
    define('DB_USERNAME', 'your-username');
    define('DB_PASSWORD', 'your-password');
    define('DB_NAME', 'your-database-name');
    ```

7. Open a web browser and navigate to `http://localhost/octopus-booking/` to access the Octopus Booking application.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
