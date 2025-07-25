/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ProveapiError } from "./proveapierror.js";

export type Error401Data = {
  /**
   * An error code that describes the problem category of the request.
   */
  code?: number | undefined;
  /**
   * The error message describing the problem with the request.
   */
  message: string;
};

export class Error401 extends ProveapiError {
  /**
   * An error code that describes the problem category of the request.
   */
  code?: number | undefined;

  /** The original data that was passed to this error instance. */
  data$: Error401Data;

  constructor(
    err: Error401Data,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.code != null) this.code = err.code;

    this.name = "Error401";
  }
}

/** @internal */
export const Error401$inboundSchema: z.ZodType<
  Error401,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new Error401(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type Error401$Outbound = {
  code?: number | undefined;
  message: string;
};

/** @internal */
export const Error401$outboundSchema: z.ZodType<
  Error401$Outbound,
  z.ZodTypeDef,
  Error401
> = z.instanceof(Error401)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number().int().optional(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Error401$ {
  /** @deprecated use `Error401$inboundSchema` instead. */
  export const inboundSchema = Error401$inboundSchema;
  /** @deprecated use `Error401$outboundSchema` instead. */
  export const outboundSchema = Error401$outboundSchema;
  /** @deprecated use `Error401$Outbound` instead. */
  export type Outbound = Error401$Outbound;
}
