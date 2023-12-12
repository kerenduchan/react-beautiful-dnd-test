import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { boardService } from '../services/board.service'
import { Group } from './Group'

export function Board() {
    const [data, setData] = useState(boardService.getData())

    function onDragStart() {}

    function onDragUpdate() {}
    function onDragEnd(result) {
        const { destination, source, draggableId } = result
        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const newData = boardService.moveTask(
            draggableId,
            source.droppableId,
            source.index,
            destination.droppableId,
            destination.index
        )
        setData(newData)
    }

    return (
        <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
        >
            <div className="board">
                {data.board.groupIds.map((gId) => (
                    <Group
                        key={gId}
                        group={data.groups[gId]}
                        tasks={data.groups[gId].taskIds.map(
                            (tId) => data.tasks[tId]
                        )}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}
