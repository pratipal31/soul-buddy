// app/api/checkRegistration/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { Pool } from 'pg';
import { getAuth } from '@clerk/nextjs/server';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const client = await pool.connect();
    
    const result = await client.query(
      'SELECT EXISTS(SELECT 1 FROM user_data WHERE user_id = $1)',
      [userId]
    );
    
    client.release();

    return NextResponse.json({ isRegistered: result.rows[0].exists });
  } catch (error) {
    console.error('Error checking registration:', error);
    return NextResponse.json({ message: 'Failed to check registration' }, { status: 500 });
  }
}