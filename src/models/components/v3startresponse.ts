/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3StartResponse = {
  /**
   * A bearer token used by the client-side SDK.
   */
  authToken: string;
  /**
   * The unique ID that Prove generates for the flow. To continue the flow, the field will also be used for each of the subsequent API calls in the same flow - it cannot be reused outside of a single flow.
   */
  correlationId: string;
  /**
   * The next set of allowed API calls in the same flow.
   */
  next: { [k: string]: string };
};

/** @internal */
export const V3StartResponse$inboundSchema: z.ZodType<
  V3StartResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  authToken: z.string(),
  correlationId: z.string(),
  next: z.record(z.string()),
});

/** @internal */
export type V3StartResponse$Outbound = {
  authToken: string;
  correlationId: string;
  next: { [k: string]: string };
};

/** @internal */
export const V3StartResponse$outboundSchema: z.ZodType<
  V3StartResponse$Outbound,
  z.ZodTypeDef,
  V3StartResponse
> = z.object({
  authToken: z.string(),
  correlationId: z.string(),
  next: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3StartResponse$ {
  /** @deprecated use `V3StartResponse$inboundSchema` instead. */
  export const inboundSchema = V3StartResponse$inboundSchema;
  /** @deprecated use `V3StartResponse$outboundSchema` instead. */
  export const outboundSchema = V3StartResponse$outboundSchema;
  /** @deprecated use `V3StartResponse$Outbound` instead. */
  export type Outbound = V3StartResponse$Outbound;
}

export function v3StartResponseToJSON(
  v3StartResponse: V3StartResponse,
): string {
  return JSON.stringify(V3StartResponse$outboundSchema.parse(v3StartResponse));
}

export function v3StartResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3StartResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3StartResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3StartResponse' from JSON`,
  );
}
