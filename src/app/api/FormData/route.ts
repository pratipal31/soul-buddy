// app/api/FormData/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { Pool } from 'pg';
import { getAuth } from '@clerk/nextjs/server';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const insertFormDataQuery = `
  INSERT INTO user_data (user_id, name, birth_day, birth_month, birth_year, birth_time, dont_know_time, state, city)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
`;

export async function POST(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { name, day, month, year, time, dontKnowTime, state, city } = await request.json();

    const client = await pool.connect();

    await client.query(insertFormDataQuery, [
      userId, // Store the Clerk user ID
      name,
      day,
      month,
      year,
      time,
      dontKnowTime,
      state,
      city,
    ]);

    client.release();

    return NextResponse.json({ message: 'Data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data to Neon DB:', error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  }
}