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

import * as common from './common';

export type Int64 = string | number;

export enum BenefitTypeInfoItemStatus {
  /** 未知 */
  Unknown = 0,
  Active = 1,
  Expired = 2,
  Frozen = 3,
  Refunded = 4,
  /** 取消 */
  Cancel = 5,
  /** 待生效（此枚举通过计算得出，数据库中并无此项数据） */
  Pending = 6,
}

export interface BenefitTypeInfoItem {
  item_id?: string;
  item_info?: CommonCounter;
  status?: BenefitTypeInfoItemStatus;
  benefit_id?: string;
}

/** 不复用 common 结构体，因为需要删除 api.body，agw 才能从 request 中提取信息，删除旧结构体的 tag 担心影响现有逻辑 */
export interface CommonCounter {
  /** 当 Strategy == ByQuota 时, 表示已使用量, 若权益无相关用量数据则返回 0 */
  used?: number;
  /** 当 Strategy == ByQuota 时, 表示用量上限 */
  total?: number;
  /** 3: ResourceUsageStrategy Strategy (agw.key = "strategy", go.tag = "json:\"strategy\""), // 资源使用策略
开始时间，单位秒 */
  start_at?: Int64;
  /** 结束时间，单位秒 */
  end_at?: Int64;
}

export interface CreateUserExtraBenefitResult {
  benefit_id?: string;
}

export interface PublicCreateUserExtraBenefitRequest {
  extra_benefit?: UserExtraBenefit;
  enterprise_id?: string;
}

export interface PublicCreateUserExtraBenefitResponse {
  code?: number;
  message?: string;
  data?: CreateUserExtraBenefitResult;
}

export interface PublicDisableUserExtraBenefitRequest {
  benefit_id?: string;
  enterprise_id?: string;
}

export interface PublicDisableUserExtraBenefitResponse {
  code?: number;
  message?: string;
}

export interface PublicGetUserBenefitRequest {
  benefit_types?: Array<common.BenefitType>;
  with_extra_only?: boolean;
  resource_id?: string;
  enterprise_id?: string;
  account_type?: common.CozeAccountType;
}

export interface PublicGetUserBenefitResponse {
  code?: number;
  message?: string;
  data?: UserBenefitData;
}

export interface UserBenefitData {
  user_benefit_infos?: Array<UserBenefitInfo>;
}

export interface UserBenefitInfo {
  name?: string;
  icon_url?: string;
  resource_id?: string;
  benefit_type?: common.BenefitType;
  basic?: BenefitTypeInfoItem;
  extra?: Array<BenefitTypeInfoItem>;
  max_extra_qps?: number;
  price?: number;
  desc?: string;
  unit?: string;
}

export interface UserExtraBenefit {
  benefit_type?: common.BenefitType;
  resource_id?: string;
  item_info?: CommonCounter;
}
/* eslint-enable */
