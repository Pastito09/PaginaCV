import * as Tooltip from "@radix-ui/react-tooltip"
import { Mail } from "react-feather"
import { Link } from "react-router-dom"

export const Gmail = () => {
  return (
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger >
        <Link to="mailto:patriciozhogan@gmail.com" target='_blank'>
                <Mail style={{color: "#0B5345"}} />
            </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Enviar email.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
  )
}
