# Strict Validator

A robust, configurable validation library for JavaScript developers who want strict data validation for user and tester inputs. **Strict Validator** enforces formatting rules and validates various input types to reduce errors and ensure consistent, high-quality data.

## Installation

Install the package via npm:

```bash
npm install strict-validator
```

## Usage

Import `validateField` from **Strict Validator** and specify the type of validation required for each input.

```javascript
const { validateField } = require('strict-validator');

// Example usage
let numberResult = validateField("123456", 'number'); // Validates a numeric input
let lettersResult = validateField("John", 'letters'); // Validates letters-only input
let emailResult = validateField("test@example.com", 'email'); // Validates email format
let snakeCaseResult = validateField("hello_world", 'snake_case'); // Validates snake_case input
```

## Validation Types

### Supported Types

- **number**: Ensures input contains only numeric characters.
- **letters**: Allows only alphabetical characters (a-z, A-Z).
- **alphanumeric**: Permits letters, numbers, and spaces.
- **text**: Allows letters, numbers, spaces, and specific special characters.
- **email**: Validates a standard email format.
- **text-underscore**: Allows letters, numbers, spaces, underscores, and hyphens.
- **snake_case**: Enforces snake_case formatting.
- **kebab-case**: Enforces kebab-case formatting.
- **camelCase**: Validates camelCase input.

### Example Validations

```javascript
// Validate numeric input
let numberResult = validateField("123456", 'number'); // Returns '123456' if valid, false if invalid

// Validate letters-only input
let lettersResult = validateField("John", 'letters'); // Returns 'John' if valid, false if invalid

// Validate alphanumeric input
let textResult = validateField("John Doe", 'alphanumeric'); // Returns 'John Doe' if valid, false if invalid

// Validate email
let emailResult = validateField("test@example.com", 'email'); // Returns 'test@example.com' if valid, false if invalid

// Validate snake_case
let snakeCaseResult = validateField("hello_world", 'snake_case'); // Returns 'hello_world' if valid, false if invalid

// Validate kebab-case
let kebabCaseResult = validateField("hello-world", 'kebab-case'); // Returns 'hello-world' if valid, false if invalid

// Validate camelCase
let camelCaseResult = validateField("helloWorld", 'camelCase'); // Returns 'helloWorld' if valid, false if invalid
```

### Handling Validation Results

Each call to `validateField` returns either:
- The trimmed, validated input (if valid), or
- `false` if invalid, with an optional error message.

```javascript
let result = validateField("hello@example.com", 'email');
if (result) {
    console.log("Valid input:", result);
} else {
    console.log("Invalid input");
}
```

## Error Messages

Errors for invalid inputs will display specific messages for:
- Empty or whitespace-only inputs
- Input starting with special characters
- Invalid characters based on the specified type
- Reserved words (e.g., `name`)


## License

This package is open-source and available under the MIT License.