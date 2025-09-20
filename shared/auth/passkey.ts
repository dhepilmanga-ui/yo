/**
 * Placeholder utilities for shared authentication helpers.
 * Replace these stubs with project-specific passkey session logic.
 */

export type Session = {
  moduleId?: string;
  userId: string;
};

export function createPasskeySession(): never {
  throw new Error('Implement passkey session helpers for your project.');
}

export function readPasskeySession(): null {
  return null;
}

export function clearPasskeySession(): void {
  // Intentionally empty; template projects should provide an implementation.
}
