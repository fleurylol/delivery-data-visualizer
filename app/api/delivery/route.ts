import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const delivery = await prisma.delivery.findMany();
  return NextResponse.json(delivery, { status: 200 });
}
