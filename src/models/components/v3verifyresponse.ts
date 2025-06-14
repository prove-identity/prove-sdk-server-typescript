/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The result of the possession check. Possible values are `pending` and `not_applicable`, based on the `possessionType` passed in the input. Clients will have to call the Verify Status API to get a result if `possessionResult=pending`.
 */
export type PossessionResult = {};

/**
 * The result of the combination of `verifyResult` and `possessionResult`. Possible values are `true`, `pending`, and `false`. The value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.
 */
export type V3VerifyResponseSuccess = {};

/**
 * The result of the Verify process. Possible values are `success`, `pending`, and `failed`. If the Verify result is `pending`, clients will need to call the Verify Status API to get a result.
 */
export type VerifyResult = {};

export type V3VerifyResponse = {
  /**
   * A bearer token for use by the Prove client SDK.
   */
  authToken?: string | undefined;
  /**
   * The unique ID that Prove generates for the flow. To continue the flow, the field will also be used for each of the subsequent API calls in the same flow - it cannot be reused outside of a single flow.
   */
  correlationId: string;
  /**
   * The result of the possession check. Possible values are `pending` and `not_applicable`, based on the `possessionType` passed in the input. Clients will have to call the Verify Status API to get a result if `possessionResult=pending`.
   */
  possessionResult: PossessionResult;
  /**
   * The result of the combination of `verifyResult` and `possessionResult`. Possible values are `true`, `pending`, and `false`. The value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.
   */
  success: V3VerifyResponseSuccess;
  /**
   * The result of the Verify process. Possible values are `success`, `pending`, and `failed`. If the Verify result is `pending`, clients will need to call the Verify Status API to get a result.
   */
  verifyResult: VerifyResult;
};

/** @internal */
export const PossessionResult$inboundSchema: z.ZodType<
  PossessionResult,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PossessionResult$Outbound = {};

/** @internal */
export const PossessionResult$outboundSchema: z.ZodType<
  PossessionResult$Outbound,
  z.ZodTypeDef,
  PossessionResult
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PossessionResult$ {
  /** @deprecated use `PossessionResult$inboundSchema` instead. */
  export const inboundSchema = PossessionResult$inboundSchema;
  /** @deprecated use `PossessionResult$outboundSchema` instead. */
  export const outboundSchema = PossessionResult$outboundSchema;
  /** @deprecated use `PossessionResult$Outbound` instead. */
  export type Outbound = PossessionResult$Outbound;
}

export function possessionResultToJSON(
  possessionResult: PossessionResult,
): string {
  return JSON.stringify(
    PossessionResult$outboundSchema.parse(possessionResult),
  );
}

export function possessionResultFromJSON(
  jsonString: string,
): SafeParseResult<PossessionResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PossessionResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PossessionResult' from JSON`,
  );
}

/** @internal */
export const V3VerifyResponseSuccess$inboundSchema: z.ZodType<
  V3VerifyResponseSuccess,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V3VerifyResponseSuccess$Outbound = {};

/** @internal */
export const V3VerifyResponseSuccess$outboundSchema: z.ZodType<
  V3VerifyResponseSuccess$Outbound,
  z.ZodTypeDef,
  V3VerifyResponseSuccess
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyResponseSuccess$ {
  /** @deprecated use `V3VerifyResponseSuccess$inboundSchema` instead. */
  export const inboundSchema = V3VerifyResponseSuccess$inboundSchema;
  /** @deprecated use `V3VerifyResponseSuccess$outboundSchema` instead. */
  export const outboundSchema = V3VerifyResponseSuccess$outboundSchema;
  /** @deprecated use `V3VerifyResponseSuccess$Outbound` instead. */
  export type Outbound = V3VerifyResponseSuccess$Outbound;
}

export function v3VerifyResponseSuccessToJSON(
  v3VerifyResponseSuccess: V3VerifyResponseSuccess,
): string {
  return JSON.stringify(
    V3VerifyResponseSuccess$outboundSchema.parse(v3VerifyResponseSuccess),
  );
}

export function v3VerifyResponseSuccessFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyResponseSuccess, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyResponseSuccess$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyResponseSuccess' from JSON`,
  );
}

/** @internal */
export const VerifyResult$inboundSchema: z.ZodType<
  VerifyResult,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type VerifyResult$Outbound = {};

/** @internal */
export const VerifyResult$outboundSchema: z.ZodType<
  VerifyResult$Outbound,
  z.ZodTypeDef,
  VerifyResult
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VerifyResult$ {
  /** @deprecated use `VerifyResult$inboundSchema` instead. */
  export const inboundSchema = VerifyResult$inboundSchema;
  /** @deprecated use `VerifyResult$outboundSchema` instead. */
  export const outboundSchema = VerifyResult$outboundSchema;
  /** @deprecated use `VerifyResult$Outbound` instead. */
  export type Outbound = VerifyResult$Outbound;
}

export function verifyResultToJSON(verifyResult: VerifyResult): string {
  return JSON.stringify(VerifyResult$outboundSchema.parse(verifyResult));
}

export function verifyResultFromJSON(
  jsonString: string,
): SafeParseResult<VerifyResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VerifyResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VerifyResult' from JSON`,
  );
}

/** @internal */
export const V3VerifyResponse$inboundSchema: z.ZodType<
  V3VerifyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  authToken: z.string().optional(),
  correlationId: z.string(),
  possessionResult: z.lazy(() => PossessionResult$inboundSchema),
  success: z.lazy(() => V3VerifyResponseSuccess$inboundSchema),
  verifyResult: z.lazy(() => VerifyResult$inboundSchema),
});

/** @internal */
export type V3VerifyResponse$Outbound = {
  authToken?: string | undefined;
  correlationId: string;
  possessionResult: PossessionResult$Outbound;
  success: V3VerifyResponseSuccess$Outbound;
  verifyResult: VerifyResult$Outbound;
};

/** @internal */
export const V3VerifyResponse$outboundSchema: z.ZodType<
  V3VerifyResponse$Outbound,
  z.ZodTypeDef,
  V3VerifyResponse
> = z.object({
  authToken: z.string().optional(),
  correlationId: z.string(),
  possessionResult: z.lazy(() => PossessionResult$outboundSchema),
  success: z.lazy(() => V3VerifyResponseSuccess$outboundSchema),
  verifyResult: z.lazy(() => VerifyResult$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyResponse$ {
  /** @deprecated use `V3VerifyResponse$inboundSchema` instead. */
  export const inboundSchema = V3VerifyResponse$inboundSchema;
  /** @deprecated use `V3VerifyResponse$outboundSchema` instead. */
  export const outboundSchema = V3VerifyResponse$outboundSchema;
  /** @deprecated use `V3VerifyResponse$Outbound` instead. */
  export type Outbound = V3VerifyResponse$Outbound;
}

export function v3VerifyResponseToJSON(
  v3VerifyResponse: V3VerifyResponse,
): string {
  return JSON.stringify(
    V3VerifyResponse$outboundSchema.parse(v3VerifyResponse),
  );
}

export function v3VerifyResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyResponse' from JSON`,
  );
}
