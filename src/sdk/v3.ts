/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { v3V3ChallengeRequest } from "../funcs/v3V3ChallengeRequest.js";
import { v3V3CompleteRequest } from "../funcs/v3V3CompleteRequest.js";
import { v3V3StartRequest } from "../funcs/v3V3StartRequest.js";
import { v3V3TokenRequest } from "../funcs/v3V3TokenRequest.js";
import { v3V3UnifyBindRequest } from "../funcs/v3V3UnifyBindRequest.js";
import { v3V3UnifyRequest } from "../funcs/v3V3UnifyRequest.js";
import { v3V3UnifyStatusRequest } from "../funcs/v3V3UnifyStatusRequest.js";
import { v3V3ValidateRequest } from "../funcs/v3V3ValidateRequest.js";
import { v3V3VerifyRequest } from "../funcs/v3V3VerifyRequest.js";
import { v3V3VerifyStatusRequest } from "../funcs/v3V3VerifyStatusRequest.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class V3 extends ClientSDK {
  /**
   * Request OAuth Token
   *
   * @remarks
   * This endpoint allows you to request an OAuth token.
   */
  async v3TokenRequest(
    request?: components.V3TokenRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3TokenRequestResponse> {
    return unwrapAsync(v3V3TokenRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Submit Challenge
   *
   * @remarks
   * This endpoint allows you to submit challenge information.
   */
  async v3ChallengeRequest(
    request?: components.V3ChallengeRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3ChallengeRequestResponse> {
    return unwrapAsync(v3V3ChallengeRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Complete Flow
   *
   * @remarks
   * This endpoint allows you to verify the user and complete the flow.
   */
  async v3CompleteRequest(
    request?: components.V3CompleteRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3CompleteRequestResponse> {
    return unwrapAsync(v3V3CompleteRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Start Flow
   *
   * @remarks
   * This endpoint allows you to start the solution flow.
   */
  async v3StartRequest(
    request?: components.V3StartRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3StartRequestResponse> {
    return unwrapAsync(v3V3StartRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate Possession Check
   *
   * @remarks
   * This endpoint allows you to initiate the possession check.
   */
  async v3UnifyRequest(
    request?: components.V3UnifyRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3UnifyRequestResponse> {
    return unwrapAsync(v3V3UnifyRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Bind Prove Key
   *
   * @remarks
   * This endpoint allows you to bind a Prove Key to a phone number of a Unify session and get the possession result.
   */
  async v3UnifyBindRequest(
    request?: components.V3UnifyBindRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3UnifyBindRequestResponse> {
    return unwrapAsync(v3V3UnifyBindRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Check Status
   *
   * @remarks
   * This endpoint allows you to check the status of a Unify session and get the possession result.
   */
  async v3UnifyStatusRequest(
    request?: components.V3UnifyStatusRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3UnifyStatusRequestResponse> {
    return unwrapAsync(v3V3UnifyStatusRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Validate Phone Number
   *
   * @remarks
   * This endpoint allows you to check if the phone number entered/discovered earlier in the flow is validated.
   */
  async v3ValidateRequest(
    request?: components.V3ValidateRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3ValidateRequestResponse> {
    return unwrapAsync(v3V3ValidateRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate Verified Users Session
   *
   * @remarks
   * This endpoint allows you to initiate a Verified Users session.
   */
  async v3VerifyRequest(
    request?: components.V3VerifyRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3VerifyRequestResponse> {
    return unwrapAsync(v3V3VerifyRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Check Verification Result
   *
   * @remarks
   * This endpoint allows you to perform the necessary checks for a Verified Users session.
   */
  async v3VerifyStatusRequest(
    request?: components.V3VerifyStatusRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.V3VerifyStatusRequestResponse> {
    return unwrapAsync(v3V3VerifyStatusRequest(
      this,
      request,
      options,
    ));
  }
}
