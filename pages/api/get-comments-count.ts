import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCommentsCount(postId: string) {
  const where = postId
    ? {
        postId: postId,
      }
    : undefined;

  try {
    const response = await prisma.comments.count({ where: where });
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
  const { postId } = req.query;
  try {
    const comments = await getCommentsCount(String(postId));
    res.status(200).json({ items: comments, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
