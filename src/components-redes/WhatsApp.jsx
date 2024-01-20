import * as Tooltip from "@radix-ui/react-tooltip"
import { Link } from "react-router-dom"
import { Phone } from "react-feather"

export const WhatsApp = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger >
        <Link to="https://wa.me/1138560060" target='_blank'>
                <Phone style={{color: "#0B5345"}} />
            </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Enviar un mensaje.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
