import * as Tooltip from "@radix-ui/react-tooltip"
import { Link } from "react-router-dom"
import { Instagram } from "react-feather"

export const InstagramButton = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger >
        <Link to="https://www.instagram.com/pasto.on.the.controls/" target='_blank'>
                <Instagram style={{color: "#0B5345"}} />
            </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Ir al perfil de instagram.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
