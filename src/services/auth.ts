interface Response {
  token: string;
  user: object;
}

export const signIn = (): Promise<Response> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "ihdfweohfuwehfuwehifwhefywhefiwyefwiyefwe",
        user: {},
      });
    }, 2000);
  });
