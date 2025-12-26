import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function DotsMobileStepper({ data = [] }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  // ✅ data dijamin array
  const maxStep = data.length > 0 ? data.length - 1 : 0;

  React.useEffect(() => {
    if (activeStep > maxStep) {
      setActiveStep(0);
    }
  }, [data.length, maxStep, activeStep]);

  // ✅ JIKA DATA KOSONG, JANGAN RENDER STEPPER
  if (!data.length) {
    return null;
  }

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      <div>{data[activeStep]}</div>

      <MobileStepper
        variant="dots"
        steps={data.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxStep}
          >
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </>
  );
}
