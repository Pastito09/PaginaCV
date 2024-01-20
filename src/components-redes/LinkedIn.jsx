import * as Tooltip from "@radix-ui/react-tooltip"
import { Link } from "react-router-dom"
import { Linkedin } from "react-feather"

export const LinkedIn = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger >
        <Link to="https://www.linkedin.com/in/patricio-hogan-828484a5/" target='_blank'>
                <Linkedin style={{color: "#0B5345"}} />
            </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Ir al perfil.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
