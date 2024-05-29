import * as React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface ToolTipProps {
    content: string;
    children: React.ReactNode;
    delayDuration?: number
    disabled?: boolean
}

const ToolTip: React.FC<ToolTipProps> = ({ content, children, delayDuration = 0, disabled = false }) => {

    if (disabled) return <>{children}</>
    return (<TooltipProvider delayDuration={delayDuration} disableHoverableContent={disabled}>
        <Tooltip>
            <TooltipTrigger disabled={disabled}>{children}</TooltipTrigger>
            <TooltipContent>
                <p>{content} </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>)
}

export { ToolTip }