/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DataSourceNameResponseInternal = {
  firstName?: number | undefined;
  lastName?: number | undefined;
  nameScore?: number | undefined;
};

/** @internal */
export const DataSourceNameResponseInternal$inboundSchema: z.ZodType<
  DataSourceNameResponseInternal,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: z.number().int().optional(),
  lastName: z.number().int().optional(),
  nameScore: z.number().int().optional(),
});

/** @internal */
export type DataSourceNameResponseInternal$Outbound = {
  firstName?: number | undefined;
  lastName?: number | undefined;
  nameScore?: number | undefined;
};

/** @internal */
export const DataSourceNameResponseInternal$outboundSchema: z.ZodType<
  DataSourceNameResponseInternal$Outbound,
  z.ZodTypeDef,
  DataSourceNameResponseInternal
> = z.object({
  firstName: z.number().int().optional(),
  lastName: z.number().int().optional(),
  nameScore: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSourceNameResponseInternal$ {
  /** @deprecated use `DataSourceNameResponseInternal$inboundSchema` instead. */
  export const inboundSchema = DataSourceNameResponseInternal$inboundSchema;
  /** @deprecated use `DataSourceNameResponseInternal$outboundSchema` instead. */
  export const outboundSchema = DataSourceNameResponseInternal$outboundSchema;
  /** @deprecated use `DataSourceNameResponseInternal$Outbound` instead. */
  export type Outbound = DataSourceNameResponseInternal$Outbound;
}

export function dataSourceNameResponseInternalToJSON(
  dataSourceNameResponseInternal: DataSourceNameResponseInternal,
): string {
  return JSON.stringify(
    DataSourceNameResponseInternal$outboundSchema.parse(
      dataSourceNameResponseInternal,
    ),
  );
}

export function dataSourceNameResponseInternalFromJSON(
  jsonString: string,
): SafeParseResult<DataSourceNameResponseInternal, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataSourceNameResponseInternal$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataSourceNameResponseInternal' from JSON`,
  );
}
