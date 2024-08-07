/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { v3V3ChallengeRequest } from "../funcs/v3V3ChallengeRequest.js";
import { v3V3CompleteRequest } from "../funcs/v3V3CompleteRequest.js";
import { v3V3StartRequest } from "../funcs/v3V3StartRequest.js";
import { v3V3TokenRequest } from "../funcs/v3V3TokenRequest.js";
import { v3V3ValidateRequest } from "../funcs/v3V3ValidateRequest.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class V3 extends ClientSDK {
    /**
     * Request OAuth token.
     *
     * @remarks
     * Send this request to request the OAuth token.
     */
    async v3TokenRequest(
        request?: components.V3TokenRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.V3TokenRequestResponse> {
        return unwrapAsync(v3V3TokenRequest(this, request, options));
    }

    /**
     * Submit challenge.
     *
     * @remarks
     * Send this request to submit challenge information. Either a DOB or last 4 of SSN needs to be submitted if neither was submitted to the /start endpoint (challenge fields submitted to this endpoint will overwrite the /start endpoint fields submitted). It will return a correlation ID, user information, and the next step to call in the flow. This capability is only available in Prove Pre-Fill®, it's not available in Prove Identity®. You'll notice that when using Prove Identity®, if /validate is successful, it will then return `v3-complete` as one of the keys in the `Next` field map instead of `v3-challenge`.
     */
    async v3ChallengeRequest(
        request?: components.V3ChallengeRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.V3ChallengeRequestResponse> {
        return unwrapAsync(v3V3ChallengeRequest(this, request, options));
    }

    /**
     * Complete flow.
     *
     * @remarks
     * Send this request to verify the user and complete the flow. It will return a correlation ID, user information, and the next step to call in the flow. At least a first name, last name, or SSN is required to verify an individual.
     */
    async v3CompleteRequest(
        request?: components.V3CompleteRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.V3CompleteRequestResponse> {
        return unwrapAsync(v3V3CompleteRequest(this, request, options));
    }

    /**
     * Start flow.
     *
     * @remarks
     * Send this request to start a Prove flow. It will return a correlation ID and an authToken for the client SDK.
     */
    async v3StartRequest(
        request?: components.V3StartRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.V3StartRequestResponse> {
        return unwrapAsync(v3V3StartRequest(this, request, options));
    }

    /**
     * Validate phone number.
     *
     * @remarks
     * Send this request to check the phone number entered/discovered earlier in the flow is validated. It will return a correlation ID and the next step.
     */
    async v3ValidateRequest(
        request?: components.V3ValidateRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.V3ValidateRequestResponse> {
        return unwrapAsync(v3V3ValidateRequest(this, request, options));
    }
}
