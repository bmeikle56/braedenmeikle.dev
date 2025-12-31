import { useNavigate } from 'react-router-dom'

function ProjectButton({ txt, route }) {
  const navigate = useNavigate()

  return (
    <button style={{
      display: 'flex', 
      justifyContent: 'flex-start', 
      width: '160px',
      background: 'black',
      padding: '0 16px 0 16px',
      borderRadius: 16,
      border: 'none'
    }}
    onClick={() => navigate(route)}
    >
      <pre style={{
        color: 'rgb(12,123,0)',
        textShadow: `0 0 5px rgb(12,123,0), 0 0 12px rgb(12,123,0), 0 0 15px rgb(12,123,0)`,
        fontSize: 16
      }}>{txt}</pre>
    </button>
  )
}

export default ProjectButton