type SkillsBadgeProps = {
  skill: string;
};

const SkillsBadge = ({ skill }: SkillsBadgeProps) => {
  return (
    <span
      style={{
        backgroundColor: "#e0f7fa",
        padding: "4px 8px",
        borderRadius: "8px",
        fontSize: "12px",
      }}
    >
      {skill}
    </span>
  );
};

export default SkillsBadge;
