import { TaskList } from './TaskList'
import { Task } from './Task'
import { Droppable } from 'react-beautiful-dnd'

export function Group({ group, tasks }) {
    return (
        <div className="group">
            <div className="title">{group.title}</div>

            <Droppable droppableId={group.id}>
                {(provided, snapshot) => (
                    <TaskList
                        className={
                            snapshot.isDraggingOver ? 'dragging-over' : ''
                        }
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Task key={task.id} index={index} task={task} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </div>
    )
}
