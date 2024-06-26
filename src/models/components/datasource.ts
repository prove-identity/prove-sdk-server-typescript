/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AddressResponse, AddressResponse$ } from "./addressresponse.js";
import { EmailAddressResponse, EmailAddressResponse$ } from "./emailaddressresponse.js";
import { IdentifiersResponse, IdentifiersResponse$ } from "./identifiersresponse.js";
import { NameResponse, NameResponse$ } from "./nameresponse.js";
import * as z from "zod";

export type DataSource = {
    address?: AddressResponse | undefined;
    cipConfidence?: string | undefined;
    email?: EmailAddressResponse | undefined;
    identifiers?: IdentifiersResponse | undefined;
    name?: NameResponse | undefined;
    reasonCodes?: Array<string> | undefined;
    verified?: boolean | undefined;
};

/** @internal */
export namespace DataSource$ {
    export const inboundSchema: z.ZodType<DataSource, z.ZodTypeDef, unknown> = z.object({
        address: AddressResponse$.inboundSchema.optional(),
        cipConfidence: z.string().optional(),
        email: EmailAddressResponse$.inboundSchema.optional(),
        identifiers: IdentifiersResponse$.inboundSchema.optional(),
        name: NameResponse$.inboundSchema.optional(),
        reasonCodes: z.array(z.string()).optional(),
        verified: z.boolean().optional(),
    });

    export type Outbound = {
        address?: AddressResponse$.Outbound | undefined;
        cipConfidence?: string | undefined;
        email?: EmailAddressResponse$.Outbound | undefined;
        identifiers?: IdentifiersResponse$.Outbound | undefined;
        name?: NameResponse$.Outbound | undefined;
        reasonCodes?: Array<string> | undefined;
        verified?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DataSource> = z.object({
        address: AddressResponse$.outboundSchema.optional(),
        cipConfidence: z.string().optional(),
        email: EmailAddressResponse$.outboundSchema.optional(),
        identifiers: IdentifiersResponse$.outboundSchema.optional(),
        name: NameResponse$.outboundSchema.optional(),
        reasonCodes: z.array(z.string()).optional(),
        verified: z.boolean().optional(),
    });
}
