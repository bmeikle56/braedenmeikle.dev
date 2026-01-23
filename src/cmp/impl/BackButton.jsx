import { useNavigate } from 'react-router-dom'

function BackButton({ txt, route, theme }) {
  const navigate = useNavigate()

  return (
    <button style={{
      display: 'flex',
      color: theme,
      fontSize: 12,
      background: 'black',
      border: 'none',
      borderRadius: 8,
      padding: '6px 10px 6px 10px',
      margin: '15px 0 0 15px',
      textShadow: `0 0 6px ${theme}, 0 0 6px ${theme}, 0 0 6px ${theme}`
    }}
    onClick={() => navigate(route)}
    >
      &lArr; {txt}
    </button>
  )
}

export default BackButton