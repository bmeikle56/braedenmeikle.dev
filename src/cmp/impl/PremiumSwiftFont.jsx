export default function PremiumSwiftFont({ txt }) {
  return (
    <pre style={{
      display: 'inline-block',
      fontSize: 24,
      color: 'rgb(174, 0, 255)',
      width: 'fit-content',
      textShadow: '0 0 12px rgb(155,155,155)',
      borderRadius: 20,
      margin: 0,
    }}>{txt}</pre>
  )
}