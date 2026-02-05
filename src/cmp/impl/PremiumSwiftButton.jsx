import { useNavigate } from 'react-router-dom'
import PremiumSwiftFunc from '../../proj/premium-swift/PremiumSwiftFunc'

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
      <PremiumSwiftFunc txt={txt}/>
    </button>
  )
}

export default PremiumSwiftButton