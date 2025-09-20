import { useMemo } from 'react';

import { readPasskeySession } from '../auth/passkey';

/**
 * Template React hook for accessing a shared passkey session.
 * Replace the implementation once real storage logic is available.
 */
export function usePasskeySession() {
  return useMemo(() => readPasskeySession(), []);
}
