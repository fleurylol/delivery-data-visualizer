import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { month } = body;
  const findMonth = await prisma.monthStatus.findUnique({
    where: {
      month,
    },
  });
  if (!findMonth) {
    return NextResponse.json({ message: "Month not found" }, { status: 404 });
  }
  findMonth.data = !findMonth.data;
  const updateMonth = await prisma.monthStatus.update({
    where: {
      month,
    },
    data: {
      data: findMonth.data,
    },
  });
  return NextResponse.json(updateMonth, { status: 201 });
}
