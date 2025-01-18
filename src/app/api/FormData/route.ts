// app/api/FormData/route.ts
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL, // Replace with your Neon DB URL
  ssl: {
    rejectUnauthorized: false,
  },
});

const insertFormDataQuery = `
  INSERT INTO user_data (id, name, birth_day, birth_month, birth_year, birth_time, dont_know_time, state, city)
  VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)
`;

export async function POST(request: Request) {
  try {
    const { name, day, month, year, time, dontKnowTime, state, city } =
      await request.json();

    const client = await pool.connect();

    // Execute the insert query
    await client.query(insertFormDataQuery, [
      name,
      day,
      month,
      year,
      time,
      dontKnowTime,
      state,
      city,
    ]);

    client.release(); // Release the client back to the pool

    return NextResponse.json({ message: 'Data saved successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data to Neon DB:', error);
    return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
  }
}
