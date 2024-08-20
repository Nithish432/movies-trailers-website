import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

function Counter() {
    // let like = 10;
    // hooks
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const incrementLike = () => setLike(like + 1);
    const incrementDisLike = () => setDislike(dislike + 1);
  
  //  useEffect(() => {
  //   console.log("The like value is updated:", like);
  //  });

  // mostly preferred
  //  useEffect(() => {
  //   console.log("The like value is updated:", like);
  //  }, [like, dislike]);

  //  useEffect(() => {
  //   console.log("The 👍 like value is updated:", like);
  //  }, [like]);

  //  useEffect(() => {
  //   console.log("The 👎 dislike value is updated:", dislike);
  //  }, [dislike]);

    return (
      <div className="counter-container">
        {/* camelCase */}
        <IconButton
          color="primary"
          onClick={incrementLike}
          aria-label="Toggle summary"
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>
        <IconButton
          color="error"
          onClick={incrementDisLike}
          aria-label="Toggle summary"
        >
          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
        </IconButton>
      </div>
    );
  }

export {Counter};