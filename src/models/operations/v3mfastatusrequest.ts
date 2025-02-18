/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3MFAStatusRequestResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Successful Request
   */
  v3MFAStatusResponse?: components.V3MFAStatusResponse | undefined;
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const V3MFAStatusRequestResponse$inboundSchema: z.ZodType<
  V3MFAStatusRequestResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V3MFAStatusResponse: components.V3MFAStatusResponse$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V3MFAStatusResponse": "v3MFAStatusResponse",
    "Headers": "headers",
  });
});

/** @internal */
export type V3MFAStatusRequestResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V3MFAStatusResponse?: components.V3MFAStatusResponse$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const V3MFAStatusRequestResponse$outboundSchema: z.ZodType<
  V3MFAStatusRequestResponse$Outbound,
  z.ZodTypeDef,
  V3MFAStatusRequestResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v3MFAStatusResponse: components.V3MFAStatusResponse$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v3MFAStatusResponse: "V3MFAStatusResponse",
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3MFAStatusRequestResponse$ {
  /** @deprecated use `V3MFAStatusRequestResponse$inboundSchema` instead. */
  export const inboundSchema = V3MFAStatusRequestResponse$inboundSchema;
  /** @deprecated use `V3MFAStatusRequestResponse$outboundSchema` instead. */
  export const outboundSchema = V3MFAStatusRequestResponse$outboundSchema;
  /** @deprecated use `V3MFAStatusRequestResponse$Outbound` instead. */
  export type Outbound = V3MFAStatusRequestResponse$Outbound;
}

export function v3MFAStatusRequestResponseToJSON(
  v3MFAStatusRequestResponse: V3MFAStatusRequestResponse,
): string {
  return JSON.stringify(
    V3MFAStatusRequestResponse$outboundSchema.parse(v3MFAStatusRequestResponse),
  );
}

export function v3MFAStatusRequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3MFAStatusRequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3MFAStatusRequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3MFAStatusRequestResponse' from JSON`,
  );
}
