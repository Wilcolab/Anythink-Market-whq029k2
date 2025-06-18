function toKebabCase(input) {
    return input
        // Replace camelCase with camel-Case
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase();
}