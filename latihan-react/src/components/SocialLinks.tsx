type SocialLinksProps = {
  link?: {
    instagram?: string;
    linkedin?: string;
  };
};

const SocialLinks = ({ link }: SocialLinksProps) => {
  if (!link || (!link.instagram && !link.linkedin)) {
    return <p>Tidak ada sosial media</p>;
  }

  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {link.linkedin && (
        <li>
          <a href={link.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      )}
      {link.instagram && (
        <li>
          <a href={link.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialLinks;
