/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    AmlTypeListResponseInternal,
    AmlTypeListResponseInternal$inboundSchema,
    AmlTypeListResponseInternal$Outbound,
    AmlTypeListResponseInternal$outboundSchema,
} from "./amltypelistresponseinternal.js";
import * as z from "zod";

export type KYCInternal = {
    amlTypeLists?: Array<AmlTypeListResponseInternal> | undefined;
    totalHits?: number | undefined;
};

/** @internal */
export const KYCInternal$inboundSchema: z.ZodType<KYCInternal, z.ZodTypeDef, unknown> = z.object({
    amlTypeLists: z.array(AmlTypeListResponseInternal$inboundSchema).optional(),
    totalHits: z.number().int().optional(),
});

/** @internal */
export type KYCInternal$Outbound = {
    amlTypeLists?: Array<AmlTypeListResponseInternal$Outbound> | undefined;
    totalHits?: number | undefined;
};

/** @internal */
export const KYCInternal$outboundSchema: z.ZodType<
    KYCInternal$Outbound,
    z.ZodTypeDef,
    KYCInternal
> = z.object({
    amlTypeLists: z.array(AmlTypeListResponseInternal$outboundSchema).optional(),
    totalHits: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace KYCInternal$ {
    /** @deprecated use `KYCInternal$inboundSchema` instead. */
    export const inboundSchema = KYCInternal$inboundSchema;
    /** @deprecated use `KYCInternal$outboundSchema` instead. */
    export const outboundSchema = KYCInternal$outboundSchema;
    /** @deprecated use `KYCInternal$Outbound` instead. */
    export type Outbound = KYCInternal$Outbound;
}