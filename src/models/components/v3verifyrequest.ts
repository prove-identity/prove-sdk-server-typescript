/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3VerifyRequest = {
  /**
   * If true, the customer can re-enter the OTP up to three times. Code must also be implemented. See client-side SDK guide for more details.
   */
  allowOTPRetry?: boolean | undefined;
  /**
   * A client-generated unique ID for a specific customer. This can be used by clients to link calls related to the same customer, across different requests or sessions.  The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Prove does not offer any functionality around the Client Customer ID. Do not include personally identifiable information (PII) in this field.
   */
  clientCustomerId?: string | undefined;
  /**
   * A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field.
   */
  clientRequestId?: string | undefined;
  /**
   * The email address of the customer. Acceptable characters are: alphanumeric with symbols '@.+'.
   */
  emailAddress?: string | undefined;
  /**
   * The URL where the end user will be redirected at the end of the Instant Link flow. Required only when `flowType=desktop`. Acceptable characters are: alphanumeric with symbols '-._+=/:?'. Max length is 128 characters.
   */
  finalTargetUrl?: string | undefined;
  /**
   * The first name of the individual.
   */
  firstName: string;
  /**
   * The last name of the individual.
   */
  lastName: string;
  /**
   * The mobile phone number. US phone numbers can be passed in with or without a leading `+1`. International phone numbers require a leading `+1`. Use the appropriate endpoint URL based on the region the number originates from. Acceptable characters are: alphanumeric with symbols '+'.
   */
  phoneNumber: string;
  /**
   * The type of device being used - either `desktop` if using a desktop, `mobile` for iOS/Android native apps and mobile web, or `none` if no possession check is required.
   */
  possessionType: string;
  /**
   * The message body sent in the Instant Link (`flowType=desktop`) or OTP (`flowType=mobile`) SMS message. If not provided, the following default messages will be used:
   *
   * @remarks
   * Instant Link: "Complete your verification. If you did not make this request, do not click the link. ####" The verification URL replaces ####.
   * OTP: "#### is your temporary code to continue your application. Caution: for your security, don't share this code with anyone." Use ####, #####, or ###### to generate 4-6 digit verification codes respectively.
   * Default language is English. Max length is 160 characters. Non-ASCII characters are allowed.
   */
  smsMessage?: string | undefined;
};

/** @internal */
export const V3VerifyRequest$inboundSchema: z.ZodType<
  V3VerifyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowOTPRetry: z.boolean().optional(),
  clientCustomerId: z.string().optional(),
  clientRequestId: z.string().optional(),
  emailAddress: z.string().optional(),
  finalTargetUrl: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  possessionType: z.string(),
  smsMessage: z.string().optional(),
});

/** @internal */
export type V3VerifyRequest$Outbound = {
  allowOTPRetry?: boolean | undefined;
  clientCustomerId?: string | undefined;
  clientRequestId?: string | undefined;
  emailAddress?: string | undefined;
  finalTargetUrl?: string | undefined;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  possessionType: string;
  smsMessage?: string | undefined;
};

/** @internal */
export const V3VerifyRequest$outboundSchema: z.ZodType<
  V3VerifyRequest$Outbound,
  z.ZodTypeDef,
  V3VerifyRequest
> = z.object({
  allowOTPRetry: z.boolean().optional(),
  clientCustomerId: z.string().optional(),
  clientRequestId: z.string().optional(),
  emailAddress: z.string().optional(),
  finalTargetUrl: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string(),
  possessionType: z.string(),
  smsMessage: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyRequest$ {
  /** @deprecated use `V3VerifyRequest$inboundSchema` instead. */
  export const inboundSchema = V3VerifyRequest$inboundSchema;
  /** @deprecated use `V3VerifyRequest$outboundSchema` instead. */
  export const outboundSchema = V3VerifyRequest$outboundSchema;
  /** @deprecated use `V3VerifyRequest$Outbound` instead. */
  export type Outbound = V3VerifyRequest$Outbound;
}

export function v3VerifyRequestToJSON(
  v3VerifyRequest: V3VerifyRequest,
): string {
  return JSON.stringify(V3VerifyRequest$outboundSchema.parse(v3VerifyRequest));
}

export function v3VerifyRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyRequest' from JSON`,
  );
}
