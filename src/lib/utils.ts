import { type ClassValue, clsx } from "clsx";

/**
 * Utility function for conditionally joining class names.
 * Example: cn("base-class", isActive && "active-class")
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
