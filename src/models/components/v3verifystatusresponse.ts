/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Response body for the V3 Verify Status API
 */
export type V3VerifyStatusResponse = {
  possessionResult: string;
  success: string;
  verifyResult: string;
};

/** @internal */
export const V3VerifyStatusResponse$inboundSchema: z.ZodType<
  V3VerifyStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  possessionResult: z.string(),
  success: z.string(),
  verifyResult: z.string(),
});

/** @internal */
export type V3VerifyStatusResponse$Outbound = {
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
