import { v4 as uuid } from "uuid";

type User = {
  email: string;
  password: string;
  avatar_url: string;
};

type UserResponse = {
  name: string;
  email: string;
  avatar_url: string;
};

type SignInRequestData = Omit<User, "avatar_url">;

type SignInResponseData = {
  token: string;
  user: UserResponse;
};

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest({
  email,
  password,
}: SignInRequestData): Promise<SignInResponseData> {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Davi Silva",
      email: "davisilvaphoto@gmail.com",
      avatar_url: "https://github.com/davi1985.png",
    },
  };
}

type RecoverUserInformationResponse = {
  user: UserResponse;
};

export async function recoverUserInformation(): Promise<RecoverUserInformationResponse> {
  await delay();

  return {
    user: {
      name: "Davi Silva",
      email: "davisilvaphoto@gmail.com",
      avatar_url: "https://github.com/davi1985.png",
    },
  };
}
