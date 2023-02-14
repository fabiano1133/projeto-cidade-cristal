interface IAuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export const authConfig: IAuthConfig = {
  jwt: {
    secret: `${process.env.APP_SECRET}`,
    expiresIn: "1d",
  },
};
