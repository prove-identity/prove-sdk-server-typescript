/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3UnifyRequest = {
  /**
   * If true, the customer can re-enter the OTP up to three times. Code must also be implemented. See client-side SDK guide for more details.
   */
  allowOTPRetry?: boolean | undefined;
  /**
   * A client-generated unique ID for a specific customer.
   */
  clientCustomerId?: string | undefined;
  /**
   * A client-generated unique ID for a specific session. This can be used to identify specific requests. The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted. Do not include Personally Identifiable Information (PII) in this field.
   */
  clientRequestId?: string | undefined;
  /**
   * The URL where the end user will be redirected at the end of Instant Link flow. Required when `possessionType=desktop`.
   *
   * @remarks
   * Acceptable characters are: alphanumeric with symbols '-._+=/:?'. Max length is 128 characters.
   */
  finalTargetUrl?: string | undefined;
  /**
   * The mobile phone number. US phone numbers can be passed in with or without a leading `+1`. International phone numbers require a leading `+1`. Use the appropriate endpoint URL based on the region the number originates from. Acceptable characters are: alphanumeric with symbols '+'.
   *
   * @remarks
   * Required unless Mobile Auth is enabled.
   */
  phoneNumber?: string | undefined;
  /**
   * The type of device being used - either `desktop` if using a desktop,
   *
   * @remarks
   * `mobile` for iOS/Android native apps and mobile web, or `none` if no possession
   * check is required.
   */
  possessionType: string;
  /**
   * If `true`, rebinds the Prove Key with the newly verified phone number.
   */
  rebind?: boolean | undefined;
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
export const V3UnifyRequest$inboundSchema: z.ZodType<
  V3UnifyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowOTPRetry: z.boolean().optional(),
  clientCustomerId: z.string().optional(),
  clientRequestId: z.string().optional(),
  finalTargetUrl: z.string().optional(),
  phoneNumber: z.string().optional(),
  possessionType: z.string(),
  rebind: z.boolean().optional(),
  smsMessage: z.string().optional(),
});

/** @internal */
export type V3UnifyRequest$Outbound = {
  allowOTPRetry?: boolean | undefined;
  clientCustomerId?: string | undefined;
  clientRequestId?: string | undefined;
  finalTargetUrl?: string | undefined;
  phoneNumber?: string | undefined;
  possessionType: string;
  rebind?: boolean | undefined;
  smsMessage?: string | undefined;
};

/** @internal */
export const V3UnifyRequest$outboundSchema: z.ZodType<
  V3UnifyRequest$Outbound,
  z.ZodTypeDef,
  V3UnifyRequest
> = z.object({
  allowOTPRetry: z.boolean().optional(),
  clientCustomerId: z.string().optional(),
  clientRequestId: z.string().optional(),
  finalTargetUrl: z.string().optional(),
  phoneNumber: z.string().optional(),
  possessionType: z.string(),
  rebind: z.boolean().optional(),
  smsMessage: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UnifyRequest$ {
  /** @deprecated use `V3UnifyRequest$inboundSchema` instead. */
  export const inboundSchema = V3UnifyRequest$inboundSchema;
  /** @deprecated use `V3UnifyRequest$outboundSchema` instead. */
  export const outboundSchema = V3UnifyRequest$outboundSchema;
  /** @deprecated use `V3UnifyRequest$Outbound` instead. */
  export type Outbound = V3UnifyRequest$Outbound;
}

export function v3UnifyRequestToJSON(v3UnifyRequest: V3UnifyRequest): string {
  return JSON.stringify(V3UnifyRequest$outboundSchema.parse(v3UnifyRequest));
}

export function v3UnifyRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3UnifyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UnifyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UnifyRequest' from JSON`,
  );
}
