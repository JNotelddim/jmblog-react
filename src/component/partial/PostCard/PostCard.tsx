// Modules
import React from 'react';

// Styles
import { Container, Title, Summary } from './PostCard.style';

// Types
import { PostCardProps } from './PostCard.type';

const PostCard = ({ post, onClick, className }: PostCardProps) => {
  const { title, summary } = post;

  return (
    <Container onClick={onClick} className={className}>
      <Title>{title}</Title>

      <Summary>{summary}</Summary>
    </Container>
  );
};

export default PostCard;
