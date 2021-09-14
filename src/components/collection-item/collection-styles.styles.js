import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

/** @createdOn 20-Aug-2021 */
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

/** @createdOn 20-Aug-2021 */
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

/** @createdOn 20-Aug-2021 */
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

/** @createdOn 20-Aug-2021 */
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

/** @createdOn 20-Aug-2021 */
export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

/** @createdOn 20-Aug-2021 */
export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
