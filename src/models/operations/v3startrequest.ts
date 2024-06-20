/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type V3StartRequestResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful request.
     */
    v3StartResponse?: components.V3StartResponse | undefined;
};

/** @internal */
export namespace V3StartRequestResponse$ {
    export const inboundSchema: z.ZodType<V3StartRequestResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            V3StartResponse: components.V3StartResponse$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                V3StartResponse: "v3StartResponse",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        V3StartResponse?: components.V3StartResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3StartRequestResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            v3StartResponse: components.V3StartResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                v3StartResponse: "V3StartResponse",
            });
        });
}
