import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { boardService } from '../services/board.service'
import { Group } from './Group'

export function Board() {
    const [data, setData] = useState(boardService.getData())

    function onDragStart() {}

    function onDragUpdate() {}
    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result
        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        if (type === 'group') {
            const newData = boardService.moveGroup(
                draggableId,
                source.index,
                destination.index
            )
            setData(newData)
        } else if (type === 'task') {
            const newData = boardService.moveTask(
                draggableId,
                source.droppableId,
                source.index,
                destination.droppableId,
                destination.index
            )
            setData(newData)
        }
    }

    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <Droppable droppableId="board" direction="horizontal" type="group">
                {(provided) => (
                    <div
                        className="board"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {data.board.groupIds.map((gId, index) => (
                            <Group
                                key={gId}
                                group={data.groups[gId]}
                                index={index}
                                tasks={data.groups[gId].taskIds.map(
                                    (tId) => data.tasks[tId]
                                )}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
