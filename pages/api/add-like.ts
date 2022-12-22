//import { authOptions, CustomDefaultSession } from './auth/[...nextauth]'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
//import { getSession, useSession } from 'next-auth/react'

const prisma = new PrismaClient();

async function addLike(type: number, postId: string, hostName: string) {
  try {
    const like = await prisma.likes.findMany({
      where: {
        postId: postId,
        host: hostName,
        type: type,
      },
    });
    if (like.length > 0) {
      return like;
    }
    const response = await prisma.likes.create({
      data: {
        type: type,
        postId: postId,
        host: hostName,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { item } = JSON.parse(req.body);
  try {
    const like = await addLike(item.type, item.postId, req.headers.host);
    res.status(200).json({ items: like, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
