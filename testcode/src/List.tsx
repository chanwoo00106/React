import { FC } from "react";

interface Task {
  id: number;
  title: string;
}

interface ListProps {
  tasks: Task[];
}

const List: FC<ListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default List;
