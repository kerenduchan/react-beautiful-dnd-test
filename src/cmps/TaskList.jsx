import { forwardRef } from 'react'

export const TaskList = forwardRef(function TaskList(props, ref) {
    const { className, children } = props
    console.log('className', className)
    return (
        <div ref={ref} className={`task-list ${className ? className : ''}`}>
            {children}
        </div>
    )
})
