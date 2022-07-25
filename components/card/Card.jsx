import { CardsWrapper, CardTitle, IconWrapper } from "./Card.styled";

export const Card = ({ card }) => {
  return (
    <CardsWrapper onClick={card.onSelect}>
      <CardTitle>{card.title}</CardTitle>
      <IconWrapper>{card.icon}</IconWrapper>
    </CardsWrapper>
  );
};
