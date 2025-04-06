import { GenericResponseDto, InternalServerError } from "../dto/generic";
import { BASE_URL } from "@/configs/configs";
import { v4 as uuidv4 } from "uuid";

export const register = async (
  username: string,
  password: string,
  email: string,
  jwt: string,
): Promise<void> => {
  const transactionId = uuidv4();
  try {
    const response = await fetch(`${BASE_URL}/api/account/create/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        transaction_id: transactionId,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        recaptcha_response: jwt,
      }),
    });

    if (response.ok && response.status === 201) {
      const responseData = await response.json();
      return responseData;
    } else if (response.status == 409) {
      const badRequestError: GenericResponseDto<void> = await response.json();
      throw new Error(`${badRequestError.message}`);
    } else {
      const errorGeneric: GenericResponseDto<void> = await response.json();
      console.log(errorGeneric);
      throw new Error(
        `${errorGeneric.message} - TransactionId: ${transactionId}`,
      );
    }
  } catch (error: any) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      throw new Error(`Please try again later, services are not available.`);
    } else if (error instanceof InternalServerError) {
      throw error;
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(
        `Unknown error occurred - TransactionId: ${transactionId}`,
      );
    }
  }
};
