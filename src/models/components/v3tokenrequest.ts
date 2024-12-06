/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V3TokenRequest = {
  /**
   * ClientID is the optional client ID.
   */
  clientId: string;
  /**
   * ClientSecret is the client secret ID provided to the customer during onboarding.
   */
  clientSecret: string;
  /**
   * GrantType only allows option: `client_credentials`.
   */
  grantType: string;
};

/** @internal */
export const V3TokenRequest$inboundSchema: z.ZodType<
  V3TokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  grant_type: z.string(),
}).transform((v) => {
  return remap$(v, {
    "client_id": "clientId",
    "client_secret": "clientSecret",
    "grant_type": "grantType",
  });
});

/** @internal */
export type V3TokenRequest$Outbound = {
  client_id: string;
  client_secret: string;
  grant_type: string;
};

/** @internal */
export const V3TokenRequest$outboundSchema: z.ZodType<
  V3TokenRequest$Outbound,
  z.ZodTypeDef,
  V3TokenRequest
> = z.object({
  clientId: z.string(),
  clientSecret: z.string(),
  grantType: z.string(),
}).transform((v) => {
  return remap$(v, {
    clientId: "client_id",
    clientSecret: "client_secret",
    grantType: "grant_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V3TokenRequest$ {
  /** @deprecated use `V3TokenRequest$inboundSchema` instead. */
  export const inboundSchema = V3TokenRequest$inboundSchema;
  /** @deprecated use `V3TokenRequest$outboundSchema` instead. */
  export const outboundSchema = V3TokenRequest$outboundSchema;
  /** @deprecated use `V3TokenRequest$Outbound` instead. */
  export type Outbound = V3TokenRequest$Outbound;
}

export function v3TokenRequestToJSON(v3TokenRequest: V3TokenRequest): string {
  return JSON.stringify(V3TokenRequest$outboundSchema.parse(v3TokenRequest));
}

export function v3TokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<V3TokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V3TokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V3TokenRequest' from JSON`,
  );
}
