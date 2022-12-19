import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterText = styled.p`
  font-weight: 700;
  margin-bottom: 20px;
`;
export const FilterInput = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 10px 0 10px;
  outline: thin dashed blue;
  &::placeholder {
    font-size: 14px;
  }
`;
