import { testEnvironmentVariable } from '../settings.js';
export * from './master/inventory/index.js';
export * from './pegawai/login.js';

export const indexAPI = (req, res) => res.status(200).json({ message: testEnvironmentVariable });
