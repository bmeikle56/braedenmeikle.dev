import { useNavigate } from 'react-router-dom'
import PremiumSwiftFont from './PremiumSwiftFont'

function PremiumSwiftButton({ txt, route }) {
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
      <PremiumSwiftFont txt={txt}/>
    </button>
  )
}

export default PremiumSwiftButton