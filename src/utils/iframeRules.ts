/**
 * 更新 iframe 的 CORS 规则
 */
export function useIframeRules() {
  const { id, rules } = generateIframeCORSRules()

  // 更新动态规则
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [id],
    addRules: rules,
  })
}

/**
 * 生成 iframe 的 CORS 规则
 */
function generateIframeCORSRules() {
  const RULE_ID = 1
  const rules = [
    {
      id: RULE_ID,
      condition: {
        urlFilter: '*',
        resourceTypes: [chrome.declarativeNetRequest.ResourceType.SUB_FRAME],
      },
      action: {
        type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
        responseHeaders: [
          {
            header: 'X-Frame-Options',
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          },
          {
            header: 'Frame-Options',
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          },
          {
            header: 'Content-Security-Policy',
            operation: chrome.declarativeNetRequest.HeaderOperation.REMOVE,
          },
          {
            header: 'ALLOW-FROM',
            operation: chrome.declarativeNetRequest.HeaderOperation.SET,
            value: '*',
          },
        ],
      },
    },
  ]

  return {
    id: RULE_ID,
    rules,
  }
}
