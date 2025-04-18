/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Request body for the V3 Unify Status API
 */
export type V3UnifyStatusRequest = {
  /**
   * Client Request ID is a client-generated unique ID for a specific request.
   *
   * @remarks
   * This can be used by clients to identify specific requests made to Prove Link.
   * The format of this ID is defined by the client - Prove recommends using a GUID,
   * but any format can be accepted.
   */
  clientRequestId?: string | undefined;
  /**
   * Correlation ID is the unique ID that Prove generates for the flow. It is returned
   *
   * @remarks
   * from the v3/unify endpoint and cannot be reused outside of a single flow.
   */
  correlationId?: string | undefined;
  /**
   * Phone number is only allowed when possessionType=none from the initial Unify request.
   *
   * @remarks
   * Required for BYO Possession flow on the third call.
   */
  phoneNumber?: string | undefined;
};

/** @internal */
export const V3UnifyStatusRequest$inboundSchema: z.ZodType<
  V3UnifyStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientRequestId: z.string().optional(),
  correlationId: z.string().optional(),
  phoneNumber: z.string().optional(),
});

/** @internal */
export type V3UnifyStatusRequest$Outbound = {
  clientRequestId?: string | undefined;
  correlationId?: string | undefined;
  phoneNumber?: string | undefined;
};

/** @internal */
export const V3UnifyStatusRequest$outboundSchema: z.ZodType<
  V3UnifyStatusRequest$Outbound,
  z.ZodTypeDef,
  V3UnifyStatusRequest
> = z.object({
  clientRequestId: z.string().optional(),
  correlationId: z.string().optional(),
  phoneNumber: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3UnifyStatusRequest$ {
  /** @deprecated use `V3UnifyStatusRequest$inboundSchema` instead. */
  export const inboundSchema = V3UnifyStatusRequest$inboundSchema;
  /** @deprecated use `V3UnifyStatusRequest$outboundSchema` instead. */
  export const outboundSchema = V3UnifyStatusRequest$outboundSchema;
  /** @deprecated use `V3UnifyStatusRequest$Outbound` instead. */
  export type Outbound = V3UnifyStatusRequest$Outbound;
}

export function v3UnifyStatusRequestToJSON(
  v3UnifyStatusRequest: V3UnifyStatusRequest,
): string {
  return JSON.stringify(
    V3UnifyStatusRequest$outboundSchema.parse(v3UnifyStatusRequest),
  );
}

export function v3UnifyStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3UnifyStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3UnifyStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3UnifyStatusRequest' from JSON`,
  );
}
