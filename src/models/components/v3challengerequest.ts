/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3ChallengeRequest = {
  /**
   * The unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow.
   */
  correlationId: string;
  /**
   * The date of birth in one of these formats: YYYY-MM-DD, YYYY-MM, or MM-DD. Acceptable characters are: numeric with symbol '-'.
   */
  dob?: string | undefined;
  /**
   * The full or last 4 numbers of the social security number. Acceptable characters are: numeric.
   */
  ssn?: string | undefined;
};

/** @internal */
export const V3ChallengeRequest$inboundSchema: z.ZodType<
  V3ChallengeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  correlationId: z.string(),
  dob: z.string().optional(),
  ssn: z.string().optional(),
});

/** @internal */
export type V3ChallengeRequest$Outbound = {
  correlationId: string;
  dob?: string | undefined;
  ssn?: string | undefined;
};

/** @internal */
export const V3ChallengeRequest$outboundSchema: z.ZodType<
  V3ChallengeRequest$Outbound,
  z.ZodTypeDef,
  V3ChallengeRequest
> = z.object({
  correlationId: z.string(),
  dob: z.string().optional(),
  ssn: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ChallengeRequest$ {
  /** @deprecated use `V3ChallengeRequest$inboundSchema` instead. */
  export const inboundSchema = V3ChallengeRequest$inboundSchema;
  /** @deprecated use `V3ChallengeRequest$outboundSchema` instead. */
  export const outboundSchema = V3ChallengeRequest$outboundSchema;
  /** @deprecated use `V3ChallengeRequest$Outbound` instead. */
  export type Outbound = V3ChallengeRequest$Outbound;
}

export function v3ChallengeRequestToJSON(
  v3ChallengeRequest: V3ChallengeRequest,
): string {
  return JSON.stringify(
    V3ChallengeRequest$outboundSchema.parse(v3ChallengeRequest),
  );
}

export function v3ChallengeRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3ChallengeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ChallengeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ChallengeRequest' from JSON`,
  );
}
