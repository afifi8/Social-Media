

export const NavLink = ({
    icon: Icon,
    label,
    badgeCount,
    onClick,
  }: {
    icon: React.ComponentType;
    label: string;
    badgeCount?: number;
    onClick?: () => void;
  }) => (
    <div
      className="text-white text-center relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative mx-auto w-fit">
        <Icon className="text-3xl mb-1 mx-auto" />
        {badgeCount !== undefined && (
          <span
            className="absolute bg-blue-600 w-[20px] h-[20px] flex 
            justify-center items-center text-xs rounded-full top-[-9px] right-[-9px]"
          >
            {badgeCount}
          </span>
        )}
      </div>
      <div>{label}</div>
    </div>
  );

