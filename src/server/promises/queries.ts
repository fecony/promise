import HttpError from '@wasp/core/HttpError.js';

export const getPromises = async (args: any, context: any) => {
  // if (!context.user) {
  //   throw new HttpError(401);
  // }

  return await context.entities.Promise.findMany({});
};
