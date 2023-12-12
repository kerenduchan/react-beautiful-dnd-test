export const boardService = {
    getData,
    moveTask,
}

function getData() {
    return _data
}

function moveTask(
    taskId,
    sourceGroupId,
    sourceIndex,
    targetGroupId,
    targetIndex
) {
    // for now, source group and target group are the same
    const group = _data.groups[targetGroupId]
    const newTaskIds = [...group.taskIds]
    newTaskIds.splice(sourceIndex, 1)
    newTaskIds.splice(targetIndex, 0, taskId)

    const newGroup = { ...group, taskIds: newTaskIds }

    _data = {
        ..._data,
        groups: {
            ..._data.groups,
            [newGroup.id]: newGroup,
        },
    }

    return _data
}

let _data = {
    tasks: {
        t1: { id: 't1', content: 'Take out the trash' },
        t2: { id: 't2', content: 'Watch TV' },
        t3: { id: 't3', content: 'Charge phone' },
        t4: { id: 't4', content: 'Cook dinner' },
    },

    groups: {
        g1: { id: 'g1', title: 'To do', taskIds: ['t1', 't2', 't3', 't4'] },
        g2: { id: 'g2', title: 'Done', taskIds: [] },
    },

    board: {
        groupIds: ['g1', 'g2'],
    },
}
