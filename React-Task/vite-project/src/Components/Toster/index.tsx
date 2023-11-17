import { Alert, AlertColor, Snackbar } from "@mui/material";

interface toasterProps {
  open?: boolean;
  severity?: AlertColor | undefined;
  message?: string;
}

const handleClose = () => {};

export default function ToasterComponent({
  open,
  severity,
  message,
}: toasterProps) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity={severity} sx={{ width: "100%" }} onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
