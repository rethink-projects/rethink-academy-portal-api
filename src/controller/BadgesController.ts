import { Request, Response } from "express";
import { prismaInstance } from "../../database/prismaClient";

type badgeType =
  | "product"
  | "engineering"
  | "academy"
  | "design"
  | "welcome"
  | "studies"
  | "timeRecord"
  | "troll"
  | "goals";

const giveBadge = async (request: Request, response: Response) => {
  try {
    const { badge, email }: { badge: badgeType; email: string } = request.body;

    const user = await prismaInstance.user.findFirstOrThrow({
      where: { email },
    });
    if (!user) throw new Error("user not Found");

    const data = await prismaInstance.badges.findUnique({
      where: { userId: user.id },
    });

    if (data) {
      const badgeData = await prismaInstance.badges.update({
        where: { userId: user.id },
        data: {
          [badge]: data[badge] + 1,
        },
      });
      response.status(200).json(badgeData);
    } else {
      const badgeData = await prismaInstance.badges.create({
        data: {
          userId: user.id,
          [badge]: 1,
        },
      });
      response.status(200).json(badgeData);
    }
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default { giveBadge };
