/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Request body for the V3 MFA Status API
 */
export type V3MFAStatusRequest = {
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
   * from the v3/mfa endpoint and cannot be reused outside of a single flow.
   */
  correlationId?: string | undefined;
  /**
   * Phone number is only allowed when possessionType=none from the initial MFA request.
   *
   * @remarks
   * Required for BYO Possession flow on the third call.
   */
  phoneNumber?: string | undefined;
};

/** @internal */
export const V3MFAStatusRequest$inboundSchema: z.ZodType<
  V3MFAStatusRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  clientRequestId: z.string().optional(),
  correlationId: z.string().optional(),
  phoneNumber: z.string().optional(),
});

/** @internal */
export type V3MFAStatusRequest$Outbound = {
  clientRequestId?: string | undefined;
  correlationId?: string | undefined;
  phoneNumber?: string | undefined;
};

/** @internal */
export const V3MFAStatusRequest$outboundSchema: z.ZodType<
  V3MFAStatusRequest$Outbound,
  z.ZodTypeDef,
  V3MFAStatusRequest
> = z.object({
  clientRequestId: z.string().optional(),
  correlationId: z.string().optional(),
  phoneNumber: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3MFAStatusRequest$ {
  /** @deprecated use `V3MFAStatusRequest$inboundSchema` instead. */
  export const inboundSchema = V3MFAStatusRequest$inboundSchema;
  /** @deprecated use `V3MFAStatusRequest$outboundSchema` instead. */
  export const outboundSchema = V3MFAStatusRequest$outboundSchema;
  /** @deprecated use `V3MFAStatusRequest$Outbound` instead. */
  export type Outbound = V3MFAStatusRequest$Outbound;
}

export function v3MFAStatusRequestToJSON(
  v3MFAStatusRequest: V3MFAStatusRequest,
): string {
  return JSON.stringify(
    V3MFAStatusRequest$outboundSchema.parse(v3MFAStatusRequest),
  );
}

export function v3MFAStatusRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3MFAStatusRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3MFAStatusRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3MFAStatusRequest' from JSON`,
  );
}
