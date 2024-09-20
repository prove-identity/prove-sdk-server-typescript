/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  DataSourceAddressResponseInternal,
  DataSourceAddressResponseInternal$inboundSchema,
  DataSourceAddressResponseInternal$Outbound,
  DataSourceAddressResponseInternal$outboundSchema,
} from "./datasourceaddressresponseinternal.js";
import {
  DataSourceEmailAddressResponseInternal,
  DataSourceEmailAddressResponseInternal$inboundSchema,
  DataSourceEmailAddressResponseInternal$Outbound,
  DataSourceEmailAddressResponseInternal$outboundSchema,
} from "./datasourceemailaddressresponseinternal.js";
import {
  DataSourceIdentifiersResponseInternal,
  DataSourceIdentifiersResponseInternal$inboundSchema,
  DataSourceIdentifiersResponseInternal$Outbound,
  DataSourceIdentifiersResponseInternal$outboundSchema,
} from "./datasourceidentifiersresponseinternal.js";
import {
  DataSourceNameResponseInternal,
  DataSourceNameResponseInternal$inboundSchema,
  DataSourceNameResponseInternal$Outbound,
  DataSourceNameResponseInternal$outboundSchema,
} from "./datasourcenameresponseinternal.js";

export type DataSourceInternal = {
  address?: DataSourceAddressResponseInternal | undefined;
  cipConfidence?: string | undefined;
  email?: DataSourceEmailAddressResponseInternal | undefined;
  identifiers?: DataSourceIdentifiersResponseInternal | undefined;
  name?: DataSourceNameResponseInternal | undefined;
  reasonCodes?: Array<string> | undefined;
};

/** @internal */
export const DataSourceInternal$inboundSchema: z.ZodType<
  DataSourceInternal,
  z.ZodTypeDef,
  unknown
> = z.object({
  address: DataSourceAddressResponseInternal$inboundSchema.optional(),
  cipConfidence: z.string().optional(),
  email: DataSourceEmailAddressResponseInternal$inboundSchema.optional(),
  identifiers: DataSourceIdentifiersResponseInternal$inboundSchema.optional(),
  name: DataSourceNameResponseInternal$inboundSchema.optional(),
  reasonCodes: z.array(z.string()).optional(),
});

/** @internal */
export type DataSourceInternal$Outbound = {
  address?: DataSourceAddressResponseInternal$Outbound | undefined;
  cipConfidence?: string | undefined;
  email?: DataSourceEmailAddressResponseInternal$Outbound | undefined;
  identifiers?: DataSourceIdentifiersResponseInternal$Outbound | undefined;
  name?: DataSourceNameResponseInternal$Outbound | undefined;
  reasonCodes?: Array<string> | undefined;
};

/** @internal */
export const DataSourceInternal$outboundSchema: z.ZodType<
  DataSourceInternal$Outbound,
  z.ZodTypeDef,
  DataSourceInternal
> = z.object({
  address: DataSourceAddressResponseInternal$outboundSchema.optional(),
  cipConfidence: z.string().optional(),
  email: DataSourceEmailAddressResponseInternal$outboundSchema.optional(),
  identifiers: DataSourceIdentifiersResponseInternal$outboundSchema.optional(),
  name: DataSourceNameResponseInternal$outboundSchema.optional(),
  reasonCodes: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSourceInternal$ {
  /** @deprecated use `DataSourceInternal$inboundSchema` instead. */
  export const inboundSchema = DataSourceInternal$inboundSchema;
  /** @deprecated use `DataSourceInternal$outboundSchema` instead. */
  export const outboundSchema = DataSourceInternal$outboundSchema;
  /** @deprecated use `DataSourceInternal$Outbound` instead. */
  export type Outbound = DataSourceInternal$Outbound;
}
