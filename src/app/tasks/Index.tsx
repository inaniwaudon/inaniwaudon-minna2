import PageWrapper from "@/components/common/PageWrapper";
import { useEffect, useState } from "react";
import Main from "./Main";

const title = "やること・やったこと";

export interface Task {
  title: string;
  number: number;
  state: "open" | "closed";
  created_at: string;
  closed_at: string;
  public: boolean;
}

const fetchTasks = async () => {
  const url = new URL("/api/tasks", import.meta.env.VITE_BACKEND_URL);
  try {
    const response = await fetch(url.href);
    if (!response.ok) {
      return [];
    }
    const json: { tasks: Task[] } = await response.json();
    return json.tasks;
  } catch {
    return [];
  }
};

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      setTasks(await fetchTasks());
    })();
  }, []);

  return (
    <PageWrapper title={title} path="/tasks">
      <Main title={title} tasks={tasks} />
    </PageWrapper>
  );
};

export default Index;
