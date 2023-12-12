import { Task } from './Task'
import { Droppable } from 'react-beautiful-dnd'

export function Group({ group, tasks }) {
    return (
        <Droppable droppableId={group.id}>
            {(provided, snapshot) => (
                <div
                    className={`group ${
                        snapshot.isDraggingOver ? 'dragging-over' : ''
                    }`}
                >
                    <div className="title">{group.title}</div>
                    <div
                        className="task-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </div>
                </div>
            )}
        </Droppable>
    )
}
