/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3VerifyStatusResponse = {
  /**
   * A unique ID that Prove generates to refer to a specific identity.
   */
  identityId?: string | undefined;
  /**
   * The result of the possession check. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
   */
  possessionResult: string;
  /**
   * The result of the combination of Verify Result and Possession Result. Possible values are `true`, `pending`, and `false`. The success value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.
   */
  success: string;
  /**
   * The result of the Verify process. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
   */
  verifyResult: string;
};

/** @internal */
export const V3VerifyStatusResponse$inboundSchema: z.ZodType<
  V3VerifyStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  identityId: z.string().optional(),
  possessionResult: z.string(),
  success: z.string(),
  verifyResult: z.string(),
});

/** @internal */
export type V3VerifyStatusResponse$Outbound = {
  identityId?: string | undefined;
  possessionResult: string;
  success: string;
  verifyResult: string;
};

/** @internal */
export const V3VerifyStatusResponse$outboundSchema: z.ZodType<
  V3VerifyStatusResponse$Outbound,
  z.ZodTypeDef,
  V3VerifyStatusResponse
> = z.object({
  identityId: z.string().optional(),
  possessionResult: z.string(),
  success: z.string(),
  verifyResult: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyStatusResponse$ {
  /** @deprecated use `V3VerifyStatusResponse$inboundSchema` instead. */
  export const inboundSchema = V3VerifyStatusResponse$inboundSchema;
  /** @deprecated use `V3VerifyStatusResponse$outboundSchema` instead. */
  export const outboundSchema = V3VerifyStatusResponse$outboundSchema;
  /** @deprecated use `V3VerifyStatusResponse$Outbound` instead. */
  export type Outbound = V3VerifyStatusResponse$Outbound;
}

export function v3VerifyStatusResponseToJSON(
  v3VerifyStatusResponse: V3VerifyStatusResponse,
): string {
  return JSON.stringify(
    V3VerifyStatusResponse$outboundSchema.parse(v3VerifyStatusResponse),
  );
}

export function v3VerifyStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyStatusResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyStatusResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyStatusResponse' from JSON`,
  );
}
