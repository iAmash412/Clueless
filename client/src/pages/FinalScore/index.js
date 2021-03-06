import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../../actions";

const FinalScore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToQuizSetup = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography
        variant="h3"
        fontWeight="bold"
        mb={3}
        data-testid="final-score"
      >
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToQuizSetup} variant="outlined">
        BACK
      </Button>
    </Box>
  );
};
export default FinalScore;
