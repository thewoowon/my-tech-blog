import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

async function getLikes(postId: string, hostName: string) {
  console.log(hostName);
  const where = postId
    ? {
        postId: postId,
      }
    : undefined;

  try {
    const response = await prisma.likes.findMany({
      where: where,
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
  const { postId } = req.query;
  try {
    const likes = await getLikes(String(postId), String(req.headers.host));
    res.status(200).json({ items: likes, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
