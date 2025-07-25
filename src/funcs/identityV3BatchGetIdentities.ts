/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ProveapiCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ProveapiError } from "../models/errors/proveapierror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Batch Get Identities
 *
 * @remarks
 * Return a list of all identities you have enrolled in Identity Manager.
 */
export function identityV3BatchGetIdentities(
  client: ProveapiCore,
  clientRequestId?: string | undefined,
  limit?: number | undefined,
  startKey?: string | undefined,
  showInactive?: boolean | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.V3BatchGetIdentitiesResponse,
    | errors.Error400
    | errors.Error401
    | errors.Error403
    | errors.ErrorT
    | ProveapiError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    clientRequestId,
    limit,
    startKey,
    showInactive,
    options,
  ));
}

async function $do(
  client: ProveapiCore,
  clientRequestId?: string | undefined,
  limit?: number | undefined,
  startKey?: string | undefined,
  showInactive?: boolean | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.V3BatchGetIdentitiesResponse,
      | errors.Error400
      | errors.Error401
      | errors.Error403
      | errors.ErrorT
      | ProveapiError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const input: operations.V3BatchGetIdentitiesRequest = {
    clientRequestId: clientRequestId,
    limit: limit,
    startKey: startKey,
    showInactive: showInactive,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.V3BatchGetIdentitiesRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v3/identity/")();

  const query = encodeFormQuery({
    "clientRequestId": payload.clientRequestId,
    "limit": payload.limit,
    "showInactive": payload.showInactive,
    "startKey": payload.startKey,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const securityInput = await extractSecurity(client._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "V3BatchGetIdentities",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "403", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.V3BatchGetIdentitiesResponse,
    | errors.Error400
    | errors.Error401
    | errors.Error403
    | errors.ErrorT
    | ProveapiError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, operations.V3BatchGetIdentitiesResponse$inboundSchema, {
      key: "V3BatchGetIdentitiesResponse",
    }),
    M.jsonErr(400, errors.Error400$inboundSchema),
    M.jsonErr(401, errors.Error401$inboundSchema),
    M.jsonErr(403, errors.Error403$inboundSchema),
    M.jsonErr(500, errors.ErrorT$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
