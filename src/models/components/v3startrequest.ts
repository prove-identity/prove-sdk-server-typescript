/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type V3StartRequest = {
    /**
     * Device ID is the ID of the device. Acceptable characters are: alphanumeric with symbols '-._+=/'.
     */
    deviceId?: string | undefined;
    /**
     * DOB, an optional challenge, is the date of birth in this format: YYYYY-MM-DD. Acceptable characters are: numeric with symbol '-'.
     */
    dob?: string | undefined;
    /**
     * Email is the email address of the customer. Acceptable characters are: alphanumeric with symbols '@.+'.
     */
    emailAddress?: string | undefined;
    /**
     * Final target URL is the URL where the end user will be redirected at the end of Instant Link. Acceptable characters are: alphanumeric with symbols '-._+=/:?'.
     */
    finalTargetUrl?: string | undefined;
    /**
     * Flow type is based on the method used  - either desktop for native for iOS/Android native apps or mobile web. Acceptable options are: native or web.
     */
    flowType?: string | undefined;
    /**
     * IP address is the IP address of the device of the customer. Acceptable characters are: numeric with symbols ':.'.
     */
    ipAddress?: string | undefined;
    /**
     * Last4SSN, an optional challenge, is the last 4 numbers of the social security number. Acceptable characters are: numeric.
     */
    last4SSN?: string | undefined;
    /**
     * Phone number is the number of the mobile phone. Acceptable characters are: alphanumeric with symbols '+'.
     */
    phoneNumber?: string | undefined;
};

/** @internal */
export namespace V3StartRequest$ {
    export const inboundSchema: z.ZodType<V3StartRequest, z.ZodTypeDef, unknown> = z
        .object({
            deviceId: z.string().default("713189b8-5555-4b08-83ba-75d08780aebd"),
            dob: z.string().default("2024-05-02 00:00:00 +0000 UTC"),
            emailAddress: z.string().default("jdoe@example.com"),
            finalTargetUrl: z.string().default("https://www.example.com/landing-page"),
            flowType: z.string().default("web"),
            ipAddress: z.string().default("10.0.0.1"),
            last4SSN: z.string().default("1234"),
            phoneNumber: z.string().default("12065550100"),
        })
        .transform((v) => {
            return {
                deviceId: v.deviceId,
                dob: v.dob,
                emailAddress: v.emailAddress,
                finalTargetUrl: v.finalTargetUrl,
                flowType: v.flowType,
                ipAddress: v.ipAddress,
                last4SSN: v.last4SSN,
                phoneNumber: v.phoneNumber,
            };
        });

    export type Outbound = {
        deviceId: string;
        dob: string;
        emailAddress: string;
        finalTargetUrl: string;
        flowType: string;
        ipAddress: string;
        last4SSN: string;
        phoneNumber: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, V3StartRequest> = z
        .object({
            deviceId: z.string().default("713189b8-5555-4b08-83ba-75d08780aebd"),
            dob: z.string().default("2024-05-02 00:00:00 +0000 UTC"),
            emailAddress: z.string().default("jdoe@example.com"),
            finalTargetUrl: z.string().default("https://www.example.com/landing-page"),
            flowType: z.string().default("web"),
            ipAddress: z.string().default("10.0.0.1"),
            last4SSN: z.string().default("1234"),
            phoneNumber: z.string().default("12065550100"),
        })
        .transform((v) => {
            return {
                deviceId: v.deviceId,
                dob: v.dob,
                emailAddress: v.emailAddress,
                finalTargetUrl: v.finalTargetUrl,
                flowType: v.flowType,
                ipAddress: v.ipAddress,
                last4SSN: v.last4SSN,
                phoneNumber: v.phoneNumber,
            };
        });
}
