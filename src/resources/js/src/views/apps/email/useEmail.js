export default function useEmail() {
  const resolveLabelColor = label => {
    if (label === 'personal') return 'success'
    if (label === 'company') return 'primary'
    if (label === 'important') return 'warning'
    if (label === 'private') return 'danger'
    return 'secondary'
  }

  return {
    resolveLabelColor,
  }
}
