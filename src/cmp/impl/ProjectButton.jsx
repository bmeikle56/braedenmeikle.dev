import { useNavigate } from 'react-router-dom'

function ProjectButton({ theme, txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      display: 'flex', 
      justifyContent: 'flex-start', 
      background: 'black',
      padding: '0 16px 0 16px',
      borderRadius: 16,
      border: 'none'
    }}
    onClick={() => navigate(route)}
    >
      <pre style={{
        color: theme,
        textShadow: `0 0 5px ${theme}, 0 0 12px ${theme}, 0 0 15px ${theme}`,
        fontSize: 16
      }}>{txt}</pre>
    </button>
  )
}

export default ProjectButton