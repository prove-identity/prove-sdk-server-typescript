/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V3ChallengeIndividualRequest,
  V3ChallengeIndividualRequest$inboundSchema,
  V3ChallengeIndividualRequest$Outbound,
  V3ChallengeIndividualRequest$outboundSchema,
} from "./v3challengeindividualrequest.js";

export type Evaluation = {};

export type V3ChallengeResponse = {
  /**
   * The evaluation result for the policy
   */
  evaluation?: { [k: string]: Evaluation } | null | undefined;
  individual?: V3ChallengeIndividualRequest | undefined;
  /**
   * The next set of allowed calls in the same flow.
   */
  next: { [k: string]: string };
  /**
   * True if the challenge was accepted and user info retrieved.
   */
  success: boolean;
};

/** @internal */
export const Evaluation$inboundSchema: z.ZodType<
  Evaluation,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type Evaluation$Outbound = {};

/** @internal */
export const Evaluation$outboundSchema: z.ZodType<
  Evaluation$Outbound,
  z.ZodTypeDef,
  Evaluation
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Evaluation$ {
  /** @deprecated use `Evaluation$inboundSchema` instead. */
  export const inboundSchema = Evaluation$inboundSchema;
  /** @deprecated use `Evaluation$outboundSchema` instead. */
  export const outboundSchema = Evaluation$outboundSchema;
  /** @deprecated use `Evaluation$Outbound` instead. */
  export type Outbound = Evaluation$Outbound;
}

export function evaluationToJSON(evaluation: Evaluation): string {
  return JSON.stringify(Evaluation$outboundSchema.parse(evaluation));
}

export function evaluationFromJSON(
  jsonString: string,
): SafeParseResult<Evaluation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Evaluation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Evaluation' from JSON`,
  );
}

/** @internal */
export const V3ChallengeResponse$inboundSchema: z.ZodType<
  V3ChallengeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  evaluation: z.nullable(z.record(z.lazy(() => Evaluation$inboundSchema)))
    .optional(),
  individual: V3ChallengeIndividualRequest$inboundSchema.optional(),
  next: z.record(z.string()),
  success: z.boolean(),
});

/** @internal */
export type V3ChallengeResponse$Outbound = {
  evaluation?: { [k: string]: Evaluation$Outbound } | null | undefined;
  individual?: V3ChallengeIndividualRequest$Outbound | undefined;
  next: { [k: string]: string };
  success: boolean;
};

/** @internal */
export const V3ChallengeResponse$outboundSchema: z.ZodType<
  V3ChallengeResponse$Outbound,
  z.ZodTypeDef,
  V3ChallengeResponse
> = z.object({
  evaluation: z.nullable(z.record(z.lazy(() => Evaluation$outboundSchema)))
    .optional(),
  individual: V3ChallengeIndividualRequest$outboundSchema.optional(),
  next: z.record(z.string()),
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3ChallengeResponse$ {
  /** @deprecated use `V3ChallengeResponse$inboundSchema` instead. */
  export const inboundSchema = V3ChallengeResponse$inboundSchema;
  /** @deprecated use `V3ChallengeResponse$outboundSchema` instead. */
  export const outboundSchema = V3ChallengeResponse$outboundSchema;
  /** @deprecated use `V3ChallengeResponse$Outbound` instead. */
  export type Outbound = V3ChallengeResponse$Outbound;
}

export function v3ChallengeResponseToJSON(
  v3ChallengeResponse: V3ChallengeResponse,
): string {
  return JSON.stringify(
    V3ChallengeResponse$outboundSchema.parse(v3ChallengeResponse),
  );
}

export function v3ChallengeResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3ChallengeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3ChallengeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3ChallengeResponse' from JSON`,
  );
}
