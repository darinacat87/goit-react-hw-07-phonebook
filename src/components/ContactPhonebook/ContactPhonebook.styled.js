import styled from '@emotion/styled';

export const ContactPhonebooks = styled.li`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Name = styled.span`
  font-weight: 500;
  margin: auto;
  color: grey;
`;
export const Phone = styled.span`
  font-weight: 500;
  margin: auto;
  color: grey;
`;

export const DeleteBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  :hover,
  :focus {
    background-color: grey;
  }
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
