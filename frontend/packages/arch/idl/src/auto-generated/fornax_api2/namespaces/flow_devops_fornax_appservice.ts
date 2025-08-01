/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as app from './app';

export type Int64 = string | number;

export interface CheckCozeBotPermissionReq {
  botID: string;
}

export interface CheckCozeBotPermissionResp {
  hasPermission?: boolean;
}

export interface CreateAppClientReq {
  appID: string;
  env: string;
  cluster: string;
}

export interface CreateAppClientResp {
  appClientID: string;
}

export interface CreateAppReq {
  /** PSM, 空间内唯一 */
  uid: string;
  spaceID: string;
  /** 应用类型 */
  appType: app.AppType;
  /** 应用名称，默认为 PSM, 可修改 */
  name?: string;
  description?: string;
}

export interface CreateAppResp {
  appID?: string;
}

export interface CreateAppV2Req {
  spaceID: Int64;
  type: app.AppV2Type;
  entityID?: string;
  /** 应用名称，默认为 PSM, 可修改 */
  name?: string;
  description?: string;
  version?: string;
  psm?: string;
  regions?: Array<string>;
  appEvaluationInfo?: app.AppEvaluationInfo;
}

export interface CreateAppV2Resp {
  appID?: string;
}

export interface CreateCozeBotAppReq {
  spaceID: string;
  /** cozeBot ID */
  botID: string;
  /** cozeBot 描述 */
  desc?: string;
}

export interface CreateCozeBotAppResp {
  appID?: string;
}

export interface DeleteAppReq {
  appID: string;
}

export interface DeleteAppResp {}

export interface GetAppClientReq {
  clientID: string;
}

export interface GetAppClientResp {
  client?: app.AppClient;
  app?: app.App;
}

export interface GetAppV2Req {
  appID: string;
  spaceID: string;
}

export interface GetAppV2Resp {
  app?: app.AppV2;
}

export interface GetClientEvaluationSettingReq {
  appID: string;
  clientID: string;
}

export interface GetClientEvaluationSettingResp {
  setting?: app.ClientEvaluationSetting;
}

export interface ListAppClientsByAppReq {
  appID: string;
  /** 根据环境类型筛选 app_client */
  envType?: app.AppClientEnvType;
}

export interface ListAppClientsByAppResp {
  appClients?: Array<app.AppClient>;
}

export interface ListAppsBySpaceReq {
  spaceID: string;
  appID?: string;
  uid?: string;
  name?: string;
  /** 根据应用类型筛选，不传默认返回 TCE 类型的 APP */
  appType?: app.AppType;
}

export interface ListAppsBySpaceResp {
  apps?: Array<app.App>;
  total?: string;
  cozeBotAppVisible?: boolean;
}

export interface ListAppsBySpaceV2Req {
  spaceID: string;
  /** name前缀或后缀匹配 */
  keyWord?: string;
  page: Int64;
  pageSize: Int64;
}

export interface ListAppsBySpaceV2Resp {
  apps?: Array<app.AppV2>;
  total?: number;
}

export interface UpdateAppReq {
  appID: string;
  name?: string;
  description?: string;
}

export interface UpdateAppResp {}

export interface UpdateAppV2Req {
  appID: string;
  name?: string;
  description?: string;
  version?: string;
  regions?: Array<string>;
  spaceID: string;
  appEvaluationInfo?: app.AppEvaluationInfo;
}

export interface UpdateAppV2Resp {}

export interface UpsertClientEvaluationSettingReq {
  appID: string;
  clientID: string;
  setting: app.ClientEvaluationSetting;
}

export interface UpsertClientEvaluationSettingResp {}
/* eslint-enable */
