<div align="left">

[![Visit Wikimedia](./header.png)](https://wikimedia.org)

# [Wikimedia](https://wikimedia.org)<a id="wikimedia"></a>

This API provides cacheable and straightforward access to Wikimedia content and data, in machine-readable formats.
### Global Rules<a id="global-rules"></a>
- Limit your clients to no more than 200 requests/s to this API.
  Each API endpoint's documentation may detail more specific usage limits.
- Set a unique `User-Agent` or `Api-User-Agent` header that
  allows us to contact you quickly. Email addresses or URLs
  of contact pages work well.

By using this API, you agree to Wikimedia's  [Terms of Use](https://wikimediafoundation.org/wiki/Terms_of_Use) and [Privacy Policy](https://wikimediafoundation.org/wiki/Privacy_policy). Unless otherwise specified in the endpoint documentation below, content accessed via this API is licensed under the [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)  and [GFDL](https://www.gnu.org/copyleft/fdl.html) licenses, and you irrevocably agree to release modifications or additions made through this API under these licenses.  See https://www.mediawiki.org/wiki/REST_API for background and details.
### Endpoint documentation<a id="endpoint-documentation"></a>
Please consult each endpoint's documentation for details on:
- Licensing information for the specific type of content
  and data served via the endpoint.
- Stability markers to inform you about development status and
  change policy, according to
  [our API version policy](https://www.mediawiki.org/wiki/API_versioning).
- Endpoint specific usage limits.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`wikimedia.bytesDifferenceData.getAbsoluteAggregateByProjectAndDateRange`](#wikimediabytesdifferencedatagetabsoluteaggregatebyprojectanddaterange)
  * [`wikimedia.bytesDifferenceData.getAbsolutePerPage`](#wikimediabytesdifferencedatagetabsoluteperpage)
  * [`wikimedia.bytesDifferenceData.getNetAggregateByProjectAndDateRange`](#wikimediabytesdifferencedatagetnetaggregatebyprojectanddaterange)
  * [`wikimedia.bytesDifferenceData.getSumNetTextBytesDifferencePerPage`](#wikimediabytesdifferencedatagetsumnettextbytesdifferenceperpage)
  * [`wikimedia.editedPagesData.getAggregateByProjectAndDateRange`](#wikimediaeditedpagesdatagetaggregatebyprojectanddaterange)
  * [`wikimedia.editedPagesData.getNewPagesCountsForProject`](#wikimediaeditedpagesdatagetnewpagescountsforproject)
  * [`wikimedia.editedPagesData.getTopByAbsoluteBytesDifference`](#wikimediaeditedpagesdatagettopbyabsolutebytesdifference)
  * [`wikimedia.editedPagesData.getTopByEditsCount`](#wikimediaeditedpagesdatagettopbyeditscount)
  * [`wikimedia.editedPagesData.getTopByNetBytesDifference`](#wikimediaeditedpagesdatagettopbynetbytesdifference)
  * [`wikimedia.editorsData.getEditorsCountsForProject`](#wikimediaeditorsdatageteditorscountsforproject)
  * [`wikimedia.editorsData.getTopByAbsoluteBytesDifference`](#wikimediaeditorsdatagettopbyabsolutebytesdifference)
  * [`wikimedia.editorsData.getTopByNetBytesDifference`](#wikimediaeditorsdatagettopbynetbytesdifference)
  * [`wikimedia.editorsData.getTopEditorsByEditsCount`](#wikimediaeditorsdatagettopeditorsbyeditscount)
  * [`wikimedia.editsData.getEditsCountsForProject`](#wikimediaeditsdatageteditscountsforproject)
  * [`wikimedia.editsData.getPageEditCounts`](#wikimediaeditsdatagetpageeditcounts)
  * [`wikimedia.feedContentAvailability.getByWikiDomain`](#wikimediafeedcontentavailabilitygetbywikidomain)
  * [`wikimedia.legacyData.getPagecountsAggregateByProjectAndDateRange`](#wikimedialegacydatagetpagecountsaggregatebyprojectanddaterange)
  * [`wikimedia.math.checkFormula`](#wikimediamathcheckformula)
  * [`wikimedia.math.getFormulaByHash`](#wikimediamathgetformulabyhash)
  * [`wikimedia.math.renderFormulaByHash`](#wikimediamathrenderformulabyhash)
  * [`wikimedia.pageviewsData.getPageviewCountsByArticleDateRange`](#wikimediapageviewsdatagetpageviewcountsbyarticledaterange)
  * [`wikimedia.pageviewsData.getPageviewCountsByProject`](#wikimediapageviewsdatagetpageviewcountsbyproject)
  * [`wikimedia.pageviewsData.listByCountryAndAccess`](#wikimediapageviewsdatalistbycountryandaccess)
  * [`wikimedia.pageviewsData.listMostViewedArticlesByProjectAndTimespan`](#wikimediapageviewsdatalistmostviewedarticlesbyprojectandtimespan)
  * [`wikimedia.registeredUsersData.getNewUserCountsByProjectAndDateRange`](#wikimediaregisteredusersdatagetnewusercountsbyprojectanddaterange)
  * [`wikimedia.transform.contentMachineTranslate`](#wikimediatransformcontentmachinetranslate)
  * [`wikimedia.transform.contentMachineTranslate_0`](#wikimediatransformcontentmachinetranslate_0)
  * [`wikimedia.transform.getDictionaryMeaning`](#wikimediatransformgetdictionarymeaning)
  * [`wikimedia.transform.getDictionaryMeaning_0`](#wikimediatransformgetdictionarymeaning_0)
  * [`wikimedia.transform.getListToolLanguagePairs`](#wikimediatransformgetlisttoollanguagepairs)
  * [`wikimedia.transform.languagePairList`](#wikimediatransformlanguagepairlist)
  * [`wikimedia.transform.listLanguagePairs`](#wikimediatransformlistlanguagepairs)
  * [`wikimedia.transform.toolLanguagePairsList`](#wikimediatransformtoollanguagepairslist)
  * [`wikimedia.transform.toolLanguagePairsList_0`](#wikimediatransformtoollanguagepairslist_0)
  * [`wikimedia.uniqueDevicesData.getByProjectAndDateRange`](#wikimediauniquedevicesdatagetbyprojectanddaterange)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Wikimedia&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Wikimedia } from "wikimedia-typescript-sdk";

const wikimedia = new Wikimedia({
  // Defining the base path is optional and defaults to https://wikimedia.org/api/rest_v1
  // basePath: "https://wikimedia.org/api/rest_v1",
  apiKey: "API_KEY",
});

const getAbsoluteAggregateByProjectAndDateRangeResponse =
  await wikimedia.bytesDifferenceData.getAbsoluteAggregateByProjectAndDateRange(
    {
      project: "project_example",
      editorType: "all-editor-types",
      pageType: "all-page-types",
      granularity: "daily",
      start: "start_example",
      end: "end_example",
    }
  );

console.log(getAbsoluteAggregateByProjectAndDateRangeResponse);
```

## Reference<a id="reference"></a>


### `wikimedia.bytesDifferenceData.getAbsoluteAggregateByProjectAndDateRange`<a id="wikimediabytesdifferencedatagetabsoluteaggregatebyprojectanddaterange"></a>

Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
name-bot, user) and page-type (all-page-types, content, non-content). You can choose
between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAbsoluteAggregateByProjectAndDateRangeResponse =
  await wikimedia.bytesDifferenceData.getAbsoluteAggregateByProjectAndDateRange(
    {
      project: "project_example",
      editorType: "all-editor-types",
      pageType: "all-page-types",
      granularity: "daily",
      start: "start_example",
      end: "end_example",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you\'re interested in the aggregation of all projects, use all-projects. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

Time unit for the response data. As of today, supported values are daily and monthly 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/bytes-difference/absolute/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.bytesDifferenceData.getAbsolutePerPage`<a id="wikimediabytesdifferencedatagetabsoluteperpage"></a>

Given a Mediawiki project, a page-title prefixed with canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
group-bot, name-bot, user). You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAbsolutePerPageResponse =
  await wikimedia.bytesDifferenceData.getAbsolutePerPage({
    project: "project_example",
    pageTitle: "pageTitle_example",
    editorType: "all-editor-types",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### pageTitle: `string`<a id="pagetitle-string"></a>

The page-title to request absolute bytes-difference for. Should be prefixed with the page canonical namespace. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

Time unit for the response data. As of today, supported values are daily and monthly 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/bytes-difference/absolute/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.bytesDifferenceData.getNetAggregateByProjectAndDateRange`<a id="wikimediabytesdifferencedatagetnetaggregatebyprojectanddaterange"></a>

Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
user) and page-type (all-page-types, content or non-content). You can choose between
daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNetAggregateByProjectAndDateRangeResponse =
  await wikimedia.bytesDifferenceData.getNetAggregateByProjectAndDateRange({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you\'re interested in the aggregation of all projects, use all-projects. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

Time unit for the response data. As of today, supported values are daily and monthly 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/bytes-difference/net/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.bytesDifferenceData.getSumNetTextBytesDifferencePerPage`<a id="wikimediabytesdifferencedatagetsumnettextbytesdifferenceperpage"></a>

Given a Mediawiki project, a page-title prefixed with canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
difference net sums. You can filter by editors-type (all-editor-types, anonymous,
group-bot, name-bot, user). You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSumNetTextBytesDifferencePerPageResponse =
  await wikimedia.bytesDifferenceData.getSumNetTextBytesDifferencePerPage({
    project: "project_example",
    pageTitle: "pageTitle_example",
    editorType: "all-editor-types",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### pageTitle: `string`<a id="pagetitle-string"></a>

The page-title to request net bytes-difference for. Should be prefixed with the page canonical namespace. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

Time unit for the response data. As of today, supported values are daily and monthly 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/bytes-difference/net/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editedPagesData.getAggregateByProjectAndDateRange`<a id="wikimediaeditedpagesdatagetaggregatebyprojectanddaterange"></a>

Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAggregateByProjectAndDateRangeResponse =
  await wikimedia.editedPagesData.getAggregateByProjectAndDateRange({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    activityLevel: "all-activity-levels",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edited-pages in content namespaces) or non-content (edited-pages in non-content namespaces). If you are interested in edited-pages regardless of their page-type, use all-page-types. 

##### activityLevel: `'all-activity-levels' | '1..4-edits' | '5..24-edits' | '25..99-edits' | '100..-edits'`<a id="activitylevel-all-activity-levels--14-edits--524-edits--2599-edits--100-edits"></a>

If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits, 25..99-edits or 100..-edits. If you are interested in edited-pages regardless of their activity level, use all-activity-levels. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, supported values are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edited-pages/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editedPagesData.getNewPagesCountsForProject`<a id="wikimediaeditedpagesdatagetnewpagescountsforproject"></a>

Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
or page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNewPagesCountsForProjectResponse =
  await wikimedia.editedPagesData.getNewPagesCountsForProject({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you\'re interested in the aggregation of all projects, use all-projects. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (new pages in content namespaces) or non-content (new pages in non-content namespaces). If you are interested in new-articles regardless of their page-type, use all-page-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, supported values are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edited-pages/new/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editedPagesData.getTopByAbsoluteBytesDifference`<a id="wikimediaeditedpagesdatagettopbyabsolutebytesdifference"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopByAbsoluteBytesDifferenceResponse =
  await wikimedia.editedPagesData.getTopByAbsoluteBytesDifference({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top edited-pages, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edited-pages/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editedPagesData.getTopByEditsCount`<a id="wikimediaeditedpagesdatagettopbyeditscount"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top
100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopByEditsCountResponse =
  await wikimedia.editedPagesData.getTopByEditsCount({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top edited-pages, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edited-pages/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editedPagesData.getTopByNetBytesDifference`<a id="wikimediaeditedpagesdatagettopbynetbytesdifference"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopByNetBytesDifferenceResponse =
  await wikimedia.editedPagesData.getTopByNetBytesDifference({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top edited-pages, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edited-pages/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editorsData.getEditorsCountsForProject`<a id="wikimediaeditorsdatageteditorscountsforproject"></a>

Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEditorsCountsForProjectResponse =
  await wikimedia.editorsData.getEditorsCountsForProject({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    activityLevel: "all-activity-levels",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits made in content namespaces) or non-content (edits made in non-content namespaces). If you are interested in editors regardless of their page-type, use all-page-types. 

##### activityLevel: `'all-activity-levels' | '1..4-edits' | '5..24-edits' | '25..99-edits' | '100..-edits'`<a id="activitylevel-all-activity-levels--14-edits--524-edits--2599-edits--100-edits"></a>

If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits, 25..99-edits or 100..-edits. If you are interested in editors regardless of their activity-level, use all-activity-levels. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, supported values are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/editors/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editorsData.getTopByAbsoluteBytesDifference`<a id="wikimediaeditorsdatagettopbyabsolutebytesdifference"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
The user_text returned is either the mediawiki user_text if the user is registered, or
null if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopByAbsoluteBytesDifferenceResponse =
  await wikimedia.editorsData.getTopByAbsoluteBytesDifference({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top editors, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/editors/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editorsData.getTopByNetBytesDifference`<a id="wikimediaeditorsdatagettopbynetbytesdifference"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
user_text returned is either the mediawiki user_text if the user is registered, or
"Anonymous Editor" if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopByNetBytesDifferenceResponse =
  await wikimedia.editorsData.getTopByNetBytesDifference({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top editors, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/editors/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editorsData.getTopEditorsByEditsCount`<a id="wikimediaeditorsdatagettopeditorsbyeditscount"></a>

Given a Mediawiki project and a date (day or month), returns a timeseries of the top
100 editors by edits count. You can filter by editor-type (all-editor-types,
anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
non-content). The user_text returned is either the mediawiki user_text if the user is
registered, or null if user is anonymous.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopEditorsByEditsCountResponse =
  await wikimedia.editorsData.getTopEditorsByEditsCount({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top editors, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/editors/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editsData.getEditsCountsForProject`<a id="wikimediaeditsdatageteditscountsforproject"></a>

Given a Mediawiki project and a date range, returns a timeseries of edits counts.
You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
page-type (all-page-types, content or non-content). You can choose between daily and
monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEditsCountsForProjectResponse =
  await wikimedia.editsData.getEditsCountsForProject({
    project: "project_example",
    editorType: "all-editor-types",
    pageType: "all-page-types",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you\'re interested in the aggregation of all projects, use all-projects. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### pageType: `'all-page-types' | 'content' | 'non-content'`<a id="pagetype-all-page-types--content--non-content"></a>

If you want to filter by page-type, use one of content (edits on pages in content namespaces) or non-content (edits on pages in non-content namespaces). If you are interested in edits regardless of their page-type, use all-page-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, supported values are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edits/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.editsData.getPageEditCounts`<a id="wikimediaeditsdatagetpageeditcounts"></a>

Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
You can choose between daily and monthly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPageEditCountsResponse = await wikimedia.editsData.getPageEditCounts({
  project: "project_example",
  pageTitle: "pageTitle_example",
  editorType: "all-editor-types",
  granularity: "daily",
  start: "start_example",
  end: "end_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. 

##### pageTitle: `string`<a id="pagetitle-string"></a>

The page-title to request edits for. It should be prefixed with canonical namespace. Spaces will be converted to underscores. 

##### editorType: `'all-editor-types' | 'anonymous' | 'group-bot' | 'name-bot' | 'user'`<a id="editortype-all-editor-types--anonymous--group-bot--name-bot--user"></a>

If you want to filter by editor-type, use one of anonymous, group-bot (registered accounts belonging to the bot group), name-bot (registered accounts not belonging to the bot group but having bot-like names) or user (registered account not in bot group nor having bot-like name). If you are interested in edits regardless of their editor-type, use all-editor-types. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

Time unit for the response data. As of today, supported values are daily and monthly 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/edits/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.feedContentAvailability.getByWikiDomain`<a id="wikimediafeedcontentavailabilitygetbywikidomain"></a>

Gets availability of featured feed content for the apps by wiki domain.

Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByWikiDomainResponse =
  await wikimedia.feedContentAvailability.getByWikiDomain();
```

#### 🔄 Return<a id="🔄-return"></a>

[Availability](./models/availability.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/feed/availability` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.legacyData.getPagecountsAggregateByProjectAndDateRange`<a id="wikimedialegacydatagetpagecountsaggregatebyprojectanddaterange"></a>

Given a project and a date range, returns a timeseries of pagecounts.
You can filter by access site (mobile or desktop) and you can choose between monthly,
daily and hourly granularity as well.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPagecountsAggregateByProjectAndDateRangeResponse =
  await wikimedia.legacyData.getPagecountsAggregateByProjectAndDateRange({
    project: "project_example",
    accessSite: "all-sites",
    granularity: "hourly",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off. For projects like commons without language codes, use commons.wikimedia. 

##### accessSite: `'all-sites' | 'desktop-site' | 'mobile-site'`<a id="accesssite-all-sites--desktop-site--mobile-site"></a>

If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.

##### granularity: `'hourly' | 'daily' | 'monthly'`<a id="granularity-hourly--daily--monthly"></a>

The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily and monthly. 

##### start: `string`<a id="start-string"></a>

The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.

##### end: `string`<a id="end-string"></a>

The timestamp of the last hour/day/month to include, in YYYYMMDDHH format. In hourly and daily granularities this value is inclusive, in the monthly granularity this value is exclusive. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/legacy/pagecounts/aggregate/{project}/{access-site}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.math.checkFormula`<a id="wikimediamathcheckformula"></a>

Checks the supplied TeX formula for correctness and returns the
normalised formula representation as well as information about
identifiers. Available types are tex and inline-tex. The response
contains the `x-resource-location` header which can be used to retrieve
the render of the checked formula in one of the supported rendering
formats. Just append the value of the header to `/media/math/{format}/`
and perform a GET request against that URL.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkFormulaResponse = await wikimedia.math.checkFormula({
  type: "tex",
  q: "q_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'tex' | 'inline-tex' | 'chem'`<a id="type-tex--inline-tex--chem"></a>

The input type of the given formula; can be tex or inline-tex

##### q: `string`<a id="q-string"></a>

The formula to check

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media/math/check/{type}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.math.getFormulaByHash`<a id="wikimediamathgetformulabyhash"></a>

Returns the previously-stored formula via `/media/math/check/{type}` for
the given hash.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFormulaByHashResponse = await wikimedia.math.getFormulaByHash({
  hash: "hash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hash: `string`<a id="hash-string"></a>

The hash string of the previous POST data

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media/math/formula/{hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.math.renderFormulaByHash`<a id="wikimediamathrenderformulabyhash"></a>

Given a request hash, renders a TeX formula into its mathematic
representation in the given format. When a request is issued to the
`/media/math/check/{format}` POST endpoint, the response contains the
`x-resource-location` header denoting the hash ID of the POST data. Once
obtained, this endpoint has to be used to obtain the actual render.

Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renderFormulaByHashResponse = await wikimedia.math.renderFormulaByHash({
  format: "svg",
  hash: "hash_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### format: `'svg' | 'mml' | 'png'`<a id="format-svg--mml--png"></a>

The output format; can be svg or mml

##### hash: `string`<a id="hash-string"></a>

The hash string of the previous POST data

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/media/math/render/{format}/{hash}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.pageviewsData.getPageviewCountsByArticleDateRange`<a id="wikimediapageviewsdatagetpageviewcountsbyarticledaterange"></a>

Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
counts. You can also filter by access method and/or agent type.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPageviewCountsByArticleDateRangeResponse =
  await wikimedia.pageviewsData.getPageviewCountsByArticleDateRange({
    project: "project_example",
    access: "all-access",
    agent: "all-agents",
    article: "article_example",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

If you want to filter by project, use the domain of any Wikimedia project, for example \'en.wikipedia.org\', \'www.mediawiki.org\' or \'commons.wikimedia.org\'. 

##### access: `'all-access' | 'desktop' | 'mobile-app' | 'mobile-web'`<a id="access-all-access--desktop--mobile-app--mobile-web"></a>

If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 

##### agent: `'all-agents' | 'user' | 'spider' | 'bot'`<a id="agent-all-agents--user--spider--bot"></a>

If you want to filter by agent type, use one of user, bot or spider. If you are interested in pageviews regardless of agent type, use all-agents. 

##### article: `string`<a id="article-string"></a>

\'The title of any article in the specified project. Any spaces should be replaced with underscores. It also should be URI-encoded, so that non-URI-safe characters like %, / or ? are accepted. Example: Are_You_the_One%3F\'. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, the only supported granularity for this endpoint is daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.pageviewsData.getPageviewCountsByProject`<a id="wikimediapageviewsdatagetpageviewcountsbyproject"></a>

Given a date range, returns a timeseries of pageview counts. You can filter by project,
access method and/or agent type. You can choose between daily and hourly granularity
as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPageviewCountsByProjectResponse =
  await wikimedia.pageviewsData.getPageviewCountsByProject({
    project: "project_example",
    access: "all-access",
    agent: "all-agents",
    granularity: "hourly",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

If you want to filter by project, use the domain of any Wikimedia project, for example \'en.wikipedia.org\', \'www.mediawiki.org\' or \'commons.wikimedia.org\'. If you are interested in all pageviews regardless of project, use all-projects. 

##### access: `'all-access' | 'desktop' | 'mobile-app' | 'mobile-web'`<a id="access-all-access--desktop--mobile-app--mobile-web"></a>

If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 

##### agent: `'all-agents' | 'user' | 'spider'`<a id="agent-all-agents--user--spider"></a>

If you want to filter by agent type, use one of user or spider. If you are interested in pageviews regardless of agent type, use all-agents. 

##### granularity: `'hourly' | 'daily' | 'monthly'`<a id="granularity-hourly--daily--monthly"></a>

The time unit for the response data. As of today, the supported granularities for this endpoint are hourly, daily, and monthly. 

##### start: `string`<a id="start-string"></a>

The timestamp of the first hour/day/month to include, in YYYYMMDDHH format

##### end: `string`<a id="end-string"></a>

The timestamp of the last hour/day/month to include, in YYYYMMDDHH format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/pageviews/aggregate/{project}/{access}/{agent}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.pageviewsData.listByCountryAndAccess`<a id="wikimediapageviewsdatalistbycountryandaccess"></a>

Lists the pageviews to this project, split by country of origin for a given month.
Because of privacy reasons, pageviews are given in a bucketed format, and countries
with less than 100 views do not get reported.
Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByCountryAndAccessResponse =
  await wikimedia.pageviewsData.listByCountryAndAccess({
    project: "project_example",
    access: "all-access",
    year: "year_example",
    month: "month_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

If you want to filter by project, use the domain of any Wikimedia project, for example \'en.wikipedia.org\', \'www.mediawiki.org\' or \'commons.wikimedia.org\'. 

##### access: `'all-access' | 'desktop' | 'mobile-app' | 'mobile-web'`<a id="access-all-access--desktop--mobile-app--mobile-web"></a>

If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top countries, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top countries, in MM format. 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/pageviews/top-by-country/{project}/{access}/{year}/{month}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.pageviewsData.listMostViewedArticlesByProjectAndTimespan`<a id="wikimediapageviewsdatalistmostviewedarticlesbyprojectandtimespan"></a>

Lists the 1000 most viewed articles for a given project and timespan (month or day).
You can filter by access method.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMostViewedArticlesByProjectAndTimespanResponse =
  await wikimedia.pageviewsData.listMostViewedArticlesByProjectAndTimespan({
    project: "project_example",
    access: "all-access",
    year: "year_example",
    month: "month_example",
    day: "day_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

If you want to filter by project, use the domain of any Wikimedia project, for example \'en.wikipedia.org\', \'www.mediawiki.org\' or \'commons.wikimedia.org\'. 

##### access: `'all-access' | 'desktop' | 'mobile-app' | 'mobile-web'`<a id="access-all-access--desktop--mobile-app--mobile-web"></a>

If you want to filter by access method, use one of desktop, mobile-app or mobile-web. If you are interested in pageviews regardless of access method, use all-access. 

##### year: `string`<a id="year-string"></a>

The year of the date for which to retrieve top articles, in YYYY format.

##### month: `string`<a id="month-string"></a>

The month of the date for which to retrieve top articles, in MM format. If you want to get the top articles of a whole month, the day parameter should be all-days. 

##### day: `string`<a id="day-string"></a>

The day of the date for which to retrieve top articles, in DD format.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/pageviews/top/{project}/{access}/{year}/{month}/{day}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.registeredUsersData.getNewUserCountsByProjectAndDateRange`<a id="wikimediaregisteredusersdatagetnewusercountsbyprojectanddaterange"></a>

Given a Mediawiki project and a date range, returns a timeseries of its newly registered
users counts. You can choose between daily and monthly granularity. The newly registered
users value is computed with self-created users only, not auto-login created ones.

- Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
- Rate limit: 25 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNewUserCountsByProjectAndDateRangeResponse =
  await wikimedia.registeredUsersData.getNewUserCountsByProjectAndDateRange({
    project: "project_example",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

The name of any Wikimedia project formatted like {language code}.{project name}, for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped off.  For projects like commons without language codes, use commons.wikimedia. For projects like www.mediawiki.org, you can use that full string, or just use mediawiki or mediawiki.org. If you\'re interested in the aggregation of all projects, use all. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, supported values are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The date of the first day to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The date of the last day to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/registered-users/new/{project}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.contentMachineTranslate`<a id="wikimediatransformcontentmachinetranslate"></a>

Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contentMachineTranslateResponse =
  await wikimedia.transform.contentMachineTranslate({
    fromLang: "fromLang_example",
    toLang: "toLang_example",
    html: "html_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### html: `string`<a id="html-string"></a>

The HTML content to translate

##### fromLang: `string`<a id="fromlang-string"></a>

The source language code

##### toLang: `string`<a id="tolang-string"></a>

The target language code

#### 🔄 Return<a id="🔄-return"></a>

[CxMt](./models/cx-mt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/html/from/{from_lang}/to/{to_lang}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.contentMachineTranslate_0`<a id="wikimediatransformcontentmachinetranslate_0"></a>

Fetches the machine translation for the posted content from the source
to the destination language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const contentMachineTranslate_0Response =
  await wikimedia.transform.contentMachineTranslate_0({
    fromLang: "fromLang_example",
    toLang: "toLang_example",
    provider: "Apertium",
    html: "html_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### html: `string`<a id="html-string"></a>

The HTML content to translate

##### fromLang: `string`<a id="fromlang-string"></a>

The source language code

##### toLang: `string`<a id="tolang-string"></a>

The target language code

##### provider: `'Apertium' | 'Yandex' | 'Youdao'`<a id="provider-apertium--yandex--youdao"></a>

The machine translation provider id

#### 🔄 Return<a id="🔄-return"></a>

[CxMt](./models/cx-mt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/html/from/{from_lang}/to/{to_lang}/{provider}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.getDictionaryMeaning`<a id="wikimediatransformgetdictionarymeaning"></a>

Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDictionaryMeaningResponse =
  await wikimedia.transform.getDictionaryMeaning({
    fromLang: "fromLang_example",
    toLang: "toLang_example",
    word: "word_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fromLang: `string`<a id="fromlang-string"></a>

The source language code

##### toLang: `string`<a id="tolang-string"></a>

The target language code

##### word: `string`<a id="word-string"></a>

The word to lookup

#### 🔄 Return<a id="🔄-return"></a>

[CxDict](./models/cx-dict.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/word/from/{from_lang}/to/{to_lang}/{word}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.getDictionaryMeaning_0`<a id="wikimediatransformgetdictionarymeaning_0"></a>

Fetches the dictionary meaning of a word from a language and displays
it in the target language.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDictionaryMeaning_0Response =
  await wikimedia.transform.getDictionaryMeaning_0({
    fromLang: "fromLang_example",
    toLang: "toLang_example",
    word: "word_example",
    provider: "JsonDict",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fromLang: `string`<a id="fromlang-string"></a>

The source language code

##### toLang: `string`<a id="tolang-string"></a>

The target language code

##### word: `string`<a id="word-string"></a>

The word to lookup

##### provider: `'JsonDict' | 'Dictd'`<a id="provider-jsondict--dictd"></a>

The dictionary provider id

#### 🔄 Return<a id="🔄-return"></a>

[CxDict](./models/cx-dict.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/word/from/{from_lang}/to/{to_lang}/{word}/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.getListToolLanguagePairs`<a id="wikimediatransformgetlisttoollanguagepairs"></a>

Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListToolLanguagePairsResponse =
  await wikimedia.transform.getListToolLanguagePairs({
    tool: "mt",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tool: `'mt' | 'dictionary'`<a id="tool-mt--dictionary"></a>

The tool category to list tools and language pairs for

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/list/tool/{tool}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.languagePairList`<a id="wikimediatransformlanguagepairlist"></a>

Fetches the list of tools that are available for the given pair of languages.

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const languagePairListResponse = await wikimedia.transform.languagePairList({
  from: "from_example",
  to: "to_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### from: `string`<a id="from-string"></a>

The source language code

##### to: `string`<a id="to-string"></a>

The target language code

#### 🔄 Return<a id="🔄-return"></a>

[CxListTools](./models/cx-list-tools.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/list/pair/{from}/{to}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.listLanguagePairs`<a id="wikimediatransformlistlanguagepairs"></a>

Fetches the list of language pairs the back-end service can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLanguagePairsResponse = await wikimedia.transform.listLanguagePairs();
```

#### 🔄 Return<a id="🔄-return"></a>

[CxLanguagepairs](./models/cx-languagepairs.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/list/languagepairs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.toolLanguagePairsList`<a id="wikimediatransformtoollanguagepairslist"></a>

Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toolLanguagePairsListResponse =
  await wikimedia.transform.toolLanguagePairsList({
    tool: "mt",
    from: "from_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tool: `'mt' | 'dictionary'`<a id="tool-mt--dictionary"></a>

The tool category to list tools and language pairs for

##### from: `string`<a id="from-string"></a>

The source language code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/list/tool/{tool}/{from}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.transform.toolLanguagePairsList_0`<a id="wikimediatransformtoollanguagepairslist_0"></a>

Fetches the list of tools and all of the language pairs it can translate

Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toolLanguagePairsList_0Response =
  await wikimedia.transform.toolLanguagePairsList_0({
    tool: "mt",
    from: "from_example",
    to: "to_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tool: `'mt' | 'dictionary'`<a id="tool-mt--dictionary"></a>

The tool category to list tools and language pairs for

##### from: `string`<a id="from-string"></a>

The source language code

##### to: `string`<a id="to-string"></a>

The target language code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/transform/list/tool/{tool}/{from}/{to}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `wikimedia.uniqueDevicesData.getByProjectAndDateRange`<a id="wikimediauniquedevicesdatagetbyprojectanddaterange"></a>

Given a project and a date range, returns a timeseries of unique devices counts.
You need to specify a project, and can filter by accessed site (mobile or desktop).
You can choose between daily and hourly granularity as well.

- Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
- Rate limit: 100 req/s
- License: Data accessible via this endpoint is available under the
  [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProjectAndDateRangeResponse =
  await wikimedia.uniqueDevicesData.getByProjectAndDateRange({
    project: "project_example",
    accessSite: "all-sites",
    granularity: "daily",
    start: "start_example",
    end: "end_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### project: `string`<a id="project-string"></a>

If you want to filter by project, use the domain of any Wikimedia project, for example \'en.wikipedia.org\', \'www.mediawiki.org\' or \'commons.wikimedia.org\'. 

##### accessSite: `'all-sites' | 'desktop-site' | 'mobile-site'`<a id="accesssite-all-sites--desktop-site--mobile-site"></a>

If you want to filter by accessed site, use one of desktop-site or mobile-site. If you are interested in unique devices regardless of accessed site, use or all-sites. 

##### granularity: `'daily' | 'monthly'`<a id="granularity-daily--monthly"></a>

The time unit for the response data. As of today, the supported granularities for this endpoint are daily and monthly. 

##### start: `string`<a id="start-string"></a>

The timestamp of the first day/month to include, in YYYYMMDD format

##### end: `string`<a id="end-string"></a>

The timestamp of the last day/month to include, in YYYYMMDD format

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/metrics/unique-devices/{project}/{access-site}/{granularity}/{start}/{end}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
