/**
 * Registry of production service-page content, keyed by slug. The
 * `/services/[slug]` route reads from here — adding a service means adding a
 * content file and one entry.
 */
import type { ServiceContent } from "@/types/templates";

import { customerSupport } from "./customer-support";
import { liveChat } from "./live-chat";
import { emailSupport } from "./email-support";
import { phoneSupport } from "./phone-support";
import { technicalSupport } from "./technical-support";
import { communityModeration } from "./community-moderation";
import { vipManagement } from "./vip-management";
import { kyc } from "./kyc";
import { fraudPrevention } from "./fraud-prevention";
import { qualityAssurance } from "./quality-assurance";
import { leadGeneration } from "./lead-generation";
import { appointmentSetting } from "./appointment-setting";
import { paymentSupport } from "./payment-support";
import { backOffice } from "./back-office";
import { workforceManagement } from "./workforce-management";
import { virtualAssistance } from "./virtual-assistance";
import { socialMediaSupport } from "./social-media-support";
import { omnichannelSupport } from "./omnichannel-support";
import { knowledgeBaseManagement } from "./knowledge-base-management";
import { customerRetention } from "./customer-retention";

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "customer-support": customerSupport,
  "live-chat": liveChat,
  "email-support": emailSupport,
  "phone-support": phoneSupport,
  "technical-support": technicalSupport,
  "community-moderation": communityModeration,
  "vip-management": vipManagement,
  kyc,
  "fraud-prevention": fraudPrevention,
  "quality-assurance": qualityAssurance,
  "lead-generation": leadGeneration,
  "appointment-setting": appointmentSetting,
  "payment-support": paymentSupport,
  "back-office": backOffice,
  "workforce-management": workforceManagement,
  "virtual-assistance": virtualAssistance,
  "social-media-support": socialMediaSupport,
  "omnichannel-support": omnichannelSupport,
  "knowledge-base-management": knowledgeBaseManagement,
  "customer-retention": customerRetention,
};

export const SERVICE_SLUGS = Object.keys(SERVICE_CONTENT);
