import type { Message, PremChatHistory } from "modules/prem-chat/types";

export type BotReplyProps = {
  reply: string;
};

export type SidebarProps = {
  toggleStatus: boolean;
  toggle: () => void;
};

export type SpinnerProps = {
  className?: string;
};

export type UserReplyProps = {
  reply: string;
};

export type ServiceIconPorps = {
  className: string;
};

export type PipelineIconProps = {
  className: string;
};

export type SettingIconProps = {
  className: string;
};

export type CloseIconProps = {
  className: string;
};

export type NavLinkItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  target?: "_blank";
};

export type WarningModalProps = {
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onOk: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cancelButtonText?: string;
  okButtonText?: string;
  icon?: React.ReactNode;
  title?: string;
  description: string;
  isOpen: boolean;
};

export type PremChatStore = {
  history: PremChatHistory[];
  clearHistory: () => void;
  addHistory: (newHistory: PremChatHistory) => void;
  updateHistoryMessages: (id: string, messages: Message[]) => void;
  deleteHistory: (id: string) => void;
  temperature: number;
  setTemperature: (temperature: number) => void;
  max_tokens: number;
  setMaxTokens: (max_tokens: number) => void;
  top_p: number;
  setTopP: (top_p: number) => void;
  frequency_penalty: number;
  setFrequencyPenalty: (frequency_penalty: number) => void;
  n: number;
  setN: (n: number) => void;
  presence_penalty: number;
  setPresencePenalty: (presence_penalty: number) => void;
  promptTemplate: string;
  setPromptTemplate: (promptTemplate: string) => void;
};

export type MarkdownProps = {
  children: string;
};

export type SettingStore = {
  backendUrl: string;
  setBackendUrl: (backendUrl: string) => void;
  serviceDownloadsInProgress: Record<string, number>;
  setServiceDownloadProgress: (serviceId: string, percentage: number) => void;
  addServiceDownloadInProgress: (serviceId: string) => void;
  removeServiceDownloadInProgress: (serviceId: string) => void;
};

export type HeaderProps = {
  setRightSidebar: (value: boolean) => void;
  rightSidebar: boolean;
  hamburgerMenuOpen: boolean;
  setHamburgerMenu: (value: boolean) => void;
  title: string;
};

export type HamburgerMenuProps = {
  setHamburgerMenu: (value: boolean) => void;
};

export interface RightSidebarProps {
  isLoading?: boolean;
  setRightSidebar: (value: boolean) => void;
}

export type PremImageSize = "256x256" | "512x512" | "1024x1024";

export type PremImageStore = {
  history: PremImageHistory[];
  n: number;
  size: PremImageSize;
  response_format: string;
  addHistory: (newHistory: PremImageHistory) => void;
  deleteHistory: (id: string) => void;
  setN: (n: number) => void;
  seed: number;
  setSeed: (seed: number) => void;
};

export type PremImageHistory = {
  id: string;
  prompt: string;
  images: string[];
  timestamp: string;
};

export type PremAudioStore = {
  history: PremAudioHistory[];
  model: string;
  addHistory: (newHistory: PremAudioHistory) => void;
  deleteHistory: (id: string) => void;
};

export type PremAudioHistory = {
  id: string;
  file: string;
  transcriptions: string;
  timestamp: string;
};

export type PremTextAudioHistory = {
  id: string;
  file: string;
  prompt: string;
  timestamp: string;
  fileUrl: string;
};

export type PremTextAudioStore = {
  history: PremTextAudioHistory[];
  addHistory: (newHistory: PremTextAudioHistory) => void;
  deleteHistory: (id: string) => void;
};

export type PremUpscalerStore = {
  history: PremUpscalerHistory[];
  n: number;
  response_format: string;
  prompt: string;
  guidance_scale: number;
  num_inference_steps: number;

  addHistory: (newHistory: PremUpscalerHistory) => void;
  deleteHistory: (id: string) => void;

  setPrompt: (prompt: string) => void;
  setGuidanceScale: (guidance_scale: number) => void;
  setNumInferenceSteps: (num_inference_steps: number) => void;
};

export type PremUpscalerHistory = {
  id: string;
  file: string;
  name: string;
  timestamp: string;
};
