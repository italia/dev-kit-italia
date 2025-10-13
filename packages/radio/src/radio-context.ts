/**
 * Lit Context for radio group communication
 * Allows radio buttons to communicate with their parent group
 */

import { createContext } from '@lit/context';
import type { ItRadioGroup } from './it-radio-group.js';

/**
 * Context key for accessing the parent radio group
 */
export const radioGroupContext = createContext<ItRadioGroup | undefined>(Symbol('radio-group'));
