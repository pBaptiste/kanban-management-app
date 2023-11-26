"use server";
import { prisma } from "@/lib/prisma";
export async function getBoards() {
  const boards = await prisma.board.findMany({
    where: { authorId: "clpd71lq5000093r050zndf2x" },
  });

  return boards;
}
