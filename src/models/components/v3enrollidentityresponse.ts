/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Response body for the V3 Enroll Identity method.
 */
export type V3EnrollIdentityResponse = {
  /**
   * A unique Prove-generated identifier for the enrolled identity. This is a UUID that can be used to reference the identity in future requests.
   */
  identityId: string;
  /**
   * If true, the request was successful and the identity was created.
   */
  success: boolean;
};

/** @internal */
export const V3EnrollIdentityResponse$inboundSchema: z.ZodType<
  V3EnrollIdentityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  identityId: z.string(),
  success: z.boolean(),
});

/** @internal */
export type V3EnrollIdentityResponse$Outbound = {
  identityId: string;
  success: boolean;
};

/** @internal */
export const V3EnrollIdentityResponse$outboundSchema: z.ZodType<
  V3EnrollIdentityResponse$Outbound,
  z.ZodTypeDef,
  V3EnrollIdentityResponse
> = z.object({
  identityId: z.string(),
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3EnrollIdentityResponse$ {
  /** @deprecated use `V3EnrollIdentityResponse$inboundSchema` instead. */
  export const inboundSchema = V3EnrollIdentityResponse$inboundSchema;
  /** @deprecated use `V3EnrollIdentityResponse$outboundSchema` instead. */
  export const outboundSchema = V3EnrollIdentityResponse$outboundSchema;
  /** @deprecated use `V3EnrollIdentityResponse$Outbound` instead. */
  export type Outbound = V3EnrollIdentityResponse$Outbound;
}

export function v3EnrollIdentityResponseToJSON(
  v3EnrollIdentityResponse: V3EnrollIdentityResponse,
): string {
  return JSON.stringify(
    V3EnrollIdentityResponse$outboundSchema.parse(v3EnrollIdentityResponse),
  );
}

export function v3EnrollIdentityResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3EnrollIdentityResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3EnrollIdentityResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3EnrollIdentityResponse' from JSON`,
  );
}
