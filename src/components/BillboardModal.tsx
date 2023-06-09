import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Film } from "./Billboard";
interface BillboardModalProps {
  film: Film;
  isOpen: boolean;
  onClose: () => void;
}

const BillboardModal: React.FC<BillboardModalProps> = ({ film, isOpen, onClose }) => {
  return (
    <Dialog className="rounded-lg" open={isOpen} onClose={onClose}>
    <DialogTitle className="bg-zinc-900 font-extrabold text-white"><i className="h-20">{film.title}</i></DialogTitle>
    <img src={film.thumbnailUrl} alt=""/>
    <DialogContent className="bg-zinc-900 text-white">
      <p>{film.description}</p>
      <p><i className="font-bold">Genre:</i> {film.genre}</p>
      <p><i className="font-bold">Duration:</i> {film.duration}</p>
    </DialogContent>
    <DialogActions className="bg-zinc-900 text-white">
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  );
};

export default BillboardModal;
