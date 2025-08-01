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

import * as base from './namespaces/base';
import * as crawl from './namespaces/crawl';
import * as custom_package from './namespaces/custom_package';
import * as permission from './namespaces/permission';
import * as resource_common from './namespaces/resource_common';
import * as starry from './namespaces/starry';
import * as task_common from './namespaces/task_common';
import * as uibuilder from './namespaces/uibuilder';

export {
  base,
  crawl,
  custom_package,
  permission,
  resource_common,
  starry,
  task_common,
  uibuilder,
};
export * from './namespaces/base';
export * from './namespaces/crawl';
export * from './namespaces/custom_package';
export * from './namespaces/permission';
export * from './namespaces/resource_common';
export * from './namespaces/starry';
export * from './namespaces/task_common';
export * from './namespaces/uibuilder';

export type Int64 = string | number;

export default class UiBuilderService<T> {
  private request: any = () => {
    throw new Error('UiBuilderService.request is undefined');
  };
  private baseURL: string | ((path: string) => string) = '';

  constructor(options?: {
    baseURL?: string | ((path: string) => string);
    request?<R>(
      params: {
        url: string;
        method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
        data?: any;
        params?: any;
        headers?: any;
      },
      options?: T,
    ): Promise<R>;
  }) {
    this.request = options?.request || this.request;
    this.baseURL = options?.baseURL || '';
  }

  private genBaseURL(path: string) {
    return typeof this.baseURL === 'string'
      ? this.baseURL + path
      : this.baseURL(path);
  }

