/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Bad Request. The server cannot process the request due to a client error.
 */
export type ErrorTData = {
    /**
     * Code is an internal error code that describes the problem category of the request.
     */
    code?: number | undefined;
    /**
     * Message is an error message describing the problem with the request.
     */
    message: string;
};

/**
 * Bad Request. The server cannot process the request due to a client error.
 */
export class ErrorT extends Error {
    /**
     * Code is an internal error code that describes the problem category of the request.
     */
    code?: number | undefined;

    /** The original data that was passed to this error instance. */
    data$: ErrorTData;

    constructor(err: ErrorTData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        if (err.code != null) {
            this.code = err.code;
        }

        this.name = "ErrorT";
    }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
    .object({
        code: z.number().int().optional(),
        message: z.string(),
    })
    .transform((v) => {
        return new ErrorT(v);
    });

/** @internal */
export type ErrorT$Outbound = {
    code?: number | undefined;
    message: string;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<ErrorT$Outbound, z.ZodTypeDef, ErrorT> = z
    .instanceof(ErrorT)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            code: z.number().int().optional(),
            message: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
    /** @deprecated use `ErrorT$inboundSchema` instead. */
    export const inboundSchema = ErrorT$inboundSchema;
    /** @deprecated use `ErrorT$outboundSchema` instead. */
    export const outboundSchema = ErrorT$outboundSchema;
    /** @deprecated use `ErrorT$Outbound` instead. */
    export type Outbound = ErrorT$Outbound;
}
