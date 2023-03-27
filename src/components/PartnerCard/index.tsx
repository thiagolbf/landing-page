import { PartnerContainer, PartnerContent } from "./style";

interface PartnerCardProps {
  title: string;
}

export const PartnerCard = ({ title }: PartnerCardProps) => {
  const partnerTitle = title;

  return (
    <PartnerContainer>
      <PartnerContent>
        <p className="title">{partnerTitle}</p>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>confira</button>
      </PartnerContent>

      <PartnerContent>
        <p className="title">{partnerTitle}</p>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>confira</button>
      </PartnerContent>
    </PartnerContainer>
  );
};
