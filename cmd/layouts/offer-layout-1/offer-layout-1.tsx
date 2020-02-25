import './offer-layout-1.scss'
import { h } from "preact"
import { Input, LightboxContainer, Button, ButtonTheme, Attribution } from "~/preact-internal/components"
import { useService$ } from '~/preact-internal/context'
import { Header, Title, Subtitle } from './components'

export const OfferLayout1 = () => {
  const copyService = useService$(s => s.copyService)
  
  return <LightboxContainer className="rokt-layout-offer-layout-1">
    <Header text={copyService.getCopy('heading')}/>
    <section className='main-section'>
      <div className="left">
        <Title>{copyService.getCopy('title')}</Title>
        <Subtitle>{copyService.getCopy('subtitle')}</Subtitle>
        
        <Input placeholder="Mobile"/>

        <div className="button-container">
          <Button 
            theme={ButtonTheme.Primary} 
            style={{ boxShadow: 'none' }}
            inverted={true}>
            No Thanks
          </Button>  
          <Button 
            theme={ButtonTheme.Primary}>
            Send Link
          </Button>  
        </div>
        <p className="sms-notice">
          {copyService.getCopy('disclaimer')}
        </p> 
      </div>
      <div className="right">
        <img 
          style={{maxWidth: '140px'}} 
          src={copyService.getCopy('image.src')} />
      </div>
    </section>
    <Attribution />
  </LightboxContainer>
}