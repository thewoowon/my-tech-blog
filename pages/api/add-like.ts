/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

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
  } catch (_error) {
    console.error(_error);
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { item } = JSON.parse(req.body);
  try {
    const like = await addLike(
      item.type,
      item.postId,
      IP6to4(req.socket.remoteAddress),
    );
    res.status(200).json({ items: like, message: 'Success' });
  } catch (_error) {
    res.status(400).json({ message: 'Failed' });
  }
}

function IP6to4(ip6: any) {
  function parseIp6(ip6str: any) {
    const str = ip6str.toString();

    // Initialize
    const ar = [];
    for (let i = 0; i < 8; i++) ar[i] = 0;

    // Check for trivial IPs
    if (str == '::') return ar;

    // Parse
    const sar = str.split(':');
    let slen = sar.length;
    if (slen > 8) slen = 8;
    let j = 0;
    for (let i = 0; i < slen; i++) {
      // This is a "::", switch to end-run mode
      if (i && sar[i] == '') {
        j = 9 - slen + i;
        continue;
      }
      ar[j] = parseInt(`0x0${sar[i]}`);
      j++;
    }

    return ar;
  }

  const ip6parsed = parseIp6(ip6);
  const ip4 = `${ip6parsed[6] >> 8}.${ip6parsed[6] & 0xff}.${
    ip6parsed[7] >> 8
  }.${ip6parsed[7] & 0xff}`;
  return ip4;
}
