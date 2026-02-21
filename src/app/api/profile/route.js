import { connectDB } from "@/lib/db"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"

export async function GET(req) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  await connectDB()

  const user = await User.findById(session.user.id).select("-password")

  return Response.json(user)
}

export async function PUT(req) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  await connectDB()

  const data = await req.json()

  await User.findByIdAndUpdate(session.user.id, {
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
  })

  return Response.json({ success: true })
}