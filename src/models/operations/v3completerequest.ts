/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type V3CompleteRequestResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful request.
     */
    v3CompleteResponse?: components.V3CompleteResponse | undefined;
};

/** @internal */
export namespace V3CompleteRequestResponse$ {
    export const inboundSchema: z.ZodType<V3CompleteRequestResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            V3CompleteResponse: components.V3CompleteResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.V3CompleteResponse === undefined
                    ? null
                    : { v3CompleteResponse: v.V3CompleteResponse }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        V3CompleteResponse?: components.V3CompleteResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3CompleteRequestResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            v3CompleteResponse: components.V3CompleteResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.v3CompleteResponse === undefined
                    ? null
                    : { V3CompleteResponse: v.v3CompleteResponse }),
            };
        });
}
