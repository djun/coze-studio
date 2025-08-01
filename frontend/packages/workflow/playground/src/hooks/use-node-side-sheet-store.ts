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

import { createContext, useContext, type ReactNode } from 'react';

import { create } from 'zustand';

interface NodeSideSheetStore {
  leftPanelVisible?: boolean;
  leftPanelWidth?: number;
  leftPanelContent?: ReactNode;
  leftPanelContentId?: string;
  openLeftPanel: (options: { content: ReactNode; contentId?: string }) => void;
  updateLeftPanel: (options: { content: ReactNode }) => void;
  closeLeftPanel: () => void;
  rightPanelVisible?: boolean;
  rightPanelWidth: number;
  rightPanelContent?: ReactNode;
  openRightPanel: (options: { content: ReactNode }) => void;
  closeRightPanel: () => void;
  isNodeSideSheetVisible: boolean;
  openNodeSideSheet: (options?: { width?: number }) => void;
  mainPanelWidth?: number;
  setMainPanelWidth: (width: number) => void;
  closeNodeSideSheet: () => void;
  closeAllExtraSheets: () => void;
}

export const useNodeSideSheetStore = create<NodeSideSheetStore>(set => ({
  isNodeSideSheetVisible: false,
  leftPanelVisible: false,
  mainPanelWidth: 360,
  setMainPanelWidth: width => set({ mainPanelWidth: width }),
  openNodeSideSheet: options =>
    set(state => ({
      isNodeSideSheetVisible: true,
      width: options?.width || state.mainPanelWidth,
    })),
  closeNodeSideSheet: () => {
    set({
      isNodeSideSheetVisible: false,
      leftPanelVisible: false,
      leftPanelContent: undefined,
      rightPanelVisible: false,
      rightPanelContent: undefined,
    });
  },
  openLeftPanel: options =>
    set({
      leftPanelVisible: true,
      leftPanelContent: options.content,
      leftPanelContentId: options.contentId,
    }),

  updateLeftPanel: options =>
    set({
      leftPanelContent: options.content,
    }),

  closeLeftPanel: () =>
    set({
      leftPanelVisible: false,
      leftPanelContent: undefined,
      leftPanelContentId: '',
    }),
  rightPanelWidth: 360,
  openRightPanel: options =>
    set({
      rightPanelVisible: true,
      rightPanelContent: options.content,
    }),
  closeRightPanel: () =>
    set({
      rightPanelVisible: false,
      rightPanelContent: undefined,
    }),
  closeAllExtraSheets: () => {
    set({
      leftPanelVisible: false,
      leftPanelContent: undefined,
      rightPanelVisible: false,
      rightPanelContent: undefined,
    });
  },
}));

interface NodeFormPanelState {
  fullscreenPanel: React.ReactNode;
  setFullscreenPanel: (next: React.ReactNode) => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const NodeFormPanelContext = createContext(
  {} as unknown as NodeFormPanelState,
);

export const useNodeFormPanelState = () => useContext(NodeFormPanelContext);
