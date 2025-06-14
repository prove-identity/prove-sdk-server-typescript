/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ValidateRequest = {
  /**
   * The unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow.
   */
  correlationId: string;
};

/** @internal */
export const V3ValidateRequest$inboundSchema: z.ZodType<
  V3ValidateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  correlationId: z.string(),
});

/** @internal */
export type V3ValidateRequest$Outbound = {
  correlationId: string;
};

/** @internal */
export const V3ValidateRequest$outboundSchema: z.ZodType<
  V3ValidateRequest$Outbound,
  z.ZodTypeDef,
  V3ValidateRequest
> = z.object({
  correlationId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ValidateRequest$ {
  /** @deprecated use `V3ValidateRequest$inboundSchema` instead. */
  export const inboundSchema = V3ValidateRequest$inboundSchema;
  /** @deprecated use `V3ValidateRequest$outboundSchema` instead. */
  export const outboundSchema = V3ValidateRequest$outboundSchema;
  /** @deprecated use `V3ValidateRequest$Outbound` instead. */
  export type Outbound = V3ValidateRequest$Outbound;
}

export function v3ValidateRequestToJSON(
  v3ValidateRequest: V3ValidateRequest,
): string {
  return JSON.stringify(
    V3ValidateRequest$outboundSchema.parse(v3ValidateRequest),
  );
}

export function v3ValidateRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ValidateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ValidateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ValidateRequest' from JSON`,
  );
}
