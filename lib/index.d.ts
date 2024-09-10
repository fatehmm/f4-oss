/**
 * Capitalizes the first letter of a string.
 * @param str - The input string.
 * @returns The capitalized string.
 */
export function capitalize(str: string): string;

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 * @param str - The input string.
 * @param maxLength - The maximum length of the string.
 * @returns The truncated string.
 */
export function truncate(str: string, maxLength: number): string;

/**
 * Converts a string to a URL-friendly slug.
 * @param str - The input string.
 * @returns The slugified string.
 */
export function slugify(str: string): string;
