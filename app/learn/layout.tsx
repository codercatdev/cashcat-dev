import CourseChaptersDropdown from "./course-chapters-dropdown"

export default function LearnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CourseChaptersDropdown />
      {children}
    </>
  );
}
