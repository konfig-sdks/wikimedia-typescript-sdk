/* tslint:disable */
/* eslint-disable */
/*
Wikimedia

This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats.
### Global Rules
- Limit your clients to no more than 200 requests/s to this API.
  Each API endpoint's documentation may detail more specific usage limits.
- Set a unique `User-Agent` or `Api-User-Agent` header that
  allows us to contact you quickly. Email addresses or URLs
  of contact pages work well.

By using this API, you agree to Wikimedia's  [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy). Unless otherwise specified in the endpoint documentation below, content accessed via this API is licensed under the [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)  and [GFDL](https://www.gnu.org/copyleft/fdl.html) licenses, and you irrevocably agree to release modifications or additions made through this API under these licenses.  See https://www.mediawiki.org/wiki/REST_API for background and details.
### Endpoint documentation
Please consult each endpoint's documentation for details on:
- Licensing information for the specific type of content
  and data served via the endpoint.
- Stability markers to inform you about development status and
  change policy, according to
  [our API version policy](https://www.mediawiki.org/wiki/API_versioning).
- Endpoint specific usage limits.


The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/


type ApiKey =
  | string
  | ((keyParamName: string) => string)
  | ((keyParamName: string) => Promise<string>)
  | { [apiKeyName: string]: string | undefined };

export interface ConfigurationParameters {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: ApiKey;

    basePath?: string;
    baseOptions?: any;
    userAgent?: string;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: ApiKey;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * Default User-Agent header
     */
    userAgent: string;

    constructor(param: ConfigurationParameters = {}) {

        this.apiKey = param.apiKey
        
        if (this.apiKey === undefined) {
            this.apiKey = {}
        }
        
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions ?? {};
        this.userAgent = param.userAgent === undefined ? "Konfig/1.0.0/typescript" : param.userAgent;
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}