  /**
   * POST /api/ui_builder/v1/starry/sandbox/update
   *
   * Starry UpdateSandbox
   */
  StarryUpdateSandbox(
    req?: uibuilder.StarryUpdateSandboxRequest,
    options?: T,
  ): Promise<uibuilder.StarryUpdateSandboxResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/starry/sandbox/update');
    const method = 'POST';
    const data = {
      sandbox_id: _req['sandbox_id'],
      crdt_history: _req['crdt_history'],
      action: _req['action'],
      Base: _req['Base'],
    };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/upload_file
   *
   * 内部 上传 UI 相关资源
   */
  UploadFile(
    req?: uibuilder.UploadFileRequest,
    options?: T,
  ): Promise<uibuilder.UploadFileResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/upload_file');
    const method = 'POST';
    const data = {
      file_type: _req['file_type'],
      FileName: _req['FileName'],
      data: _req['data'],
      scene: _req['scene'],
      base: _req['base'],
    };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
      'Content-Type': _req['Content-Type'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/starry/sandbox/get
   *
   * 星夜代理接口
   *
   * Starry GetSandbox
   */
  StarryGetSandbox(
    req?: uibuilder.StarryGetSandboxRequest,
    options?: T,
  ): Promise<uibuilder.StarryGetSandboxResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/starry/sandbox/get');
    const method = 'POST';
    const data = {
      sandbox_id: _req['sandbox_id'],
      with_app: _req['with_app'],
      is_preview: _req['is_preview'],
      Base: _req['Base'],
    };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/create
   *
   * UI 相关
   *
   * 创建 UI
   */
  CreateUI(
    req?: uibuilder.CreateUIRequest,
    options?: T,
  ): Promise<uibuilder.CreateUIResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/create');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      ui_id: _req['ui_id'],
      ui_name: _req['ui_name'],
      channel: _req['channel'],
      Base: _req['Base'],
    };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/get
   *
   * 获取 UI 详情
   */
  GetUI(
    req?: uibuilder.GetUIRequest,
    options?: T,
  ): Promise<uibuilder.GetUIResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/get');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      ui_id: _req['ui_id'],
      starry_app_id: _req['starry_app_id'],
      Base: _req['Base'],
    };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/publish/dsl/get
   *
   * 外部用户接口，可能不需要鉴权
   *
   * 获取 DSL
   */
  GetUIDSLForWeb(
    req: uibuilder.GetUIDSLRequest,
    options?: T,
  ): Promise<uibuilder.GetUIDSLResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/publish/dsl/get');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      version_code: _req['version_code'],
      channel: _req['channel'],
      with_ext_pages: _req['with_ext_pages'],
      IsAudit: _req['IsAudit'],
      connector_id: _req['connector_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/internal/publish/dsl/get
   *
   * 内部接口，不对外开放
   *
   * 内网获取 DSL，不对外解析
   */
  GetUIDSLInternal(
    req: uibuilder.GetUIDSLRequest,
    options?: T,
  ): Promise<uibuilder.GetUIDSLResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/internal/publish/dsl/get');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      version_code: _req['version_code'],
      channel: _req['channel'],
      with_ext_pages: _req['with_ext_pages'],
      IsAudit: _req['IsAudit'],
      connector_id: _req['connector_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/component/delete
   *
   * 删除组件包
   */
  DeleteCustomComponent(
    req: uibuilder.DeleteCustomComponentRequest,
    options?: T,
  ): Promise<uibuilder.DeleteCustomComponentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/component/delete');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      component_name: _req['component_name'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/component/import
   *
   * 导入 / 升级组件包
   */
  ImportCustomComponent(
    req: uibuilder.ImportCustomComponentRequest,
    options?: T,
  ): Promise<uibuilder.ImportCustomComponentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/component/import');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      component_name: _req['component_name'],
      version_name: _req['version_name'],
      space_id: _req['space_id'],
      channel_id: _req['channel_id'],
      component_id: _req['component_id'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/component/compare
   *
   * GetCustomComponentPackageResponse GetCustomComponentPackage(1: GetCustomComponentPackageRequest req)(agw.method = 'POST',   agw.uri = '/api/ui_builder/v1/component/package/list',  api.category="ui", agw.preserve_base="true")    // 获取组件包组件内容
   *
   * 比较自定义组件
   */
  CompareCustomComponent(
    req: uibuilder.CompareCustomComponentRequest,
    options?: T,
  ): Promise<uibuilder.CompareCustomComponentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/component/compare');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      project_id: _req['project_id'],
      component_name: _req['component_name'],
      old_version_name: _req['old_version_name'],
      new_version_name: _req['new_version_name'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/component/list
   *
   * 自定义组件相关
   *
   * 获取资源库组件包列表
   */
  GetCustomComponentList(
    req: uibuilder.GetCustomComponentListRequest,
    options?: T,
  ): Promise<uibuilder.GetCustomComponentListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/component/list');
    const method = 'POST';
    const data = {
      created_by: _req['created_by'],
      search: _req['search'],
      channel_id: _req['channel_id'],
      project_id: _req['project_id'],
      space_id: _req['space_id'],
      page: _req['page'],
      size: _req['size'],
      Base: _req['Base'],
    };
    const headers = { 'X-Space-Id': _req['X-Space-Id'] };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/component/imported/list
   *
   * 获取已导入的组件包列表
   */
  GetImportedComponentList(
    req: uibuilder.GetImportedComponentListRequest,
    options?: T,
  ): Promise<uibuilder.GetImportedComponentListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/component/imported/list');
    const method = 'POST';
    const data = {
      channel_id: _req['channel_id'],
      project_id: _req['project_id'],
      space_id: _req['space_id'],
      page: _req['page'],
      size: _req['size'],
      Base: _req['Base'],
    };
    const headers = { 'X-Space-Id': _req['X-Space-Id'] };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/starry/sandbox/refresh
   *
   * Starry GetSandboxRefresh
   */
  StarryGetSandboxRefresh(
    req?: uibuilder.StarryGetSandboxRefreshRequest,
    options?: T,
  ): Promise<uibuilder.StarryGetSandboxRefreshResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/ui_builder/v1/starry/sandbox/refresh');
    const method = 'POST';
    const data = { sandbox_id: _req['sandbox_id'], Base: _req['Base'] };
    const headers = {
      'X-Space-Id': _req['X-Space-Id'],
      'X-Project-Id': _req['X-Project-Id'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/ui_builder/v1/internal/dsl/refresh
   *
   * 内网刷新 DSL 图片有效期，不对外解析
   */
  RefreshUIDSLInternal(
    req: uibuilder.RefreshUIDSLInternalRequest,
    options?: T,
  ): Promise<uibuilder.RefreshUIDSLInternalResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/internal/dsl/refresh');
    const method = 'POST';
    const data = {
      dsl_content: _req['dsl_content'],
      expire_time: _req['expire_time'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/publish/snapshot
   *
   * 获取快照
   */
  CreateSnapshotForWeb(
    req: uibuilder.CreateSnapshotForWebRequest,
    options?: T,
  ): Promise<uibuilder.CreateSnapshotForWebResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/publish/snapshot');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      version_code: _req['version_code'],
      channel: _req['channel'],
      ext_json: _req['ext_json'],
      screenshot_option: _req['screenshot_option'],
      device: _req['device'],
      connector_id: _req['connector_id'],
      wait_element: _req['wait_element'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/snapshot
   *
   * 获取快照
   */
  CreateSnapshot(
    req: uibuilder.CreateSnapshotRequest,
    options?: T,
  ): Promise<uibuilder.CreateSnapshotResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/snapshot');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      version_code: _req['version_code'],
      channel: _req['channel'],
      ext_json: _req['ext_json'],
      screenshot_option: _req['screenshot_option'],
      device: _req['device'],
      connector_id: _req['connector_id'],
      wait_element: _req['wait_element'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /v1/apps/:app_id/ui_builder_snapshots
   *
   * OpenAPI
   *
   * 通过 Open API 获取快照
   */
  CreateSnapshotForOpenAPI(
    req?: uibuilder.CreateSnapshotForOpenAPIRequest,
    options?: T,
  ): Promise<uibuilder.CreateSnapshotForOpenAPIResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/apps/${_req['app_id']}/ui_builder_snapshots`,
    );
    const method = 'POST';
    const data = {
      channel: _req['channel'],
      ext_json: _req['ext_json'],
      screenshot_option: _req['screenshot_option'],
      device: _req['device'],
      connector_id: _req['connector_id'],
      wait_element: _req['wait_element'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/ui_builder/v1/snapshot/get
   *
   * 获取发布版本 Snapshot
   */
  GetPublishSnapshot(
    req: uibuilder.GetPublishSnapshotRequest,
    options?: T,
  ): Promise<uibuilder.GetPublishSnapshotResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/ui_builder/v1/snapshot/get');
    const method = 'POST';
    const data = {
      project_id: _req['project_id'],
      version_code: _req['version_code'],
      channel: _req['channel'],
      Base: _req['Base'],
    };
    return this.request({ url, method, data }, options);
  }
}
/* eslint-enable */
