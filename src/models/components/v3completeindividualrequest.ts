/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    V3CompleteAddressEntryRequest,
    V3CompleteAddressEntryRequest$,
} from "./v3completeaddressentryrequest.js";
import * as z from "zod";

export type V3CompleteIndividualRequest = {
    /**
     * Addresses that belong to the individual.
     */
    addresses?: Array<V3CompleteAddressEntryRequest> | undefined;
    /**
     * DOB is the date of birth of the individual.
     */
    dob?: string | undefined;
    /**
     * Email addresses that belong to the individual.
     */
    emailAddresses?: Array<string> | undefined;
    /**
     * First name of the individual.
     */
    firstName?: string | undefined;
    /**
     * Last4SSN is last 4 digits of SSN.
     */
    last4SSN?: string | undefined;
    /**
     * Last name of the individual.
     */
    lastName?: string | undefined;
    /**
     * SSN is the social security number of the individual.
     */
    ssn?: string | undefined;
};

/** @internal */
export namespace V3CompleteIndividualRequest$ {
    export const inboundSchema: z.ZodType<V3CompleteIndividualRequest, z.ZodTypeDef, unknown> =
        z.object({
            addresses: z.array(V3CompleteAddressEntryRequest$.inboundSchema).optional(),
            dob: z.string().optional(),
            emailAddresses: z.array(z.string()).optional(),
            firstName: z.string().optional(),
            last4SSN: z.string().optional(),
            lastName: z.string().optional(),
            ssn: z.string().optional(),
        });

    export type Outbound = {
        addresses?: Array<V3CompleteAddressEntryRequest$.Outbound> | undefined;
        dob?: string | undefined;
        emailAddresses?: Array<string> | undefined;
        firstName?: string | undefined;
        last4SSN?: string | undefined;
        lastName?: string | undefined;
        ssn?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3CompleteIndividualRequest> =
        z.object({
            addresses: z.array(V3CompleteAddressEntryRequest$.outboundSchema).optional(),
            dob: z.string().optional(),
            emailAddresses: z.array(z.string()).optional(),
            firstName: z.string().optional(),
            last4SSN: z.string().optional(),
            lastName: z.string().optional(),
            ssn: z.string().optional(),
        });
}
