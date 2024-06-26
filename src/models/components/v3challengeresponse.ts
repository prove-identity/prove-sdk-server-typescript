/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V3ChallengeIndividualRequest,
    V3ChallengeIndividualRequest$,
} from "./v3challengeindividualrequest.js";
import * as z from "zod";

export type V3ChallengeResponse = {
    individual?: V3ChallengeIndividualRequest | undefined;
    /**
     * Next contains the next set of allowed calls in the same flow.
     */
    next: { [k: string]: string };
    /**
     * Success returns true if the challenge was accepted and user info retrieved.
     */
    success: boolean;
};

/** @internal */
export namespace V3ChallengeResponse$ {
    export const inboundSchema: z.ZodType<V3ChallengeResponse, z.ZodTypeDef, unknown> = z.object({
        individual: V3ChallengeIndividualRequest$.inboundSchema.optional(),
        next: z.record(z.string()),
        success: z.boolean(),
    });

    export type Outbound = {
        individual?: V3ChallengeIndividualRequest$.Outbound | undefined;
        next: { [k: string]: string };
        success: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3ChallengeResponse> = z.object({
        individual: V3ChallengeIndividualRequest$.outboundSchema.optional(),
        next: z.record(z.string()),
        success: z.boolean(),
    });
}
