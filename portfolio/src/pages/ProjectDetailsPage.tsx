import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doesProjectExist } from "../lib/api";

export function ProjectDetailsPage() {
  const [project, setProject] = useState<string>();
  const [error, setError] = useState<Error>();
  const { projectName } = useParams();

  useEffect(() => {
    if (!doesProjectExist(projectName)) {
      setError(new Error("This project does not exist."));
    } else {
      setProject(projectName);
    }
  }, []);

  if (error) {
    return (
      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-center px-8">
        <div>{error.message}</div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-20 flex max-w-7xl items-center justify-center px-8">
      <div>{project}</div>
    </div>
  );
}
