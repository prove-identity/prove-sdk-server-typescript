/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Individual, Individual$ } from "./individual";
import * as z from "zod";

export type V3CompleteRequest = {
    /**
     * Correlation ID is the unique ID of the flow. To continue the flow, the field will also be used for each of the subsequent API calls in the same flow.
     */
    correlationId: string;
    individual: Individual;
};

/** @internal */
export namespace V3CompleteRequest$ {
    export const inboundSchema: z.ZodType<V3CompleteRequest, z.ZodTypeDef, unknown> = z
        .object({
            correlationId: z.string(),
            individual: Individual$.inboundSchema,
        })
        .transform((v) => {
            return {
                correlationId: v.correlationId,
                individual: v.individual,
            };
        });

    export type Outbound = {
        correlationId: string;
        individual: Individual$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3CompleteRequest> = z
        .object({
            correlationId: z.string(),
            individual: Individual$.outboundSchema,
        })
        .transform((v) => {
            return {
                correlationId: v.correlationId,
                individual: v.individual,
            };
        });
}
