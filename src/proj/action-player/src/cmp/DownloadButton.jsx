import { useNavigate } from 'react-router-dom'

function DownloadButton() {
  const navigate = useNavigate()
  const txt = 'Download'

  return (
    <button style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      height: '4vh',
      color: 'rgb(0,255,255)',
      fontSize: 12,
      background: 'black',
      border: 'none',
      borderRadius: 8,
      padding: '6px 10px 6px 10px',
      margin: '15px 0 0 15px',
      textShadow: `0 0 7px white, 0 0 7px white`
    }}
    onClick={() => navigate('/download')}
    >
      <pre>{txt}</pre>
      &rArr; 
    </button>
  )
}

export default DownloadButton