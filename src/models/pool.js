import pg from 'pg';
import dotenv from 'dotenv';
import { connectionString } from '../settings.js'

const { Pool } = pg
dotenv.config();

export const pool = new Pool({ connectionString });
