export { initialData };

const initialData = {
  tasks: {
    t1: { id: "t1", content: "Take out the trash" },
    t2: { id: "t2", content: "Watch TV" },
    t3: { id: "t3", content: "Charge phone" },
    t4: { id: "t4", content: "Cook dinner" },
  },

  groups: {
    g1: { id: "g1", title: "To do", taskIds: ["t1", "t2", "t3", "t4"] },
  },

  board: {
    groupIds: ["g1"],
  },
};
