import { NextRequest, NextResponse } from 'next/server';
import { hashSync } from 'bcryptjs';

import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (user) throw new Error('Email is ready');

    await prisma.user.create({
      data: { username, email, password: hashSync(password, 10) },
    });

    return NextResponse.json({ message: 'successfully!' }, { status: 202 });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 404 }
    );
  }
}
