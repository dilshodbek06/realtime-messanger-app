import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name, password } = await req.json();
    if (!email || !name || !password) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
    
  } catch (error) {
    console.log("[REGISTER_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
