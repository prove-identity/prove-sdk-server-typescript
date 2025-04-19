/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3UnifyBindResponse = {
  /**
   * The number of the mobile phone used during the process.
   */
  phoneNumber: string;
  success: string;
};

/** @internal */
export const V3UnifyBindResponse$inboundSchema: z.ZodType<
  V3UnifyBindResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  phoneNumber: z.string(),
  success: z.string(),
});

/** @internal */
export type V3UnifyBindResponse$Outbound = {
  phoneNumber: string;
  success: string;
};

/** @internal */
export const V3UnifyBindResponse$outboundSchema: z.ZodType<
  V3UnifyBindResponse$Outbound,
  z.ZodTypeDef,
  V3UnifyBindResponse
> = z.object({
  phoneNumber: z.string(),
  success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UnifyBindResponse$ {
  /** @deprecated use `V3UnifyBindResponse$inboundSchema` instead. */
  export const inboundSchema = V3UnifyBindResponse$inboundSchema;
  /** @deprecated use `V3UnifyBindResponse$outboundSchema` instead. */
  export const outboundSchema = V3UnifyBindResponse$outboundSchema;
  /** @deprecated use `V3UnifyBindResponse$Outbound` instead. */
  export type Outbound = V3UnifyBindResponse$Outbound;
}

export function v3UnifyBindResponseToJSON(
  v3UnifyBindResponse: V3UnifyBindResponse,
): string {
  return JSON.stringify(
    V3UnifyBindResponse$outboundSchema.parse(v3UnifyBindResponse),
  );
}

export function v3UnifyBindResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3UnifyBindResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UnifyBindResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UnifyBindResponse' from JSON`,
  );
}
