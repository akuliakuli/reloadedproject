import { NextResponse } from "next/server";

import prisma from '@/app/[locale]/libs/prismadb'
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import { Role } from "@/prisma/generated/client";

export async function POST(
  request: Request,
): Promise<any> {
  const currentUser = await getCurrentUser();

  if(currentUser?.role != Role.Admin){
    return null;
  }

  const body = await request.json();
  const { 
    title,
    image,
    content,
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

 
  
  
  const User = await prisma.blog.create({
    data: {
      image: image,
      title: title,
      content: content,
    },
  })
  
  return NextResponse.json(User);
}