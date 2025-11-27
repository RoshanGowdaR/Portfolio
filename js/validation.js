/**
 * Form Validation Module
 * Handles client-side validation for contact form
 * Includes configurable USN validation pattern
 */

(function() {
    'use strict';
    
    // ===== CONFIGURATION =====
    // USN Pattern: Modify this to match your university's USN format
    // Default pattern: 1RV21CS001 (1 digit, 2 letters, 2 digits, 2 letters, 3 digits)
    const USN_PATTERN = /^[1-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;
    const USN_FORMAT_MESSAGE = 'USN format: e.g., 1RV21CS001 (1 digit, 2 letters, 2 digits, 2 letters, 3 digits)';
    
    // Validation patterns
    const PATTERNS = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        name: /^[a-zA-Z\s]{2,50}$/,
        usn: USN_PATTERN
    };
    
    // Error messages
    const MESSAGES = {
        required: 'This field is required',
        email: 'Please enter a valid email address',
        name: 'Name should only contain letters and spaces (2-50 characters)',
        usn: USN_FORMAT_MESSAGE,
        minLength: (min) => `Minimum ${min} characters required`,
        maxLength: (max) => `Maximum ${max} characters allowed`
    };
    
    /**
     * Validate a single field
     * @param {HTMLElement} field - Input field to validate
     * @returns {boolean} - Whether the field is valid
     */
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        // Clear previous error
        clearError(field, errorElement);
        
        // Check if required
        if (field.hasAttribute('required') && !value) {
            showError(field, errorElement, MESSAGES.required);
            return false;
        }
        
        // Skip validation if field is not required and empty
        if (!field.hasAttribute('required') && !value) {
            return true;
        }
        
        // Field-specific validation
        switch (fieldName) {
            case 'name':
                if (!PATTERNS.name.test(value)) {
                    showError(field, errorElement, MESSAGES.name);
                    return false;
                }
                break;
                
            case 'email':
                if (!PATTERNS.email.test(value)) {
                    showError(field, errorElement, MESSAGES.email);
                    return false;
                }
                break;
                
            case 'usn':
                // USN is optional, but if provided, must match pattern
                if (value && !PATTERNS.usn.test(value.toUpperCase())) {
                    showError(field, errorElement, MESSAGES.usn);
                    return false;
                }
                break;
                
            case 'subject':
                if (value.length < 3) {
                    showError(field, errorElement, MESSAGES.minLength(3));
                    return false;
                }
                if (value.length > 100) {
                    showError(field, errorElement, MESSAGES.maxLength(100));
                    return false;
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    showError(field, errorElement, MESSAGES.minLength(10));
                    return false;
                }
                if (value.length > 1000) {
                    showError(field, errorElement, MESSAGES.maxLength(1000));
                    return false;
                }
                break;
        }
        
        return true;
    }
    
    /**
     * Show error message for a field
     * @param {HTMLElement} field - Input field
     * @param {HTMLElement} errorElement - Error message element
     * @param {string} message - Error message
     */
    function showError(field, errorElement, message) {
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.setAttribute('role', 'alert');
        }
    }
    
    /**
     * Clear error message for a field
     * @param {HTMLElement} field - Input field
     * @param {HTMLElement} errorElement - Error message element
     */
    function clearError(field, errorElement) {
        field.classList.remove('error');
        field.setAttribute('aria-invalid', 'false');
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.removeAttribute('role');
        }
    }
    
    /**
     * Sanitize input to prevent XSS
     * @param {string} input - User input string
     * @returns {string} - Sanitized string
     */
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
    
    /**
     * Initialize form validation
     */
    function initFormValidation() {
        const form = document.getElementById('contact-form');
        
        if (!form) return;
        
        // Real-time validation on blur
        const fields = form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            
            // Clear error on input
            field.addEventListener('input', () => {
                const errorElement = document.getElementById(`${field.name}-error`);
                if (field.classList.contains('error')) {
                    clearError(field, errorElement);
                }
            });
            
            // Auto-uppercase USN
            if (field.name === 'usn') {
                field.addEventListener('input', () => {
                    field.value = field.value.toUpperCase();
                });
            }
        });
        
        // Form submission (client-side only for GitHub Pages)
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate form
            if (!validateForm(form)) {
                showFormStatus('error', 'Please fix the errors above and try again.');
                return;
            }

            // Since GitHub Pages cannot run PHP or a database,
            // we simply show a success message and reset the form.
            showFormStatus('success', 'Thank you for your message! Since this site is hosted on GitHub Pages, please also email me directly at gowdaroshan49@gmail.com for important enquiries.');
            form.reset();
        });
    }
    
    /**
     * Show form status message
     * @param {string} type - 'success' or 'error'
     * @param {string} message - Status message
     */
    function showFormStatus(type, message) {
        const statusElement = document.getElementById('form-status');
        
        if (!statusElement) return;
        
        statusElement.className = `form-status ${type}`;
        statusElement.textContent = message;
        statusElement.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 5000);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFormValidation);
    } else {
        initFormValidation();
    }
    
    // Export functions for external use
    window.FormValidator = {
        validateField,
        validateForm,
        sanitizeInput,
        showFormStatus
    };
    
})();
