import { preactMounter } from '~/preact-internal/mounter'
import { OfferLayout1 } from './offer-layout-1'
import { layout } from '~/platform/layout'

const mounter: layout.MounterFactory = () => new preactMounter.PreactMounter(OfferLayout1)

export default mounter