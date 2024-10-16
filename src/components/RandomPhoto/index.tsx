import React from "react";
import { Button } from "reactstrap";
import "./styles.scss";

interface RandomPhotoProps {
  name?: string;
  imageUrl?: string;
  onImageUrlChange?: (newImageUrl: string) => void;
  onRandomButtonBlur?: () => void;
}

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto: React.FC<RandomPhotoProps> = ({
  name = "",
  imageUrl = "",
  onImageUrlChange = undefined,
  onRandomButtonBlur = undefined,
}: RandomPhotoProps) => {
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>

      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click random again!"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
