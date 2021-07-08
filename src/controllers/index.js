import { testEnvironmentVariable } from '../settings.js';
export * from './master/inventory.js';

export const indexAPI = (req, res) => res.status(200).json({ message: testEnvironmentVariable });
