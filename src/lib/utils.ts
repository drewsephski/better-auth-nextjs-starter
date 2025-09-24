import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple implementation of getLocalizedError
export function getLocalizedError({ error, localization }: { error: any, localization: any }) {
  // For now, just return a generic error message
  // In a real implementation, this would use the localization object
  return error?.message || "An error occurred";
}