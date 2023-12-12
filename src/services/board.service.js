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
    _cutTask(taskId, sourceGroupId)
    _pasteTask(taskId, targetGroupId, targetIndex)
    return _data
}

function _cutTask(taskId, groupId) {
    const group = { ..._data.groups[groupId] }
    group.taskIds = group.taskIds.filter((tId) => tId !== taskId)
    _updateGroup(group)
}

function _pasteTask(taskId, groupId, index) {
    const group = { ..._data.groups[groupId] }
    group.taskIds = [...group.taskIds]
    group.taskIds.splice(index, 0, taskId)
    _updateGroup(group)
}

function _updateGroup(group) {
    _data = { ..._data, groups: { ..._data.groups, [group.id]: group } }
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
