/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3UnifyStatusResponse = {
  /**
   * The number of the mobile phone used during the process.
   */
  phoneNumber: string;
  /**
   * The result of the possession check.
   *
   * @remarks
   * Possible values are `true`, `false`, `pending`, and `possession_required`.
   */
  success: string;
};

/** @internal */
export const V3UnifyStatusResponse$inboundSchema: z.ZodType<
  V3UnifyStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  phoneNumber: z.string(),
  success: z.string(),
});

/** @internal */
export type V3UnifyStatusResponse$Outbound = {
  phoneNumber: string;
  success: string;
};

/** @internal */
export const V3UnifyStatusResponse$outboundSchema: z.ZodType<
  V3UnifyStatusResponse$Outbound,
  z.ZodTypeDef,
  V3UnifyStatusResponse
> = z.object({
  phoneNumber: z.string(),
  success: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UnifyStatusResponse$ {
  /** @deprecated use `V3UnifyStatusResponse$inboundSchema` instead. */
  export const inboundSchema = V3UnifyStatusResponse$inboundSchema;
  /** @deprecated use `V3UnifyStatusResponse$outboundSchema` instead. */
  export const outboundSchema = V3UnifyStatusResponse$outboundSchema;
  /** @deprecated use `V3UnifyStatusResponse$Outbound` instead. */
  export type Outbound = V3UnifyStatusResponse$Outbound;
}

export function v3UnifyStatusResponseToJSON(
  v3UnifyStatusResponse: V3UnifyStatusResponse,
): string {
  return JSON.stringify(
    V3UnifyStatusResponse$outboundSchema.parse(v3UnifyStatusResponse),
  );
}

export function v3UnifyStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3UnifyStatusResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UnifyStatusResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UnifyStatusResponse' from JSON`,
  );
}
