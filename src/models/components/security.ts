/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type Security = {
    clientID?: string | undefined;
    clientSecret?: string | undefined;
    tokenURL?:
        | "https://keycloak.dev.lynx.proveint.com/realms/US/protocol/openid-connect/token"
        | undefined;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z
        .object({
            ClientID: z.string().optional(),
            ClientSecret: z.string().optional(),
            TokenURL: z
                .literal(
                    "https://keycloak.dev.lynx.proveint.com/realms/US/protocol/openid-connect/token"
                )
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ClientID: "clientID",
                ClientSecret: "clientSecret",
                TokenURL: "tokenURL",
            });
        });

    export type Outbound = {
        ClientID?: string | undefined;
        ClientSecret?: string | undefined;
        TokenURL: "https://keycloak.dev.lynx.proveint.com/realms/US/protocol/openid-connect/token";
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            clientID: z.string().optional(),
            clientSecret: z.string().optional(),
            tokenURL: z
                .literal(
                    "https://keycloak.dev.lynx.proveint.com/realms/US/protocol/openid-connect/token"
                )
                .default(
                    "https://keycloak.dev.lynx.proveint.com/realms/US/protocol/openid-connect/token" as const
                ),
        })
        .transform((v) => {
            return remap$(v, {
                clientID: "ClientID",
                clientSecret: "ClientSecret",
                tokenURL: "TokenURL",
            });
        });
}
