import { forwardRef } from "react";

export const TaskList = forwardRef(function TaskList(props, ref) {
  const { children } = props;
  return (
    <div ref={ref} className="tasks">
      {children}
    </div>
  );
});
