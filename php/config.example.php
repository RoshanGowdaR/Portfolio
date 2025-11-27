<?php
/**
 * Database Configuration Template
 * 
 * INSTRUCTIONS:
 * 1. Copy this file to 'config.php' in the same directory
 * 2. Update the values below with your actual database credentials
 * 3. NEVER commit config.php to your repository
 * 
 * For XAMPP/MAMP/Laragon default settings:
 * - DB_HOST: localhost
 * - DB_USER: root
 * - DB_PASS: (empty for XAMPP, 'root' for MAMP)
 * - DB_NAME: portfolio_db
 */

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');  // Leave empty for XAMPP, use 'root' for MAMP
define('DB_NAME', 'portfolio_db');

// Admin session configuration
define('SESSION_TIMEOUT', 1800); // 30 minutes in seconds

// Security settings
define('SECURE_COOKIES', false); // Set to true if using HTTPS

// Error reporting (set to false in production)
define('DISPLAY_ERRORS', true);

if (DISPLAY_ERRORS) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    error_reporting(0);
}
?>
