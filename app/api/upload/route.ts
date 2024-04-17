import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { dataUploadSchema } from "@/lib/schemas/dataUploadSchema";

export async function GET(request: NextRequest) {
  const delivery = await request.nextUrl.searchParams;
  const address = delivery.get("address");

  const findDelivery = await prisma.delivery.findUnique({
    where: {
      address: address!,
    },
  });
  if (!findDelivery) {
    await prisma.delivery.create({
      data: {
        address: address!,
      },
    });
  }

  return NextResponse.json(findDelivery, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { address, count, month } = body;
  const validation = dataUploadSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error, { status: 400 });
  }
  const monthKey = `${month.substring(0, 3).toLowerCase()}_total`;

  const updateDelivery = await prisma.delivery.update({
    where: {
      address,
    },
    data: {
      [monthKey]: count,
    },
  });

  return NextResponse.json(updateDelivery, { status: 201 });
}
