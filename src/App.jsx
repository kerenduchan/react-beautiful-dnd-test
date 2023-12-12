import { useState } from "react";
import { initialData } from "./initialData";
import { Group } from "./Group";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState(initialData);

  function onDragStart() {}

  function onDragUpdate() {}
  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const group = data.groups[source.droppableId];
    const newTaskIds = [...group.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newGroup = { ...group, taskIds: newTaskIds };

    const newData = {
      ...data,
      groups: {
        ...data.groups,
        [newGroup.id]: newGroup,
      },
    };

    setData(newData);
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className="app">
        {data.board.groupIds.map((gId) => (
          <Group
            key={gId}
            group={data.groups[gId]}
            tasks={data.groups[gId].taskIds.map((tId) => data.tasks[tId])}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
