export const MainButton = ({ type, children, icon, ...props }) => {
  const Icon = icon;
  const ButtonType = type;

  return (
    <ButtonType props={props}>
      {Icon && <Icon />}
      {children}
    </ButtonType>
  );
};
