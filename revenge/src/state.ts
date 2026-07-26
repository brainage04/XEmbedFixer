import { storage } from "@vendetta/plugin";

export interface XEmbedFixerStorage {
    convertAlreadySentMessages: boolean;
    convertMessagesISend: boolean;
    convertOtherServiceDomains: boolean;
    customDomain: string;
    domain: string;
}

export const pluginStorage = storage as XEmbedFixerStorage;

export function initializeStorage() {
    pluginStorage.convertMessagesISend ??= true;
    pluginStorage.convertAlreadySentMessages ??= true;
    pluginStorage.convertOtherServiceDomains ??= true;
    pluginStorage.domain ??= "fixupx.com";
    pluginStorage.customDomain ??= "";
}
