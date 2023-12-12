import { Draggable } from 'react-beautiful-dnd'

export function Task({ task, index }) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="task-content">{task.content}</div>
                </div>
            )}
        </Draggable>
    )
}
