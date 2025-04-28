import { GenericResponseDto, InternalServerError } from "../dto/generic";
import { BASE_URL } from "@/configs/configs";
import { v4 as uuidv4 } from "uuid";
import { DashboardStats } from "../model/model";
import { FeatureAnnouncements } from "@/types/feature";

export const serverStats = async (): Promise<DashboardStats> => {
  const transactionId = uuidv4();
  try {
    const response = await fetch(`${BASE_URL}/api/dashboard/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        transaction_id: transactionId,
      },
    });

    if (response.ok && response.status === 200) {
      const responseData = await response.json();
      return responseData.data;
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

export const announcements = async (): Promise<FeatureAnnouncements[]> => {
  const transactionId = uuidv4();
  try {
    const response = await fetch(`${BASE_URL}/api/dashboard/announcements`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        transaction_id: transactionId,
      },
    });

    if (response.ok && response.status === 200) {
      const responseData = await response.json();
      return responseData.data;
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
