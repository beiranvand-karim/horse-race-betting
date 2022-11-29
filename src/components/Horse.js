export const Horse = ({ horse }) => {
  return (
    <div>
      <div>
        trainer: {horse.trainer.firstName} {horse.trainer.lastName}
      </div>
      <div>father : {horse.pedigree.father.name}</div>
    </div>
  );
};
