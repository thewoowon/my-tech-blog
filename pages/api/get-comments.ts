import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

async function getComments(skip: number, take: number, postId: string) {
  const where = postId
    ? {
        postId: postId,
      }
    : undefined;

  try {
    const response = await prisma.comments.findMany({
      skip: skip ? skip : 0,
      take: take ? take : 5,
      where: where,
      orderBy: { createdAt: 'desc' },
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
  const { skip, take, postId } = req.query;
  try {
    const comments = await getComments(
      Number(skip),
      Number(take),
      String(postId)
    );
    res.status(200).json({ items: comments, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
