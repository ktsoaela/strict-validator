// tests/validateField.test.js

const { validateField } = require('../index');

describe("validateField function", () => {
    test("Validates number input", () => {
        const result = validateField("123456", 'number');
        expect(result).toEqual({ valid: true, value: "123456" });
    });

    test("Fails validation for non-numeric input as number", () => {
        const result = validateField("123abc", 'number');
        expect(result).toEqual({ valid: false, message: "Input must only contain numbers." });
    });

    test("Validates letters-only input", () => {
        const result = validateField("John", 'letters');
        expect(result).toEqual({ valid: true, value: "John" });
    });

    test("Fails validation for non-letter input as letters", () => {
        const result = validateField("John123", 'letters');
        expect(result).toEqual({ valid: false, message: "Input must only contain letters." });
    });

    test("Validates alphanumeric input", () => {
        const result = validateField("John Doe", 'alphanumeric');
        expect(result).toEqual({ valid: true, value: "John Doe" });
    });

    test("Validates email format", () => {
        const result = validateField("test@example.com", 'email');
        expect(result).toEqual({ valid: true, value: "test@example.com" });
    });

    test("Fails validation for invalid email format", () => {
        const result = validateField("not-an-email", 'email');
        expect(result).toEqual({ valid: false, message: "Input must be a valid email address." });
    });

    test("Validates snake_case format", () => {
        const result = validateField("hello_world", 'snake_case');
        expect(result).toEqual({ valid: true, value: "hello_world" });
    });

    test("Fails validation for incorrect snake_case format", () => {
        const result = validateField("HelloWorld", 'snake_case');
        expect(result).toEqual({ valid: false, message: "Input must be in snake_case format." });
    });

    test("Validates camelCase format", () => {
        const result = validateField("helloWorld", 'camelCase');
        expect(result).toEqual({ valid: true, value: "helloWorld" });
    });

    test("Fails validation for incorrect camelCase format", () => {
        const result = validateField("hello_world", 'camelCase');
        expect(result).toEqual({ valid: false, message: "Input must be in camelCase format." });
    });
});
