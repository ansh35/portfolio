"use server";

import {
  contactSchema,
  type ContactActionResult,
} from "@/lib/validations/contact";

export async function submitContactMessage(
  payload: unknown
): Promise<ContactActionResult> {
  try {
    // If payload is standard FormData, convert it to an object
    let parsedData: unknown = payload;
    if (payload instanceof FormData) {
      parsedData = {
        name: payload.get("name"),
        email: payload.get("email"),
        subject: payload.get("subject"),
        message: payload.get("message"),
      };
    }

    // Strict schema validation with Zod
    const validationResult = contactSchema.safeParse(parsedData);

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Invalid submission data. Please verify your inputs.",
        errors: fieldErrors,
      };
    }

    const { name, email, subject } = validationResult.data;

    // Log the secure receipt without exposing message contents
    console.log(
      `[Contact Server Action] Validated message received from ${name} <${email}> regarding "${subject}"`
    );

    return {
      success: true,
      message: "Message sent successfully! I will get back to you shortly.",
    };
  } catch (error) {
    console.error("[Contact Server Action] Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try again later.",
    };
  }
}
