import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type commentsQuery = {
  email: string;
  github: string;
  contents: string;
  postId: string;
};

async function addComment({ email, github, contents, postId }: commentsQuery) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      console.log('hello');
      await prisma.user.create({
        data: {
          email: email,
          github: github ?? '',
        },
      });
    }

    const comment = await prisma.comments.create({
      data: {
        email: email,
        github: github,
        contents: contents,
        postId: postId,
      },
    });
    return comment;
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
    const comment = await addComment(item);
    res.status(200).json({ items: comment, message: 'Success' });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
}
