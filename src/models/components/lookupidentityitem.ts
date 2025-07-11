/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * An Identity associated with the given phone number.
 */
export type LookupIdentityItem = {
  /**
   * If true, the identity is currently active.
   */
  active?: boolean | undefined;
  /**
   * The carrier associated with this identity/mobile number.
   */
  carrier?: string | undefined;
  /**
   * A client-generated unique ID for a specific customer. This can be used by clients to link calls related to the same customer, across different requests or sessions.  The format of this ID is defined by the client - Prove recommends using a GUID, but any format can be accepted.
   */
  clientCustomerId?: string | undefined;
  /**
   * The country code associated with the customer/identity. This will be in the ISO 3166-1 A-2 format.
   */
  countryCode?: string | undefined;
  /**
   * The time that this identity was created, in seconds since the Unix epoch.
   */
  createdAt?: number | undefined;
  /**
   * The time that this identity was created, in ISO 8601 format.
   */
  creationString?: string | undefined;
  /**
   * A string that is the unique identifier for the Prove Key on the device. Only applicable if you are leveraging Prove Unify.
   */
  deviceId?: string | undefined;
  /**
   * A Prove-generated unique ID for a specific identity.
   */
  identityId?: string | undefined;
  /**
   * The type of line associated with this identity/mobile number.
   */
  lineType?: string | undefined;
  /**
   * The number of the mobile phone. Refer to the Prove Pre-Fill with Mobile Auth and Prove Identity with Mobile Auth documentation for situations where this field is not required. US phone numbers can be passed in with or without a leading +1. Acceptable characters are: alphanumeric with symbols '+'.
   */
  phoneNumber: string;
};

/** @internal */
export const LookupIdentityItem$inboundSchema: z.ZodType<
  LookupIdentityItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  active: z.boolean().optional(),
  carrier: z.string().optional(),
  clientCustomerId: z.string().optional(),
  countryCode: z.string().optional(),
  createdAt: z.number().int().optional(),
  creationString: z.string().optional(),
  deviceId: z.string().optional(),
  identityId: z.string().optional(),
  lineType: z.string().optional(),
  phoneNumber: z.string(),
});

/** @internal */
export type LookupIdentityItem$Outbound = {
  active?: boolean | undefined;
  carrier?: string | undefined;
  clientCustomerId?: string | undefined;
  countryCode?: string | undefined;
  createdAt?: number | undefined;
  creationString?: string | undefined;
  deviceId?: string | undefined;
  identityId?: string | undefined;
  lineType?: string | undefined;
  phoneNumber: string;
};

/** @internal */
export const LookupIdentityItem$outboundSchema: z.ZodType<
  LookupIdentityItem$Outbound,
  z.ZodTypeDef,
  LookupIdentityItem
> = z.object({
  active: z.boolean().optional(),
  carrier: z.string().optional(),
  clientCustomerId: z.string().optional(),
  countryCode: z.string().optional(),
  createdAt: z.number().int().optional(),
  creationString: z.string().optional(),
  deviceId: z.string().optional(),
  identityId: z.string().optional(),
  lineType: z.string().optional(),
  phoneNumber: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LookupIdentityItem$ {
  /** @deprecated use `LookupIdentityItem$inboundSchema` instead. */
  export const inboundSchema = LookupIdentityItem$inboundSchema;
  /** @deprecated use `LookupIdentityItem$outboundSchema` instead. */
  export const outboundSchema = LookupIdentityItem$outboundSchema;
  /** @deprecated use `LookupIdentityItem$Outbound` instead. */
  export type Outbound = LookupIdentityItem$Outbound;
}

export function lookupIdentityItemToJSON(
  lookupIdentityItem: LookupIdentityItem,
): string {
  return JSON.stringify(
    LookupIdentityItem$outboundSchema.parse(lookupIdentityItem),
  );
}

export function lookupIdentityItemFromJSON(
  jsonString: string,
): SafeParseResult<LookupIdentityItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LookupIdentityItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LookupIdentityItem' from JSON`,
  );
}
