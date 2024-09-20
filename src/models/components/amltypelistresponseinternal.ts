/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  KYCFieldTypeResponseInternal,
  KYCFieldTypeResponseInternal$inboundSchema,
  KYCFieldTypeResponseInternal$Outbound,
  KYCFieldTypeResponseInternal$outboundSchema,
} from "./kycfieldtyperesponseinternal.js";

export type AmlTypeListResponseInternal = {
  amlType?: string | undefined;
  fields?: Array<KYCFieldTypeResponseInternal> | undefined;
  listHits?: number | undefined;
};

/** @internal */
export const AmlTypeListResponseInternal$inboundSchema: z.ZodType<
  AmlTypeListResponseInternal,
  z.ZodTypeDef,
  unknown
> = z.object({
  amlType: z.string().optional(),
  fields: z.array(KYCFieldTypeResponseInternal$inboundSchema).optional(),
  listHits: z.number().int().optional(),
});

/** @internal */
export type AmlTypeListResponseInternal$Outbound = {
  amlType?: string | undefined;
  fields?: Array<KYCFieldTypeResponseInternal$Outbound> | undefined;
  listHits?: number | undefined;
};

/** @internal */
export const AmlTypeListResponseInternal$outboundSchema: z.ZodType<
  AmlTypeListResponseInternal$Outbound,
  z.ZodTypeDef,
  AmlTypeListResponseInternal
> = z.object({
  amlType: z.string().optional(),
  fields: z.array(KYCFieldTypeResponseInternal$outboundSchema).optional(),
  listHits: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AmlTypeListResponseInternal$ {
  /** @deprecated use `AmlTypeListResponseInternal$inboundSchema` instead. */
  export const inboundSchema = AmlTypeListResponseInternal$inboundSchema;
  /** @deprecated use `AmlTypeListResponseInternal$outboundSchema` instead. */
  export const outboundSchema = AmlTypeListResponseInternal$outboundSchema;
  /** @deprecated use `AmlTypeListResponseInternal$Outbound` instead. */
  export type Outbound = AmlTypeListResponseInternal$Outbound;
}
