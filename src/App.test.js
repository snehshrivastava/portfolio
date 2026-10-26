import { render, screen } from "@testing-library/react";
import Experience from "./components/Experience/Experience";
import Techstack from "./components/About/Techstack";
import Toolstack from "./components/About/Toolstack";
import { experience, education, skills } from "./data/resume";

test("renders every role from the resume data", () => {
  render(<Experience />);
  for (const job of experience) {
    expect(screen.getByText(`at ${job.company}`)).toBeInTheDocument();
  }
  expect(screen.getByText(education.degree)).toBeInTheDocument();
});

test("shows every resume technology exactly once across the skill grids", () => {
  render(
    <>
      <Techstack />
      <Toolstack />
    </>
  );
  for (const name of skills.flatMap((s) => s.technologies || [])) {
    expect(screen.getAllByText(name)).toHaveLength(1);
  }
});
