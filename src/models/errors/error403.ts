/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Error403Data = {
  /**
   * An internal error code that identifies the specific authorization issue.
   */
  code?: number | undefined;
  /**
   * An error message describing why access is forbidden.
   */
  message: string;
};

export class Error403 extends Error {
  /**
   * An internal error code that identifies the specific authorization issue.
   */
  code?: number | undefined;

  /** The original data that was passed to this error instance. */
  data$: Error403Data;

  constructor(err: Error403Data) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.code != null) this.code = err.code;

    this.name = "Error403";
  }
}

/** @internal */
export const Error403$inboundSchema: z.ZodType<
  Error403,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.number().int().optional(),
  message: z.string(),
})
  .transform((v) => {
    return new Error403(v);
  });

/** @internal */
export type Error403$Outbound = {
  code?: number | undefined;
  message: string;
};

/** @internal */
export const Error403$outboundSchema: z.ZodType<
  Error403$Outbound,
  z.ZodTypeDef,
  Error403
> = z.instanceof(Error403)
  .transform(v => v.data$)
  .pipe(z.object({
    code: z.number().int().optional(),
    message: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Error403$ {
  /** @deprecated use `Error403$inboundSchema` instead. */
  export const inboundSchema = Error403$inboundSchema;
  /** @deprecated use `Error403$outboundSchema` instead. */
  export const outboundSchema = Error403$outboundSchema;
  /** @deprecated use `Error403$Outbound` instead. */
  export type Outbound = Error403$Outbound;
}
