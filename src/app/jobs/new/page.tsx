import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

const metadata: Metadata = {
  title: "Post a new job",
};

export default function Page() {
  return <NewJobForm />;
}

export { metadata };
