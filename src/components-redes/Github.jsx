 import * as Tooltip from '@radix-ui/react-tooltip';
import { GitHub } from 'react-feather';
import { Link } from 'react-router-dom';



export const Github = () => {
  return (
    <>
    <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Link to="https://github.com/Pastito09" target='_blank'>
                <GitHub style={{color: "#0B5345"}}/>
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className='TooltipContent' >
            Ir a la página.
          <Tooltip.Arrow className='TooltipArrow' />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
    </>
  )
}
