import * as Tooltip from "@radix-ui/react-tooltip"
import { Link } from "react-router-dom"
import { Facebook } from "react-feather"

export const FacebookButton = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger >
        <Link to="https://www.facebook.com/patricio.hogan" target='_blank'>
                <Facebook style={{color: "#0B5345"}} />
            </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Ir al sitio.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
