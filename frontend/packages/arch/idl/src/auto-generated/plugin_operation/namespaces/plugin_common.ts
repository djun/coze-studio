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

export type Int64 = string;

export enum ConnectorID {
  Coze = 10000010,
  Feishu = 10000011,
  Discord = 10000028,
  BotStore = 10000122,
}

/** 上下架类型 */
export enum ListUnlistType {
  List = 0,
  Unlist = 1,
}

/** 操作类型 */
export enum OperateType {
  Add = 0,
  Delete = 1,
}

/** 排序方式 */
export enum OrderBy {
  CreateTime = 0,
  UpdateTime = 1,
  PublishTime = 2,
  Hot = 3,
}

/** plugin channel id */
export enum PluginChannel {
  /** 所有渠道 */
  All = 0,
  /** 素材 */
  Material = 1,
  /** 商店 */
  Store = 2,
}

/** 插件发布状态 */
export enum PluginPublishStatus {
  /** 未发布 */
  UnPublished = 1,
  /** 有更新，待发布 */
  PendingPublished = 2,
  /** 已发布，无更新 */
  Published = 3,
}

/** 插件状态 */
export enum PluginStatus {
  /** 默认值 */
  Draft = 0,
  Submitted = 1,
  /** 未使用 */
  Reviewing = 2,
  /** 未使用 */
  Prepared = 3,
  /** 上架 */
  Published = 4,
  /** 下架 */
  Offline = 5,
  /** 运营封禁 */
  Banned = 6,
}

/** 插件类型 */
export enum PluginType {
  Plugin = 1,
  App = 2,
  Func = 3,
  Workflow = 4,
}

/** plugin商品（channel_id = 2）审核状态 */
export enum ProductDraftStatus {
  Default = 0,
  /** 审核中 */
  Pending = 1,
  /** 审核通过 */
  Approved = 2,
  /** 审核不通过 */
  Rejected = 3,
  /** 审核已废弃 */
  Abandoned = 4,
}

/** plugin商品（channel_id = 2）上下架状态 */
export enum ProductStatus {
  NeverListed = 0,
  Listed = 1,
  Unlisted = 2,
  Banned = 3,
}

export enum Publish {
  NoPublish = 0,
  HadPublished = 1,
}

export enum VisibilityType {
  /** 不可见 */
  Invisible = 0,
  /** 可见 */
  Visible = 1,
}
/* eslint-enable */
