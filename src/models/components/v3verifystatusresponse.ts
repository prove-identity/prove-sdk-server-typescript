/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The result of the possession check. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
 */
export type V3VerifyStatusResponsePossessionResult = {};

/**
 * The result of the combination of Verify Result and Possession Result. Possible values are `true`, `pending`, and `false`. The success value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.
 */
export type V3VerifyStatusResponseSuccess = {};

/**
 * The result of the Verify process. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
 */
export type V3VerifyStatusResponseVerifyResult = {};

export type V3VerifyStatusResponse = {
  /**
   * A unique ID that Prove generates to refer to a specific identity.
   */
  identityId?: string | undefined;
  /**
   * The result of the possession check. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
   */
  possessionResult: V3VerifyStatusResponsePossessionResult;
  /**
   * The result of the combination of Verify Result and Possession Result. Possible values are `true`, `pending`, and `false`. The success value will be `pending` until the results of both Verify and Possession are returned or one of them fails, blocking the other.
   */
  success: V3VerifyStatusResponseSuccess;
  /**
   * The result of the Verify process. Possible values are `success`, `pending`, `failed`, and `not_applicable`.
   */
  verifyResult: V3VerifyStatusResponseVerifyResult;
};

/** @internal */
export const V3VerifyStatusResponsePossessionResult$inboundSchema: z.ZodType<
  V3VerifyStatusResponsePossessionResult,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V3VerifyStatusResponsePossessionResult$Outbound = {};

/** @internal */
export const V3VerifyStatusResponsePossessionResult$outboundSchema: z.ZodType<
  V3VerifyStatusResponsePossessionResult$Outbound,
  z.ZodTypeDef,
  V3VerifyStatusResponsePossessionResult
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyStatusResponsePossessionResult$ {
  /** @deprecated use `V3VerifyStatusResponsePossessionResult$inboundSchema` instead. */
  export const inboundSchema =
    V3VerifyStatusResponsePossessionResult$inboundSchema;
  /** @deprecated use `V3VerifyStatusResponsePossessionResult$outboundSchema` instead. */
  export const outboundSchema =
    V3VerifyStatusResponsePossessionResult$outboundSchema;
  /** @deprecated use `V3VerifyStatusResponsePossessionResult$Outbound` instead. */
  export type Outbound = V3VerifyStatusResponsePossessionResult$Outbound;
}

export function v3VerifyStatusResponsePossessionResultToJSON(
  v3VerifyStatusResponsePossessionResult:
    V3VerifyStatusResponsePossessionResult,
): string {
  return JSON.stringify(
    V3VerifyStatusResponsePossessionResult$outboundSchema.parse(
      v3VerifyStatusResponsePossessionResult,
    ),
  );
}

export function v3VerifyStatusResponsePossessionResultFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyStatusResponsePossessionResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3VerifyStatusResponsePossessionResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyStatusResponsePossessionResult' from JSON`,
  );
}

/** @internal */
export const V3VerifyStatusResponseSuccess$inboundSchema: z.ZodType<
  V3VerifyStatusResponseSuccess,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V3VerifyStatusResponseSuccess$Outbound = {};

/** @internal */
export const V3VerifyStatusResponseSuccess$outboundSchema: z.ZodType<
  V3VerifyStatusResponseSuccess$Outbound,
  z.ZodTypeDef,
  V3VerifyStatusResponseSuccess
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyStatusResponseSuccess$ {
  /** @deprecated use `V3VerifyStatusResponseSuccess$inboundSchema` instead. */
  export const inboundSchema = V3VerifyStatusResponseSuccess$inboundSchema;
  /** @deprecated use `V3VerifyStatusResponseSuccess$outboundSchema` instead. */
  export const outboundSchema = V3VerifyStatusResponseSuccess$outboundSchema;
  /** @deprecated use `V3VerifyStatusResponseSuccess$Outbound` instead. */
  export type Outbound = V3VerifyStatusResponseSuccess$Outbound;
}

export function v3VerifyStatusResponseSuccessToJSON(
  v3VerifyStatusResponseSuccess: V3VerifyStatusResponseSuccess,
): string {
  return JSON.stringify(
    V3VerifyStatusResponseSuccess$outboundSchema.parse(
      v3VerifyStatusResponseSuccess,
    ),
  );
}

export function v3VerifyStatusResponseSuccessFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyStatusResponseSuccess, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyStatusResponseSuccess$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyStatusResponseSuccess' from JSON`,
  );
}

/** @internal */
export const V3VerifyStatusResponseVerifyResult$inboundSchema: z.ZodType<
  V3VerifyStatusResponseVerifyResult,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V3VerifyStatusResponseVerifyResult$Outbound = {};

/** @internal */
export const V3VerifyStatusResponseVerifyResult$outboundSchema: z.ZodType<
  V3VerifyStatusResponseVerifyResult$Outbound,
  z.ZodTypeDef,
  V3VerifyStatusResponseVerifyResult
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyStatusResponseVerifyResult$ {
  /** @deprecated use `V3VerifyStatusResponseVerifyResult$inboundSchema` instead. */
  export const inboundSchema = V3VerifyStatusResponseVerifyResult$inboundSchema;
  /** @deprecated use `V3VerifyStatusResponseVerifyResult$outboundSchema` instead. */
  export const outboundSchema =
    V3VerifyStatusResponseVerifyResult$outboundSchema;
  /** @deprecated use `V3VerifyStatusResponseVerifyResult$Outbound` instead. */
  export type Outbound = V3VerifyStatusResponseVerifyResult$Outbound;
}

export function v3VerifyStatusResponseVerifyResultToJSON(
  v3VerifyStatusResponseVerifyResult: V3VerifyStatusResponseVerifyResult,
): string {
  return JSON.stringify(
    V3VerifyStatusResponseVerifyResult$outboundSchema.parse(
      v3VerifyStatusResponseVerifyResult,
    ),
  );
}

export function v3VerifyStatusResponseVerifyResultFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyStatusResponseVerifyResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V3VerifyStatusResponseVerifyResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyStatusResponseVerifyResult' from JSON`,
  );
}

/** @internal */
export const V3VerifyStatusResponse$inboundSchema: z.ZodType<
  V3VerifyStatusResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  identityId: z.string().optional(),
  possessionResult: z.lazy(() =>
    V3VerifyStatusResponsePossessionResult$inboundSchema
  ),
  success: z.lazy(() => V3VerifyStatusResponseSuccess$inboundSchema),
  verifyResult: z.lazy(() => V3VerifyStatusResponseVerifyResult$inboundSchema),
});

/** @internal */
export type V3VerifyStatusResponse$Outbound = {
  identityId?: string | undefined;
  possessionResult: V3VerifyStatusResponsePossessionResult$Outbound;
  success: V3VerifyStatusResponseSuccess$Outbound;
  verifyResult: V3VerifyStatusResponseVerifyResult$Outbound;
};

/** @internal */
export const V3VerifyStatusResponse$outboundSchema: z.ZodType<
  V3VerifyStatusResponse$Outbound,
  z.ZodTypeDef,
  V3VerifyStatusResponse
> = z.object({
  identityId: z.string().optional(),
  possessionResult: z.lazy(() =>
    V3VerifyStatusResponsePossessionResult$outboundSchema
  ),
  success: z.lazy(() => V3VerifyStatusResponseSuccess$outboundSchema),
  verifyResult: z.lazy(() => V3VerifyStatusResponseVerifyResult$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3VerifyStatusResponse$ {
  /** @deprecated use `V3VerifyStatusResponse$inboundSchema` instead. */
  export const inboundSchema = V3VerifyStatusResponse$inboundSchema;
  /** @deprecated use `V3VerifyStatusResponse$outboundSchema` instead. */
  export const outboundSchema = V3VerifyStatusResponse$outboundSchema;
  /** @deprecated use `V3VerifyStatusResponse$Outbound` instead. */
  export type Outbound = V3VerifyStatusResponse$Outbound;
}

export function v3VerifyStatusResponseToJSON(
  v3VerifyStatusResponse: V3VerifyStatusResponse,
): string {
  return JSON.stringify(
    V3VerifyStatusResponse$outboundSchema.parse(v3VerifyStatusResponse),
  );
}

export function v3VerifyStatusResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3VerifyStatusResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3VerifyStatusResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3VerifyStatusResponse' from JSON`,
  );
}
