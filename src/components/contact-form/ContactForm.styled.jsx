import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 30px;
  margin: 0 0 20px 0;
  border-radius: 40px;
  border: 2px dotted #9dfaf1;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  color: #9dfaf1;
`;

export const Label = styled.label`
  display: flex;
  gap: 20px;
`;

export const InputTitle = styled.span`
  width: 100px;
`;

export const Input = styled.input`
  margin: 0 0 10px 0;
  padding: 4px 10px;
  background: linear-gradient(90deg, #056272 50%, #02745d 100%);
  font-size: 20px;
  font-weight: 900;
  color: #9dfaf1;

  ::placeholder {
    color: #6daca6;
  }
`;

export const SubmitBtn = styled.button`
  width: 200px;
  margin: 0 auto;
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 20px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover,
  :focus {
    .button-74:hover {
      background-color: #fff;
    }
    :active {
      box-shadow: #422800 2px 2px 0 0;
      transform: translate(2px, 2px);
    }
    @media (min-width: 768px) {
      .button-74 {
        min-width: 120px;
        padding: 0 25px;
      }
    }
  }
`;
