/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V3ChallengeRequest = {
    /**
     * Correlation ID is the unique ID that Prove generates for the flow. It is returned from the Start endpoint and cannot be reused outside of a single flow.
     */
    correlationId: string;
    /**
     * DOB, an optional challenge, is the date of birth in one of these formats: YYYY-MM-DD, YYYY-MM, or MM-DD. Acceptable characters are: numeric with symbol '-'.
     */
    dob?: string | undefined;
    /**
     * SSN is either the full or last 4 numbers of the social security number. Acceptable characters are: numeric.
     */
    ssn?: string | undefined;
};

/** @internal */
export namespace V3ChallengeRequest$ {
    export const inboundSchema: z.ZodType<V3ChallengeRequest, z.ZodTypeDef, unknown> = z.object({
        correlationId: z.string(),
        dob: z.string().optional(),
        ssn: z.string().optional(),
    });

    export type Outbound = {
        correlationId: string;
        dob?: string | undefined;
        ssn?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3ChallengeRequest> = z.object({
        correlationId: z.string(),
        dob: z.string().optional(),
        ssn: z.string().optional(),
    });
}
