import HttpError from '@wasp/core/HttpError';

export const makePromise = async (args: any, context: any) => {
  // if (!context.user) {
  //   throw new HttpError(401);
  // }
  console.log(args);
  return context.entities.Promise.create({
    data: {
      text: args.text,
      // author: {
      //   connect: {
      //     id: context.user.id,
      //   },
      // },
    },
  });
};
