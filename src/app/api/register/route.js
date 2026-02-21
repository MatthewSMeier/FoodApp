import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await connectDB();

    const {
      firstName,
      lastName,
      email,
      password,
      address,
    } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      provider: "credentials",
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}