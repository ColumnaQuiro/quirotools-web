import { SLACK_SERVICES_URL } from '~/constants/urls'

export async function useSendSlackMessage({ channel, text }: { channel: string; text: string }) {
  await $fetch(`${SLACK_SERVICES_URL}${channel}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: {
      text
    }
  })
}
