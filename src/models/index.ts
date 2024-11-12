export interface Experience {
  period: string;
  company: string;
  position: string;
  description: string;
  additional_info?: string;
}

export interface SkillDetail {
  img_list: string[];
  description: string[];
}

export interface Skill {
  proficient: SkillDetail[];
  intermediate: SkillDetail[];
  basic: SkillDetail[];
  tools: SkillDetail[];
}

export enum WorkStatus {
  Service = 'on_service',
  ShutDown = 'shut_down'
}

export interface Work {
  name: string;
  description: string;
  details: string[];
  img_url: string;
  status: WorkStatus;
  store_android?: string;
  store_ios?: string;
}
