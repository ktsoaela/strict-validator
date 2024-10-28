// index.js

/**
 * Validates input based on the specified type.
 * @param {string} input - The input to validate.
 * @param {string} type - The type of validation to apply.
 * @returns {string|boolean} - Returns the trimmed input if valid, or false if invalid.
 */
function validateField(input, type = 'text') {
    let result = input.trim(); // Always trim whitespace from start and end

    // Ensure input is not empty after trimming
    if (result === "") {
        return { valid: false, message: "Input cannot be empty or just whitespace." };
    }

    // Ensure input does not start with a space
    if (/^\s/.test(result)) {
        return { valid: false, message: "Input cannot start with a space." };
    }

    // For cases that do not allow special characters, ensure input does not start with special characters
    if (type !== 'text') {
        const invalidStartPattern = /^[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]/;
        if (invalidStartPattern.test(result)) {
            return { valid: false, message: "Input cannot start with a special character." };
        }
    }

    // Ensure input starts with at least one valid alphanumeric character
    const validStartPattern = /^[a-zA-Z0-9]/; // Starts with one letter or number
    if (!validStartPattern.test(result)) {
        return { valid: false, message: "Input must start with at least one letter or number." };
    }

    // Check for consecutive commas, spaces, or sequences of invalid characters
    if (/,,/.test(result) || /,\s*,/.test(result)) {
        return { valid: false, message: "Input cannot contain consecutive commas or commas with spaces." };
    }

    // Check for leading or trailing commas
    if (result.startsWith(",") || result.endsWith(",")) {
        return { valid: false, message: "Input cannot start or end with a comma." };
    }

    // Type-specific validation
    switch (type) {
        case 'number':
            if (!/^\d+$/.test(result)) {
                return { valid: false, message: "Input must only contain numbers." };
            }
            break;
        case 'letters':
            if (!/^[a-zA-Z]+$/.test(result)) {
                return { valid: false, message: "Input must only contain letters." };
            }
            break;
        case 'alphanumeric':
            if (!/^[a-zA-Z0-9\s]+$/.test(result)) {
                return { valid: false, message: "Input can only contain letters, numbers, and spaces." };
            }
            break;
        case 'text':
        case 'general':
            const generalPattern = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]+$/;
            if (!generalPattern.test(result)) {
                return { valid: false, message: "Input can only contain letters, numbers, spaces, and valid special characters." };
            }
            break;
        case 'email':
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(result)) {
                return { valid: false, message: "Input must be a valid email address." };
            }
            break;
        case 'text-underscore':
            const textWithUnderscorePattern = /^[a-zA-Z0-9\s-_]+$/;
            if (!textWithUnderscorePattern.test(result)) {
                return { valid: false, message: "Input can only contain letters, numbers, spaces, hyphens, and underscores." };
            }
            break;
        case 'snake_case':
            const snakeCasePattern = /^[a-z]+(_[a-z0-9]+)*$/;
            if (!snakeCasePattern.test(result)) {
                return { valid: false, message: "Input must be in snake_case format." };
            }
            break;
        case 'kebab-case':
            const kebabCasePattern = /^[a-z]+(-[a-z0-9]+)*$/;
            if (!kebabCasePattern.test(result)) {
                return { valid: false, message: "Input must be in kebab-case format." };
            }
            break;
        case 'camelCase':
            const camelCasePattern = /^[a-z]+([A-Z][a-z]*)*$/;
            if (!camelCasePattern.test(result)) {
                return { valid: false, message: "Input must be in camelCase format." };
            }
            break;
        default:
            const defaultPattern = /^[a-zA-Z0-9\s-!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]+$/;
            if (!defaultPattern.test(result)) {
                return { valid: false, message: "Input contains invalid characters." };
            }
            break;
    }

    // Additional edge case validation
    if (result === 'name') {
        return { valid: false, message: "Input cannot be the same as the reserved word 'name'." };
    }

    // Return valid result
    return { valid: true, value: result };
}

module.exports = { validateField };
