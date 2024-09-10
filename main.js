/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 * @param {string} str - The input string.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} The truncated string.
 */
function truncate(str, maxLength) {
    if (typeof str !== 'string' || str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} str - The input string.
 * @returns {string} The slugified string.
 */
function slugify(str) {
    if (typeof str !== 'string') return '';
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export { capitalize, slugify, truncate };
