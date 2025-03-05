/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3MFABindRequestResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Successful Request
   */
  v3MFABindResponse?: components.V3MFABindResponse | undefined;
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const V3MFABindRequestResponse$inboundSchema: z.ZodType<
  V3MFABindRequestResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V3MFABindResponse: components.V3MFABindResponse$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V3MFABindResponse": "v3MFABindResponse",
    "Headers": "headers",
  });
});

/** @internal */
export type V3MFABindRequestResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V3MFABindResponse?: components.V3MFABindResponse$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const V3MFABindRequestResponse$outboundSchema: z.ZodType<
  V3MFABindRequestResponse$Outbound,
  z.ZodTypeDef,
  V3MFABindRequestResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v3MFABindResponse: components.V3MFABindResponse$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v3MFABindResponse: "V3MFABindResponse",
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3MFABindRequestResponse$ {
  /** @deprecated use `V3MFABindRequestResponse$inboundSchema` instead. */
  export const inboundSchema = V3MFABindRequestResponse$inboundSchema;
  /** @deprecated use `V3MFABindRequestResponse$outboundSchema` instead. */
  export const outboundSchema = V3MFABindRequestResponse$outboundSchema;
  /** @deprecated use `V3MFABindRequestResponse$Outbound` instead. */
  export type Outbound = V3MFABindRequestResponse$Outbound;
}

export function v3MFABindRequestResponseToJSON(
  v3MFABindRequestResponse: V3MFABindRequestResponse,
): string {
  return JSON.stringify(
    V3MFABindRequestResponse$outboundSchema.parse(v3MFABindRequestResponse),
  );
}

export function v3MFABindRequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<V3MFABindRequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3MFABindRequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3MFABindRequestResponse' from JSON`,
  );
}
