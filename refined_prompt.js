/**
 * Converts a given string to dot.case (lowercase words separated by dots).
 *
 * The function performs the following transformations:
 * - Converts camelCase or PascalCase to dot.case (e.g., 'helloWorld' → 'hello.world').
 * - Replaces spaces, underscores, and hyphens with dots.
 * - Collapses multiple consecutive dots into a single dot.
 * - Converts the entire string to lowercase.
 * - Trims leading and trailing dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in dot.case format.
 *
 * @example
 * toDotCase('HelloWorld Example_string');
 * // Returns: 'hello.world.example.string'
 *
 * @example
 * toDotCase('foo-bar_baz');
 * // Returns: 'foo.bar.baz'
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2') // camelCase to camel.Case
        .replace(/[\s_-]+/g, '.')            // spaces, underscores, hyphens to dots
        .replace(/\.{2,}/g, '.')             // multiple dots to single dot
        .toLowerCase()
        .replace(/^\.+|\.+$/g, '');          // trim leading/trailing dots
}

// Example usage:
// toDotCase('HelloWorld Example_string') // 'hello.world.example.string'
module.exports = toDotCase;
