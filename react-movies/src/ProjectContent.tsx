const ProjectContent = (props: projectContentProps) => {
  return (
    <>
      <h2>Top part</h2>
      {props.children}
      <h2>Bottom part part</h2>
      {props.buttonPart}
    </>
  );
};

export default ProjectContent;

interface projectContentProps {
  //only 1 children can pass inside <ProjectContent> </ProjectContent>
  children: React.ReactNode; //any react node or HTML on the body
  buttonPart: React.ReactNode; // this is has to tuen as a parameter within the <Pro... buttonPart ={}>
}
