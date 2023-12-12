import { Task } from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'

export function Group({ group, tasks, index }) {
    return (
        <Draggable draggableId={group.id} index={index}>
            {(draggableProvided) => (
                <div
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                >
                    <Droppable droppableId={group.id} type="task">
                        {(droppableProvided, snapshot) => (
                            <div
                                className={`group ${
                                    snapshot.isDraggingOver
                                        ? 'dragging-over'
                                        : ''
                                }`}
                            >
                                <div
                                    className="title"
                                    {...draggableProvided.dragHandleProps}
                                >
                                    {group.title}
                                </div>
                                <div
                                    className="task-list"
                                    ref={droppableProvided.innerRef}
                                    {...droppableProvided.droppableProps}
                                >
                                    {tasks.map((task, index) => (
                                        <Task
                                            key={task.id}
                                            index={index}
                                            task={task}
                                        />
                                    ))}
                                    {droppableProvided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}
