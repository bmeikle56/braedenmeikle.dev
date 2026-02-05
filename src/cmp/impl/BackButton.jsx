import { useNavigate } from 'react-router-dom'

function BackButton({ txt, route, theme }) {
  const navigate = useNavigate()

  return (
    <button
      style={{
        position: 'fixed', 
        top: 20,
        left: 20,
        zIndex: 10,
        display: 'flex',
        color: theme,
        fontSize: 12,
        background: 'black',
        border: 'none',
        borderRadius: 8,
        padding: '6px 10px',
      }}
      onClick={() => navigate(route)}
    >
      <pre style={{fontSize: 12, color: theme, textShadow: `0 0 6px ${theme}, 0 0 6px ${theme}, 0 0 6px ${theme}`, margin: 0}}>{txt}</pre>
    </button>
  )
}

export default BackButton