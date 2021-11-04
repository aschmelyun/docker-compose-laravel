export default function useChat() {
  const resolveAvatarBadgeVariant = status => {
    if (status === 'online') return 'success'
    if (status === 'busy') return 'danger'
    if (status === 'away') return 'warning'
    return 'secondary'
  }

  return {
    resolveAvatarBadgeVariant,
  }
}
